import Image from "next/image";
import Link from "next/link";
import {
  PlusCircle,
  MoreHorizontal,
  UserRoundPen,
  Trash2,
  UserPlus,
} from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
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
} from "@/components";
import EditExpenseItemDialog from "@/components/EditExpenseItemDialog";
import AddExpenseItemDialog from "@/components/AddExpenseItemDialog";

export default function CreateExpense() {
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
              <CardTitle>Expense Details</CardTitle>
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
                    <Label htmlFor="tax_amount">Tax Amount (%)</Label>
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
          <Card x-chunk="expense-items">
            <CardHeader>
              <CardTitle>Expense Items</CardTitle>
            </CardHeader>
            <CardContent>
              <Table containerClassname="max-h-96">
                <TableHeader className="bg-card w-full">
                  <TableRow>
                    <TableHead className="w-[25px]">Qty</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Price (per item)
                    </TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-y-auto">
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell className="hidden sm:table-cell">1.99</TableCell>
                    <TableCell className="text-center sm:text-left">
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <DialogTrigger className="w-full flex gap-1">
                                <UserRoundPen className="size-4" />
                                Edit Item
                              </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive gap-1">
                              <Trash2 className="size-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <EditExpenseItemDialog />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell className="hidden sm:table-cell">1.99</TableCell>
                    <TableCell className="text-center sm:text-left">
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <DialogTrigger className="w-full flex gap-1">
                                <UserRoundPen className="size-4" />
                                Edit Item
                              </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive gap-1">
                              <Trash2 className="size-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <EditExpenseItemDialog />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell className="hidden sm:table-cell">1.99</TableCell>
                    <TableCell className="text-center sm:text-left">
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <DialogTrigger className="w-full flex gap-1">
                                <UserRoundPen className="size-4" />
                                Edit Item
                              </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive gap-1">
                              <Trash2 className="size-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <EditExpenseItemDialog />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell className="hidden sm:table-cell">1.99</TableCell>
                    <TableCell className="text-center sm:text-left">
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <DialogTrigger className="w-full flex gap-1">
                                <UserRoundPen className="size-4" />
                                Edit Item
                              </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive gap-1">
                              <Trash2 className="size-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <EditExpenseItemDialog />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell className="hidden sm:table-cell">1.99</TableCell>
                    <TableCell className="text-center sm:text-left">
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <DialogTrigger className="w-full flex gap-1">
                                <UserRoundPen className="size-4" />
                                Edit Item
                              </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive gap-1">
                              <Trash2 className="size-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <EditExpenseItemDialog />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell className="hidden sm:table-cell">1.99</TableCell>
                    <TableCell className="text-center sm:text-left">
                      <Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="size-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <DialogTrigger className="w-full flex gap-1">
                                <UserRoundPen className="size-4" />
                                Edit Item
                              </DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive gap-1">
                              <Trash2 className="size-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        <EditExpenseItemDialog />
                      </Dialog>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter className="bg-card">
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell> </TableCell>
                    <TableCell>$123234.22</TableCell>
                    <TableCell> </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="default" className="gap-1">
                    <PlusCircle className="size-3.5" />
                    Add Item
                  </Button>
                </DialogTrigger>
                <AddExpenseItemDialog />
              </Dialog>
            </CardFooter>
          </Card>
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
