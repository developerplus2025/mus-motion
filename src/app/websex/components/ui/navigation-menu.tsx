import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-7 w-max items-center  justify-center rounded-full    text-sm  transition-colors  text-[#7c7c7c] hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50  dark:data-[active]:text-white  dark:data-[state=open]:text-white"
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto ",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border backdrop-blur-2xl bg-popover text-popover-foreground shadow data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 transition-[width,_height] duration-300 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "data-[state=visible]:animate-fadeIn absolute data-[state=hidden]:animate-fadeOut top-[32px] z-[1] flex h-3 items-end justify-center overflow-hidden transition-transform duration-300  ",
      className
    )}
    {...props}
  >
    <div className="relative top-[8px] transition-transform duration-[400ms]">
      <svg
        fill="none"
        height={46}
        viewBox="0 0 158 46"
        width={158}
        className="navigation-menu_arrow__sM_lS"
      >
        <path
          d="M70.952 36.8018L55.1106 20.9604C47.384 13.2338 43.5207 9.37047 39.0122 6.6077C35.0151 4.15823 30.6573 2.35317 26.0988 1.25878C20.9573 0.0244141 15.4938 0.0244141 4.56672 0.0244141H153.132C142.205 0.0244141 136.742 0.0244141 131.6 1.25878C127.042 2.35317 122.684 4.15823 118.687 6.6077C114.178 9.37047 110.315 13.2338 102.588 20.9604L86.7469 36.8018C82.3853 41.1635 75.3137 41.1635 70.952 36.8018Z"
          fill="var(--arrow-bg)"
        />
        <path
          d="M153.132 5.60877C141.939 5.60877 137.253 5.64466 132.904 6.68885C128.915 7.64643 125.102 9.22586 121.605 11.3691C117.791 13.7062 114.452 16.9946 106.537 24.9091L90.6957 40.7506C84.1532 47.293 73.5457 47.293 67.0033 40.7505L51.1618 24.9091C43.2473 16.9946 39.9082 13.7062 36.0944 11.3691C32.5969 9.22586 28.7838 7.64643 24.7952 6.68885C20.4458 5.64466 15.7596 5.60877 4.56672 5.60877H0.668457V0.0244141H4.56672C15.4938 0.0244141 20.9573 0.0244141 26.0988 1.25878C30.6573 2.35317 35.0151 4.15823 39.0122 6.6077C43.5207 9.37047 47.384 13.2338 55.1106 20.9604L70.952 36.8018C75.3137 41.1635 82.3853 41.1635 86.7469 36.8018L102.588 20.9604C110.315 13.2338 114.178 9.37047 118.687 6.6077C122.684 4.15823 127.042 2.35317 131.6 1.25878C136.742 0.0244141 142.205 0.0244141 153.132 0.0244141H157.03V5.60877H153.132Z"
          fill="var(--menu-border-color)"
        />
      </svg>
    </div>
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
