import Image from "next/image";
import Link from "next/link";
import { PlusCircle, MoreHorizontal, UserRoundPen, Trash2 } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
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
  OrderSummary,
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

export default function CreateExpense() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center gap-4">
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-2xl font-semibold tracking-tight sm:grow-0">
          BCD Tofu House
        </h1>
        <div className="items-center gap-2 ml-auto flex">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Expense</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle>Expense Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 items-start">
                <div className="grid grid-cols-2 gap-6 items-start">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" type="text" className="w-full" />
                    <Label htmlFor="date">Date *</Label>
                    <Input id="date" type="date" className="w-full" />
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
                <div className="grid gap-3">
                  <Label htmlFor="collaborators">Collaborators</Label>
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
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="expense-items">
            <CardHeader>
              <CardTitle>Expense Items</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Quantity</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price (per item)</TableHead>
                    <TableHead className="hidden">Edit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell>1.99</TableCell>
                    <TableCell>
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
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Item info</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-2">
                            <div className="grid gap-2">
                              <Label htmlFor="item_name_1">Name</Label>
                              <Input
                                id="item_name_1"
                                type="text"
                                defaultValue="Rice"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="grid gap-2">
                                <Label htmlFor="quantity_1">Quantity</Label>
                                <Input
                                  id="quantity_1"
                                  type="number"
                                  defaultValue="1"
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="price_1">Price (per item)</Label>
                                <Input
                                  id="price_1"
                                  type="number"
                                  step="0.01"
                                  defaultValue="1.99"
                                />
                              </div>
                            </div>
                          </div>
                          <Separator />
                          <DialogTitle>Groups</DialogTitle>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select item group" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="group_1">Group 1</SelectItem>
                              <SelectItem value="group_2">Group 2</SelectItem>
                              <SelectItem value="group_3">Group 3</SelectItem>
                              <SelectItem value="group_4">Group 4</SelectItem>
                            </SelectContent>
                          </Select>
                          <div className="flex justify-between items-end">
                            <div className="grid gap-2">
                              <DialogDescription className="text-secondary-foreground">
                                Split option
                              </DialogDescription>
                              <Select defaultValue="equal">
                                <SelectTrigger className="w-fit">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="equal">Equal</SelectItem>
                                  <SelectItem value="individual">
                                    Individual
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button className="gap-1">
                              <PlusCircle className="size-3.5" />
                              Add Person
                            </Button>
                          </div>
                          <DialogDescription className="text-secondary-foreground mx-auto">No person added!</DialogDescription>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>
                                  Person
                                </TableHead>
                                <TableHead className="w-[100px]">Amount</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>Christopher Bryan</TableCell>
                                <TableCell>0.99</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Jonathan Thamrun</TableCell>
                                <TableCell>0.99</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <DialogFooter className="mx-auto">
                          <DialogClose asChild>
                            <Button variant="secondary">
                              Close
                            </Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button>
                              Save Changes
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell>1.99</TableCell>
                    <TableCell>
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
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Item info</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-2">
                            <div className="grid gap-2">
                              <Label htmlFor="item_name_1">Name</Label>
                              <Input
                                id="item_name_1"
                                type="text"
                                defaultValue="Rice"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="grid gap-2">
                                <Label htmlFor="quantity_1">Quantity</Label>
                                <Input
                                  id="quantity_1"
                                  type="number"
                                  defaultValue="1"
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="price_1">Price (per item)</Label>
                                <Input
                                  id="price_1"
                                  type="number"
                                  step="0.01"
                                  defaultValue="1.99"
                                />
                              </div>
                            </div>
                          </div>
                          <Separator />
                          <DialogTitle>Groups</DialogTitle>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select item group" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="group_1">Group 1</SelectItem>
                              <SelectItem value="group_2">Group 2</SelectItem>
                              <SelectItem value="group_3">Group 3</SelectItem>
                              <SelectItem value="group_4">Group 4</SelectItem>
                            </SelectContent>
                          </Select>
                          <div className="flex justify-between items-end">
                            <div className="grid gap-2">
                              <DialogDescription className="text-secondary-foreground">
                                Split option
                              </DialogDescription>
                              <Select defaultValue="equal">
                                <SelectTrigger className="w-fit">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="equal">Equal</SelectItem>
                                  <SelectItem value="individual">
                                    Individual
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button className="gap-1">
                              <PlusCircle className="size-3.5" />
                              Add Person
                            </Button>
                          </div>
                          <DialogDescription className="text-secondary-foreground mx-auto">No person added!</DialogDescription>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>
                                  Person
                                </TableHead>
                                <TableHead className="w-[100px]">Amount</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>Christopher Bryan</TableCell>
                                <TableCell>0.99</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Jonathan Thamrun</TableCell>
                                <TableCell>0.99</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <DialogFooter className="mx-auto">
                          <DialogClose asChild>
                            <Button variant="secondary">
                              Close
                            </Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button>
                              Save Changes
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">1</TableCell>
                    <TableCell>Rice</TableCell>
                    <TableCell>1.99</TableCell>
                    <TableCell>
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
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Item info</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-2">
                            <div className="grid gap-2">
                              <Label htmlFor="item_name_1">Name</Label>
                              <Input
                                id="item_name_1"
                                type="text"
                                defaultValue="Rice"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="grid gap-2">
                                <Label htmlFor="quantity_1">Quantity</Label>
                                <Input
                                  id="quantity_1"
                                  type="number"
                                  defaultValue="1"
                                />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="price_1">Price (per item)</Label>
                                <Input
                                  id="price_1"
                                  type="number"
                                  step="0.01"
                                  defaultValue="1.99"
                                />
                              </div>
                            </div>
                          </div>
                          <Separator />
                          <DialogTitle>Groups</DialogTitle>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select item group" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="group_1">Group 1</SelectItem>
                              <SelectItem value="group_2">Group 2</SelectItem>
                              <SelectItem value="group_3">Group 3</SelectItem>
                              <SelectItem value="group_4">Group 4</SelectItem>
                            </SelectContent>
                          </Select>
                          <div className="flex justify-between items-end">
                            <div className="grid gap-2">
                              <DialogDescription className="text-secondary-foreground">
                                Split option
                              </DialogDescription>
                              <Select defaultValue="equal">
                                <SelectTrigger className="w-fit">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="equal">Equal</SelectItem>
                                  <SelectItem value="individual">
                                    Individual
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button className="gap-1">
                              <PlusCircle className="size-3.5" />
                              Add Person
                            </Button>
                          </div>
                          <DialogDescription className="text-secondary-foreground mx-auto">No person added!</DialogDescription>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>
                                  Person
                                </TableHead>
                                <TableHead className="w-[100px]">Amount</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell>Christopher Bryan</TableCell>
                                <TableCell>0.99</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Jonathan Thamrun</TableCell>
                                <TableCell>0.99</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <DialogFooter className="mx-auto">
                          <DialogClose asChild>
                            <Button variant="secondary">
                              Close
                            </Button>
                          </DialogClose>
                          <DialogClose asChild>
                            <Button>
                              Save Changes
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
              <Button size="sm" variant="default" className="gap-1">
                <PlusCircle className="size-3.5" />
                Add Item
              </Button>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>Product Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="grid gap-3">
                  <Label htmlFor="category">Category</Label>
                  {/* <Select>
                      <SelectTrigger id="category" aria-label="Select category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select> */}
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="subcategory">Subcategory (optional)</Label>
                  {/* <Select>
                      <SelectTrigger
                        id="subcategory"
                        aria-label="Select subcategory"
                      >
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="t-shirts">T-Shirts</SelectItem>
                        <SelectItem value="hoodies">Hoodies</SelectItem>
                        <SelectItem value="sweatshirts">Sweatshirts</SelectItem>
                      </SelectContent>
                    </Select> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <OrderSummary />
      </div>
      <div className="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm">Save Product</Button>
      </div>
    </main>
  );
}
