import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components";
import { Plus } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="flex flex-col gap-6 sm:gap-10">
      <div className="flex justify-between items-center gap-2">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Button>Save</Button>
      </div>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <h2 className="font-semibold">Contact Infomation</h2>
          <p className="text-muted-foreground">
            Please enter your name and contact information.
          </p>
        </div>
        <div className="grid gap-2">
          <div>
            <Label htmlFor="first_name">First Name *</Label>
            <Input id="first_name" type="text" className="w-full" required />
          </div>
          <div>
            <Label htmlFor="last_name">Last Name *</Label>
            <Input id="last_name" type="text" className="w-full" required />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="text"
              className="w-full"
              required
              disabled
            />
          </div>
          <div>
            <Label htmlFor="contact_number">Contact Number *</Label>
            <Input
              id="contact_number"
              type="text"
              className="w-full"
              required
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <h2 className="font-semibold">Payment Methods</h2>
          <p className="text-muted-foreground">
            Please enter your payment methods for people to transfer money into.
          </p>
        </div>
        <div className="grid gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="flex flex-row" value="add">
                Add a payment method
              </SelectItem>
              <SelectItem value="zelle">Zelle</SelectItem>
              <SelectItem value="venmo">Venmo</SelectItem>
            </SelectContent>
          </Select>
          <div className="grid gap-2">
          <div>
            <Label htmlFor="account_name">Account Name *</Label>
            <Input id="account_name" type="text" className="w-full" required />
          </div>
          <div>
            <Label htmlFor="account_type">Account Type</Label>
            <Input
              id="account_type"
              type="text"
              className="w-full"
              required
            />
          </div>
          <div>
            <Label htmlFor="account_description">Account Description</Label>
            <Input
              id="account_description"
              type="text"
              className="w-full"
              required
            />
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
