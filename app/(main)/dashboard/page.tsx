import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage, TableFooter } from "@/components";
import { Button } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Monthly Expense
            </CardTitle>
            <DollarSign className="text-primary size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-primary font-bold">$45,231.89</div>
            <p className="text-muted-foreground text-xs">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-muted-foreground text-xs">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-muted-foreground text-xs">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-muted-foreground text-xs">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card
          className="xl:col-span-2 max-h-2xl"
          x-chunk="dashboard-01-chunk-4"
        >
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Expenses</CardTitle>
              <CardDescription>Your recent expenses.</CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                View Expenses
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table containerClassname="max-h-96">
              <TableHeader className="bg-card">
                <TableRow>
                  <TableHead>Expense</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="overflow-y-auto">
                <TableRow>
                  <TableCell>
                    <div className="font-medium">BCD Tofu House</div>
                    <div className="text-muted-foreground hidden text-sm md:inline">
                      09/14/2024
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">House of Kabob</div>
                    <div className="text-muted-foreground hidden text-sm md:inline">
                      09/12/2024
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$151.93</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Sup Noodle Bar</div>
                    <div className="text-muted-foreground hidden text-sm md:inline">
                      09/12/2024
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$137.43</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Manaoo Thai</div>
                    <div className="text-muted-foreground hidden text-sm md:inline">
                      09/12/2024
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$212.32</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Manaoo Thai</div>
                    <div className="text-muted-foreground hidden text-sm md:inline">
                      09/12/2024
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$212.32</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Manaoo Thai</div>
                    <div className="text-muted-foreground hidden text-sm md:inline">
                      09/12/2024
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$212.32</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Manaoo Thai</div>
                    <div className="text-muted-foreground hidden text-sm md:inline">
                      09/12/2024
                    </div>
                  </TableCell>
                  <TableCell className="text-right">$212.32</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter className="bg-card">
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">$123234.22</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
        <Card x-chunk="friends-list">
          <CardHeader className="flex flex-row items-center">
            <CardTitle>Your Friends</CardTitle>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="#">
                View Friends
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="grid gap-8 max-h-96 overflow-y-auto">
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin~email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin~email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin~email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin~email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin~email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin~email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin~email.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden size-9 sm:flex">
                <AvatarImage src="https://avatar.iran.liara.run/public" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none">
                  Olivia Martin
                </p>
                <p className="text-muted-foreground text-sm">
                  olivia.martin~email.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
