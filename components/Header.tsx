"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components";
import { Sheet, SheetContent, SheetTrigger } from "@/components";
import { Button, ModeToggle } from "@/components";

type RouteType = {
  href: string;
  name: string;
};

const routes: RouteType[] = [
  {
    href: "/dashboard",
    name: "Dashboard",
  },
  {
    href: "/expenses",
    name: "Expenses",
  },
  {
    href: "/friends",
    name: "Friends",
  },
];

const Header = () => {
  const pathname: string = usePathname();

  return (
    <header className="w-full sticky left-0 top-0 z-50 flex h-16 items-center gap-4 border-b backdrop-blur-md px-4 md:px-6">
      {!pathname ? (
        <>
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              Spill
            </Link>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text${
                  pathname !== route.href && "-muted"
                }-foreground hover:text-foreground transition-colors`}
              >
                {route.name}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="size-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  Spill
                </Link>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text${
                      pathname !== route.href && "-muted"
                    }-foreground hover:text-foreground`}
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            {/* <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="text-muted-foreground absolute left-2.5 top-2.5 size-4" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form> */}
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="size-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      ) : (
        <nav className="w-full flex items-center justify-between gap-6 md:gap-5 lg:gap-6">
          <Link className="text-lg font-semibold flex items-center" href="/">
            Spill
          </Link>
          <div className="flex h-full items-center space-x-3">
            <ModeToggle />
            <Button variant={"ghost"}>Log in</Button>
            <Button variant={"secondary"}>Sign up</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export { Header };
