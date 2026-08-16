"use client";

import { usePathname } from "next/navigation";
import navigation from "../../data/menu";
import Link from "next/link";

const MenuList = () => {
  const path = usePathname();
  return (
    <div>
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={
              path === "/" + item.name.toLowerCase()
                ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
