"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function AuthenticatedMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-9 h-9">
          <AvatarFallback className="w-9 h-9 bg-green-800 text-white cursor-pointer">
            CN
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Raju Rayhan</DropdownMenuLabel>
        <DropdownMenuLabel className="font-light py-0">
          raju@gmail.com
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Content Mangement</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/admin">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/admin/gallery">Gallery</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/admin/contacts">Contacts</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-rose-600">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AuthenticatedMenu;
