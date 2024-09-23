import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col border-t">
        <div className="w-full draggable">
          <div className="container flex flex-col mx-auto">
            <div className="flex flex-col items-center w-full my-5">
              <span className="mb-8">
                <Image
                  className="h-16 w-auto"
                  src="/logo.png"
                  width={100}
                  height={20}
                  alt="Logo"
                />
              </span>
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex items-center gap-8">
                  <Link href="/" className="text-grey-700 hover:text-grey-900">
                    <Facebook />
                  </Link>
                  <Link href="/" className="text-grey-700 hover:text-grey-900">
                    <Twitter />
                  </Link>
                  <Link href="/" className="text-grey-700 hover:text-grey-900">
                    <Youtube />
                  </Link>
                  <Link href="/" className="text-grey-700 hover:text-grey-900">
                    <Linkedin />
                  </Link>
                  <Link href="/" className="text-grey-700 hover:text-grey-900">
                    <Instagram />
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-light leading-7 text-center text-grey-700">
                  2024 Travel World. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
