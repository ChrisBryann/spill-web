import {
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";
import { PlusCircle } from "lucide-react";

/*

EDIT EXPENSE ITEM DIALOG Component
Used when user wants to edit one of the expense item

*/
export function EditExpenseItemDialog() {
  return (
    <DialogContent className="w-[375px] sm:w-full">
      <DialogHeader>
        <DialogTitle>Item info</DialogTitle>
      </DialogHeader>
      <div className="grid gap-2">
        <div className="grid gap-2">
          <Label htmlFor="item_name_1">Name *</Label>
          <Input id="item_name_1" type="text" defaultValue="Rice" required />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="grid gap-2">
            <Label htmlFor="quantity_1">Quantity *</Label>
            <Input
              id="quantity_1"
              type="number"
              defaultValue="1"
              min={1}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price_1">Price (per item) *</Label>
            <Input
              className="text-ellipsis"
              id="price_1"
              type="number"
              step="0.01"
              defaultValue="1.99"
              required
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
              <SelectItem value="individual">Individual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="gap-1">
          <PlusCircle className="size-3.5" />
          Add Person
        </Button>
      </div>
      <DialogDescription className="text-secondary-foreground mx-auto">
        No person added!
      </DialogDescription>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Person</TableHead>
            <TableHead className="w-1/2">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Christopher Bryan</TableCell>
            <TableCell>
              <Input
                className="text-ellipsis"
                type="number"
                step="0.01"
                defaultValue="0.01"
                required
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jonathan Thamrun</TableCell>
            <TableCell>
              <Input
                className="text-ellipsis"
                type="number"
                step="0.01"
                defaultValue="0.01"
                required
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <DialogFooter className="mx-auto flex flex-row gap-2 md:gap-0">
        <DialogClose asChild>
          <Button variant="secondary">Close</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button>Save Changes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
