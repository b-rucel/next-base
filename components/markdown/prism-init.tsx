"use server";

import Prism from "prismjs";

import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-go";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-ruby";

export async function highlightCode(code: string, language: string) {
  try {
    // Normalize language identifier
    const normalizedLang = language.toLowerCase();
    // Add fallbacks for common language aliases
    const langMap: Record<string, string> = {
      'js': 'javascript',
      'ts': 'typescript',
      'jsx': 'javascript',
      'tsx': 'typescript',
      'mdx': 'markdown',
      'py': 'python',
      'rb': 'ruby',
      'rs': 'rust',
      'sh': 'bash',
      'yml': 'yaml',
    };

    const finalLang = langMap[normalizedLang] || normalizedLang;

    if (!Prism.languages[finalLang]) {
      console.warn(`Language ${finalLang} not found, falling back to plain text`);
      return code;
    }

    const highlighted = Prism.highlight(code, Prism.languages[finalLang], finalLang);
    return highlighted;
  } catch (error) {
    console.error(`Failed to highlight code for language: ${language}`, error);
    return code;
  }
}

export default async function PrismInit() {
  return null;
}