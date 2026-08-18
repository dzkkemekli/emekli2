import * as React from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({ ...props }) {
  return <Dialog data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }) {
  return <DialogTrigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }) {
  return <DialogClose data-slot="sheet-close" {...props} />
}

function SheetContent({ className, children, side = "right", ...props }) {
  return (
    <DialogPortal data-slot="sheet-portal">
      <DialogOverlay
        data-slot="sheet-overlay"
        className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      />
      <DialogContent
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
          side === "top" &&
            "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
        <DialogClose className="absolute right-4 top-4 rounded-md p-0.5 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <XIcon className="size-5" />
          <span className="sr-only">Kapat</span>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
}

function SheetFooter({ className, ...props }) {
  return <div data-slot="sheet-footer" className={cn("mt-auto flex flex-col gap-2 p-6", className)} {...props} />
}

function SheetTitle({ className, ...props }) {
  return <DialogTitle data-slot="sheet-title" className={cn("text-foreground text-lg font-semibold", className)} {...props} />
}

function SheetDescription({ className, ...props }) {
  return <DialogDescription data-slot="sheet-description" className={cn("text-muted-foreground text-sm", className)} {...props} />
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription }
