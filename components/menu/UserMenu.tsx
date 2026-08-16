"use client";
import { SignOutButton, useClerk, useUser } from "@clerk/nextjs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const UserMenu = () => {
  const { isLoaded, user } = useUser();
  const clerk = useClerk();

  if (!isLoaded) {
    return (
      <div className="flex animate-pulse space-x-4">
        <div className="size-8 rounded-full bg-gray-200"></div>
      </div>
    );
  }
  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img alt="" src={user?.imageUrl} className="size-10 rounded-full" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <MenuItem key={1}>
          <a
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
            onClick={() => clerk.openUserProfile()}
          >
            Your Profile
          </a>
        </MenuItem>
        <SignOutButton>
          <MenuItem key={2}>
            <a className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden">
              Sign out
            </a>
          </MenuItem>
        </SignOutButton>
      </MenuItems>
    </Menu>
  );
};

export default UserMenu;
