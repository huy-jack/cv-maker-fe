import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  printMode?: boolean;
}

const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  ({ children, className, printMode = false, ...props }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className={cn(
            "bg-white",
            // A4 dimensions: 210mm × 297mm
            "w-[210mm] h-[297mm]",
            // Padding and styling
            "mx-auto p-8 my-5",
            // Shadow and border in preview mode
            !printMode && "shadow-lg border",
            // Print-specific styles
            "print:shadow-none print:border-none",
            className
          )}
          {...props}
        >
          {children}
        </div>

        <div className="text-center my-5">
          <Button className="mx-auto">
            <span>
              <Plus /> Add Page
            </span>
          </Button>
        </div>
      </>
    );
  }
);

PageWrapper.displayName = "A4Wrapper";

export default PageWrapper;
