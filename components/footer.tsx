import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Coffee, HeartIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="absolute bottom-0 border-t w-full h-16 bg-background">
      <div className="max-w-[1450px] mx-auto w-[95vw] flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3">
        <div className="flex items-center gap-3">
          <Coffee className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center flex items-center gap-1">
            Made with 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-flex h-4 w-4 text-red-600 fill-current"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            by
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/b-rucel"
              target="_blank"
            >
              b-rucel
            </Link>
            . <span className="hidden md:flex">
            The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/b-rucel/aria-docs"
              target="_blank"
            >
              GitHub
            </Link>
            .
            </span>
          </p>
        </div>

        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/"
        target="_blank"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link
        href="https://github.com/sponsors/b-rucel"
        className={buttonVariants({ variant: "outline", size: "sm" })}
        target="_blank"
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}