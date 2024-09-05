import {
  AvatarCircles,
  BlurFade,
  Button,
  OrderSummary,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";
import DotPattern from "@/components/ui/dot-pattern";
import { ny } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const orders = [
  {
    quantity: "1",
    name: "Popcorn Chicken",
    groups: [["https://i.pravatar.cc/100", "https://i.pravatar.cc/100"]],
    totalAmount: "9.99",
  },
  {
    quantity: "2",
    name: "Sugar Boba Milk Tea",
    groups: [["https://i.pravatar.cc/100"], ["https://i.pravatar.cc/100"]],
    totalAmount: "10.98",
  },
  {
    quantity: "4",
    name: "Mango Milk Tea",
    groups: [
      ["https://i.pravatar.cc/100"],
      ["https://i.pravatar.cc/100"],
      ["https://i.pravatar.cc/100"],
      ["https://i.pravatar.cc/100"],
    ],
    totalAmount: "23.80",
  },
  {
    quantity: "3",
    name: "Crispy Tofu",
    groups: [
      ["https://i.pravatar.cc/100", "https://i.pravatar.cc/100"],
      [
        "https://i.pravatar.cc/100",
        "https://i.pravatar.cc/100",
        "https://i.pravatar.cc/100",
      ],
      ["https://i.pravatar.cc/100"],
    ],
    totalAmount: "29.97",
  },
  {
    quantity: "1",
    name: "Jasmine Milk Tea",
    groups: [["https://i.pravatar.cc/100"]],
    totalAmount: "5.25",
  },
  {
    quantity: "1",
    name: "Matcha Oolong Mik Tea",
    groups: [["https://i.pravatar.cc/100"]],
    totalAmount: "5.95",
  },
];

export default function Home() {
  return (
    <>
      <DotPattern
        className={ny(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        )}
      />
      <main className="min-h-screen mx-auto flex-1 overflow-hidden">
        <section
          id="hero"
          className="relative mx-auto mt-32 max-w-5xl p-6 rounded-md text-center md:px-8 space-y-6"
        >
          <BlurFade delay={0.25} inView>
            <h2 className="text-5xl bg-clip-text font-bold tracking-tight md:text-6xl xl:text-7xl">
              We&apos;re here to make splitting easy
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="text-pretty bg-clip-text font-semibold text-lg tracking-tight sm:text-xl xl:text-2xl">
              <span className="text-primary">Spill💸</span> got you covered
            </p>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <div className="relative mx-auto space-x-4">
              <Button size={"lg"} className="shadow-md">
                Get started <ArrowRight />
              </Button>
            </div>
          </BlurFade>
        </section>
        <section
          id="showcase"
          className="relative mx-auto mt-32 max-w-5xl p-6 rounded-md text-center md:px-8 space-y-6"
        >
          <BlurFade delay={0.25 * 3} inView>
            <h3 className="text-3xl py-4 bg-clip-text font-bold tracking-tight md:text-4xl xl:text-5xl">
              Manage your orders
            </h3>
            <p className="text-pretty bg-clip-text font-semibold text-sm text-muted-foreground tracking-tight sm:text-md xl:text-lg">
              Specify order items and who ordered it
            </p>
            <Table>
              <TableCaption>A list of your orders.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Quantity</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Groups</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-left">
                      {order.quantity}
                    </TableCell>
                    <TableCell className="text-left">{order.name}</TableCell>
                    <TableCell className="text-left space-x-2 flex flex-row">
                      {order.groups.map((group, idx) => (
                        <AvatarCircles
                          key={idx}
                          avatarUrls={group}
                          numPeople={group.length}
                        />
                      ))}
                    </TableCell>
                    <TableCell className="text-right">
                      {order.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">
                    $
                    {orders.reduce((n, { totalAmount }) => n + +totalAmount, 0)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </BlurFade>
          <OrderSummary />
        </section>
      </main>
    </>
  );
}
