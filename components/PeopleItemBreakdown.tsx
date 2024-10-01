"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ChartContainer,
  ChartConfig,
  Separator,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Pagination,
  PaginationContent,
  PaginationItem,
  ChartTooltip,
  ChartTooltipContent,
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components";
import {
  Copy,
  Truck,
  MoreVertical,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

const chartData = [
  { username: "chrisbryann", visitors: 275, fill: "var(--color-chrisbryann)" },
  { username: "jthamrun", visitors: 200, fill: "var(--color-jthamrun)" },
  { username: "steve88", visitors: 187, fill: "var(--color-steve88)" },
  { username: "nhartanto", visitors: 173, fill: "var(--color-nhartanto)" },
  { username: "other", visitors: 90, fill: "var(--color-other)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrisbryann: {
    label: "chrisbryann",
    color: "hsl(var(--chart-1))",
  },
  jthamrun: {
    label: "jthamrun",
    color: "hsl(var(--chart-5))",
  },
  steve88: {
    label: "steve88",
    color: "hsl(var(--chart-2))",
  },
  nhartanto: {
    label: "nhartanto",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

const PeopleItemBreakdown = () => {
  return (
    <Card className="w-full fixed bottom-0 left-0 z-10 sm:static sm:overflow-hidden sm:z-0 sm:flex sm:flex-col sm:gap-2">
      <CardHeader>
        <CardTitle className="hidden sm:block">Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-subgrid py-2 gap-2 hidden sm:block sm:grow">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-64 max-h-80"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="username"
                className="fill-foreground"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="grid gap-3 text-sm overflow-y-auto max-h-fit ">
          <div className="font-semibold">Order Details</div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Glimmer Lamps x <span>2</span>
              </span>
              <span>$250.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Aqua Filters x <span>1</span>
              </span>
              <span>$49.00</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$299.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>$5.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>$25.00</span>
            </li>
            {/* <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>$329.00</span>
            </li> */}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="grid gap-1 sm:grid-cols-2">
        <CardDescription>Total</CardDescription>
        <CardTitle>
          <div className="grid grid-cols-2 sm:grid-cols-1 items-center gap-1 sm:gap-2 sm:text-right">
            <span className="break-all">$1233</span>
            <Dialog className="sm:hidden">
              <DialogTrigger asChild>
                <Button size="sm" className="font-semibold sm:hidden">
                  Breakdown
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-80">
              <div className="grid gap-3 text-sm overflow-y-auto max-h-80">
                      <div className="font-semibold">Expense Breakdown</div>
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Glimmer Lamps x <span>2</span>
                          </span>
                          <span>$250.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Aqua Filters x <span>1</span>
                          </span>
                          <span>$49.00</span>
                        </li>
                      </ul>
                      <Separator className="my-2" />
                      <ul className="grid gap-3">
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Subtotal
                          </span>
                          <span>$299.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            Shipping
                          </span>
                          <span>$5.00</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>$25.00</span>
                        </li>
                        <li className="flex items-center justify-between font-semibold">
                          <span className="text-muted-foreground">Total</span>
                          <span>$329.00</span>
                        </li>
                      </ul>
                    </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardTitle>
      </CardFooter>
    </Card>
  );
};

export { PeopleItemBreakdown };
