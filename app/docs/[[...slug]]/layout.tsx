import PrismInit from "@/components/markdown/prism-init";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <PrismInit />
    </>
  );
}