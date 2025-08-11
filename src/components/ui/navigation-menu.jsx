import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavigationMenu({ className, children, viewport = true, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("group flex flex-1 list-none items-center justify-center gap-6", className)}
      {...props}
    />
  );
}

export function NavigationMenuItem({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Item className={cn("relative", className)} {...props} />
  );
}

export function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out " +
        "bg-transparent text-[#e5d4ff] hover:text-[#b794f4] " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b794f4]/50 " +
        "data-[state=open]:text-[#c9a6ff] data-[state=open]:scale-105",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

export function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out " +
        "data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out " +
        "data-[motion=from-end]:slide-in-from-right-4 data-[motion=from-start]:slide-in-from-left-4 " +
        "data-[motion=to-end]:slide-out-to-right-4 data-[motion=to-start]:slide-out-to-left-4 " +
        "top-0 left-0 w-full p-2 md:absolute md:w-auto " +
        "bg-[#0f0b1e]/80 backdrop-blur-md text-white rounded-xl shadow-lg border border-[#b794f4]/20 " +
        "transition-all duration-300 ease-in-out",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuViewport({ className, ...props }) {
  return (
    <div className="absolute top-full left-0 isolate z-50 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center bg-[#0f0b1e]/80 backdrop-blur-md text-white " +
          "data-[state=open]:animate-in data-[state=closed]:animate-out " +
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 " +
          "relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] " +
          "w-full overflow-hidden rounded-xl border border-[#b794f4]/20 shadow-lg " +
          "md:w-[var(--radix-navigation-menu-viewport-width)] transition-all duration-300 ease-in-out",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function NavigationMenuLink({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        "flex flex-col gap-1 rounded-sm p-2 text-sm transition-all duration-300 ease-in-out outline-none " +
        "text-[#e5d4ff] hover:text-[#b794f4] hover:bg-[#b794f4]/10 " +
        "focus-visible:ring-2 focus-visible:ring-[#b794f4]/40",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuIndicator({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Indicator
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out " +
        "data-[state=hidden]:fade-out data-[state=visible]:fade-in " +
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-[#b794f4] relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}
