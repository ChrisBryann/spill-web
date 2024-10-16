"use client";
import Image from "next/image";
import Link from "next/link";
import {
  PlusCircle,
  MoreHorizontal,
  UserRoundPen,
  Trash2,
  UserPlus,
  ReceiptText,
  ShoppingBasket,
  ChevronsUpDown,
} from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  Label,
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectSearch,
  MultiSelectTrigger,
  MultiSelectValue,
  PeopleItemBreakdown,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  AddExpenseItemDialog,
  EditExpenseItemDialog,
  ExpenseItemRow,
} from "@/components";

export default function EditExpense() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="gap-1">
              <UserPlus className="size-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Collaborators
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[375px] sm:w-full">
            <DialogHeader>Add Collaborators</DialogHeader>
            <DialogDescription>
              Invite users who participated in the expense.
            </DialogDescription>
            <MultiSelect>
              <MultiSelectTrigger>
                <MultiSelectValue placeholder="Select collaborators" />
              </MultiSelectTrigger>
              <MultiSelectContent>
                <MultiSelectSearch placeholder="Enter username or name" />
                <MultiSelectList>
                  <MultiSelectGroup heading="Friends">
                    <MultiSelectItem value="chrisbryann">
                      Christopher Bryan (@chrisbryann)
                    </MultiSelectItem>
                    <MultiSelectItem value="jthamrun">
                      Jonathan Thamrun (@jthamrun)
                    </MultiSelectItem>
                    <MultiSelectItem value="steve88">
                      Steven Keane (@steve88)
                    </MultiSelectItem>
                    <MultiSelectItem value="nhartanto">
                      Nathanael Hartanto (@nhartanto)
                    </MultiSelectItem>
                  </MultiSelectGroup>
                </MultiSelectList>
                <MultiSelectEmpty />
              </MultiSelectContent>
            </MultiSelect>
          </DialogContent>
        </Dialog>
        <div className="items-center gap-2 ml-auto flex">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Expense</Button>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card x-chunk="expense-info">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Details
                <ReceiptText />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 items-start">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" type="text" className="w-full" required />
                    <Label htmlFor="date">Date *</Label>
                    <Input id="date" type="date" className="w-full" required />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="tip_amount">Tip Amount ($)</Label>
                    <Input
                      id="tip_amount"
                      type="number"
                      className="w-full"
                      step="0.01"
                    />
                    <Label htmlFor="tax_amount">Tax Amount ($)</Label>
                    <Input
                      id="tax_amount"
                      type="number"
                      className="w-full"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-2xl gap-2">Items</h3>
                <p className="text-sm sm:text-md text-muted-foreground">
                  Specify the items ordered and allocate each item to a person
                  or group
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="default" className="gap-1">
                    <PlusCircle className="size-3.5" />
                    Add Item
                  </Button>
                </DialogTrigger>
                <AddExpenseItemDialog />
              </Dialog>
            </div>

            <Table containerClassname="max-h-96">
              <TableHeader className="bg-card w-full">
                <TableRow>
                  <TableHead className="w-[25px]">Qty</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Price (per item)
                  </TableHead>
                  <TableHead className="w-[25px]">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                  <TableHead className="w-[25px]">
                    <span className="sr-only">Details</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="overflow-auto">
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
                <ExpenseItemRow />
              </TableBody>
              <TableFooter className="bg-card w-full">
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell> </TableCell>
                  <TableCell className="hidden sm:table-cell"></TableCell>
                  <TableCell> </TableCell>
                  <TableCell> $123234.22</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
        <PeopleItemBreakdown />
      </div>
      <div className="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">Save Expense</Button>
      </div>
    </main>
  );
}
