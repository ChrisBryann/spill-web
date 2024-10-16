import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
} from "@/components";
import Image from "next/image";

export function FriendCard() {
  return (
    <Card className="bg-muted hover:cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="size-10">
            <AvatarImage
              src="https://avatar.iran.liara.run/public"
              alt="Christopher Bryan"
            />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">Christopher Bryan</span>
            <span className="text-sm text-muted-foreground">@chrisbryann</span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
