import { Button, ModeToggle } from "@/components";

const Header = () => {
  return (
    <header className="animate-fade-in fixed left-0 top-0 z-50 w-full border-b backdrop-blur-md [--animation-delay:600ms]">
      <div className="container flex h-14 items-center justify-between space-x-4">
        <a className="text-lg font-semibold flex items-center" href="/">
          Spill
        </a>
        <div className="flex h-full items-center space-x-3">
          <ModeToggle />
          <Button variant={"ghost"}>Log in</Button>
          <Button variant={"secondary"}>Sign up</Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
