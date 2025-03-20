"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo, NavMenu } from "./navbar";

export function SheetLeftbar() {
  return (
    <div className="sm:hidden block">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <AlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[250px] sm:w-[300px]">
          <div className="flex flex-col gap-8">
            <Logo />
            <div className="flex flex-col gap-6">
              <NavMenu isSheet={true} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
} 