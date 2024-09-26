import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
  Table,
  TableBody,
  TableCell,
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
                          <MultiSelectItem value="chrisbryann">Christopher Bryan (@chrisbryann)</MultiSelectItem>
                          <MultiSelectItem value="next">
                            Jonathan Thamrun (@jthamrun)
                          </MultiSelectItem>
                          <MultiSelectItem value="remix">Steven Keane (@steve88)</MultiSelectItem>
                        </MultiSelectGroup>
                      </MultiSelectList>
                      <MultiSelectEmpty />
                    </MultiSelectContent>
                  </MultiSelect>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
              <CardTitle>Expense Items</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">SKU</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">GGPC-001</TableCell>
                    <TableCell>
                      <Label htmlFor="stock-1" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-1" type="number" defaultValue="100" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-1" className="sr-only">
                        Price
                      </Label>
                      <Input id="price-1" type="number" defaultValue="99.99" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">GGPC-002</TableCell>
                    <TableCell>
                      <Label htmlFor="stock-2" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-2" type="number" defaultValue="143" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-2" className="sr-only">
                        Price
                      </Label>
                      <Input id="price-2" type="number" defaultValue="99.99" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">GGPC-003</TableCell>
                    <TableCell>
                      <Label htmlFor="stock-3" className="sr-only">
                        Stock
                      </Label>
                      <Input id="stock-3" type="number" defaultValue="32" />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-3" className="sr-only">
                        Stock
                      </Label>
                      <Input id="price-3" type="number" defaultValue="99.99" />
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
