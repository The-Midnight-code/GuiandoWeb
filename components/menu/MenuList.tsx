"use client";

import { usePathname } from "next/navigation";
import navigation from "../../data/menu";
import Link from "next/link";

const MenuList = () => {
  const path = usePathname();
  return (
    <div>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
