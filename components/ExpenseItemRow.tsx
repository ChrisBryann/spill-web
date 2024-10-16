import {MoreHorizontal, UserRoundPen,Trash2, ChevronsUpDown} from 'lucide-react'
import { Button, Collapsible, Dialog, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, TableCell, TableRow, EditExpenseItemDialog, CollapsibleTrigger, CollapsibleContent } from "@/components";

export function ExpenseItemRow() {
  return (
    <Collapsible asChild>
      <>
        <TableRow>
          <TableCell className="font-semibold">1</TableCell>
          <TableCell>Rice</TableCell>
          <TableCell className="hidden sm:table-cell">1.99</TableCell>
          <TableCell className="text-center w-[25px] sm:text-left">
            <Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="sm" variant="ghost">
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
          <TableCell>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="size-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </TableCell>
        </TableRow>
        <CollapsibleContent asChild>
          <TableRow>
            <TableCell className="font-semibold">1</TableCell>
            <TableCell>Rice</TableCell>
            <TableCell className="hidden sm:table-cell">1.99</TableCell>
          </TableRow>
        </CollapsibleContent>
      </>
    </Collapsible>
  );
}
