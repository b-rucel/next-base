import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex sm:min-h-[85.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center px-2 sm:py-8 py-12">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video autoPlay loop muted playsInline
          className="fixed right-0 bottom-0 min-w-full min-h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>
      <Link href="https://github.com/b-rucel/aria-docs" target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-[2.4rem] leading-10 sm:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        Effortlessly build stunning sites with Next.js, React, and server components.
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground text-left sm:text-center">
        Built with the latest Next.js and React features, this modern template provides everything you need to launch your next web project quickly and efficiently.
      </p>
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
        <Link href={`/docs/`} className={buttonVariants({ className: "px-6", size: "lg" })}>
          Get Stared
        </Link>
        <Link href="/blog" className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}>
          Read Blog
        </Link>
      </div>
      <span className="sm:flex hidden flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-9 -mb-12 max-[800px]:mb-12 sm:text-base text-sm font-medium border rounded-full p-2.5 px-5 bg-muted/55">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"npx create-aria-doc <project-directory>"}
      </span>
    </div>
  );
}