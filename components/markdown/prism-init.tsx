"use client";

import { useEffect } from "react";
import Prism from "prismjs";

// Import additional Prism languages if needed
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-go";
// Add more languages as needed

export default function PrismInit() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  return null;
}