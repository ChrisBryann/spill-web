import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  FriendCard,
} from "@/components";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  FormInputIcon,
  GlobeIcon,
  ListFilter,
  UserPlus,
} from "lucide-react";

// const friends = [
//     {
//        Icon: FileTextIcon,
//        name: 'Christopher Bryan',
//        description: 'We automatically save your files as you type.',
//        href: '/docs',
//        cta: 'Learn more',
//        background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     },
//     {
//        Icon: FormInputIcon,
//        name: 'Full text search',
//        description: 'Search through all your files in one place.',
//        href: '/docs',
//        cta: 'Learn more',
//        background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     },
//     {
//        Icon: GlobeIcon,
//        name: 'Multilingual',
//        description: 'Supports 100+ languages and counting.',
//        href: '/docs',
//        cta: 'Learn more',
//        background: <img className="absolute -right-20 -top-20 opacity-60" />,
//        className: '',
//     },
//     {
//        Icon: CalendarIcon,
//        name: 'Calendar',
//        description: 'Use the calendar to filter your files by date.',
//        href: '/docs',
//        cta: 'Learn more',
//        background: <img className="absolute -right-20 -top-20 opacity-60" />,
//        className: '',
//     },
//     {
//        Icon: BellIcon,
//        name: 'Notifications',
//        description:
//        'Get notified when someone shares a file or mentions you in a comment.',
//        href: '/docs',
//        cta: 'Learn more',
//        background: <img className="absolute -right-20 -top-20 opacity-60" />,
//        className: '',
//     },
//  ]

export default function Friends() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center">
        <Input id="friend_search" placeholder="Search friends" type="text" className="w-[200px]"/>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="size-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                All
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Accepted</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Pending</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="h-8 gap-1">
            <UserPlus className="size-3.5" />
            {/* add a dialog component to ask user for name of expense when add expense button is clicked */}
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Friend
            </span>
          </Button>
        </div>
      </div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Your Friends</CardTitle>
        </CardHeader>
        <CardContent className="sm:max-h-96 sm:overflow-hidden">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
            <FriendCard />
          </div>
        </CardContent>
        <CardFooter>
          <div className="ml-auto flex flex-row gap-4">
            <Button size="sm" variant="secondary">
              Prev
            </Button>
            <Button size="sm">Next</Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
