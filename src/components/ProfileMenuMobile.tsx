/* eslint-disable react/prop-types */
import { User, UserNavigationItem } from "@/types";
import { DisclosureButton } from "@headlessui/react";

export default function ProfileMenuMobile({
  user,
  userNavigation,
}: {
  user: User;
  userNavigation: UserNavigationItem[];
}) {
  return (
    <div className="border-t border-gray-700 pb-3 pt-4">
      <div className="flex items-center px-5">
        <div className="shrink-0">
          <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
        </div>
        <div className="ml-3">
          <div className="text-base/5 font-medium text-white">{user.name}</div>
          <div className="text-sm font-medium text-gray-400">{user.email}</div>
        </div>
      </div>
      <div className="mt-3 space-y-1 px-2">
        {userNavigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </div>
  );
}
