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
import { useAuth } from "@/context/authContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function AuthenticatedMenu() {
  const { isAuth, user, logout } = useAuth();

  if (!isAuth) return null;

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
        <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>
        <DropdownMenuLabel className="font-light py-0">
          {user?.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Content Mangement</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/admin">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/admin/cities">Cities</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/admin/gallery">Gallery</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/admin/contacts">Contacts</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()} className="text-rose-600">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AuthenticatedMenu;
