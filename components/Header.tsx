"use client";

import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "TỔNG KHO ĐIỀU HÒA", href: "#", current: true },
  { name: "ĐIỀU HÒA ÂM TRẦN", href: "#", current: false },
  { name: "TỔNG KHO MÁY GIẶT", href: "#", current: false },
  { name: "TỔNG KHO TIVI - GIÁ RẺ NHẤT HÀ NỘI", href: "#", current: false },
  { name: "TỔNG KHO TỦ LẠNH", href: "#", current: false },
  { name: "TỦ ĐÔNG - TỦ MÁT", href: "#", current: false },
  { name: "NỘI THẤT NHÀ BẾP", href: "#", current: false },
  { name: "DÀN ÂM THANH", href: "#", current: false },
];

const Header = () => {
  return (
    <main>
      <img
        src="https://muahangtaikho.vn/static/assets/default/images/banner-top.png"
        alt=""
      />
      <Disclosure as="nav" className="bg-blue-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-full items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="bg-orange-400 hidden sm:flex items-center justify-center font-medium px-4">
                <p className="text-white text-base whitespace-nowrap mr-2">
                  Danh mục sản phẩm
                </p>
                <IoIosArrowDroprightCircle className="text-white text-2xl" />
              </div>
              <div className="hidden sm:ml-2 sm:block text-center">
                <div className="flex">
                  {navigation.map((item: any) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className="rounded-md px-3 py-2 text-[11px] text-white hover:bg-gray-700 hover:text-white font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item: any) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className="block rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-[12px]"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </main>
  );
};

export default Header;
