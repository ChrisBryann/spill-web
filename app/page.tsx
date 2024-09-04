import { BlurFade, BorderBeam, Button, ModeToggle } from "@/components";
import DotPattern from "@/components/ui/dot-pattern";
import { ny } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <DotPattern
        className={ny(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        )}
      />
      <main className="min-h-screen mx-auto flex-1 overflow-hidden">
        <ModeToggle />
        <section
          id="header"
          className="relative mx-auto mt-32 max-w-5xl p-6 rounded-md text-center md:px-8 space-y-6"
        >
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl bg-clip-text font-bold tracking-tight sm:text-5xl xl:text-8xl">
              We&apos;re here to make splitting easy
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="text-pretty bg-clip-text font-semibold text-lg tracking-tight sm:text-xl xl:text-2xl">
              <span className="text-primary">Spill 💸</span> got you covered
            </p>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <div className="relative mx-auto space-x-4">
              <Button size={"lg"} className="shadow-md">
                Get started
              </Button>
              <Button variant={"secondary"} size={"lg"} className="shadow-md">
                Log in
              </Button>
            </div>
          </BlurFade>
        </section>
      </main>
    </>
  );
}
