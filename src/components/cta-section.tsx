import Link from "next/link";
import Image from "next/image";
import { GalleryHorizontalEnd } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-6 lg:px-4 xl:px-0">
      <div className="py-20">
        <a href="" className="flex justify-center ">
          <Image
            className="h-14 w-auto"
            src="/logo.png"
            width={100}
            height={20}
            alt="Logo"
          />
        </a>
        <div className="max-w-xl mx-auto py-8 text-center">
          <h3 className="text-4xl text-gray-900 font-bold mb-4">
            Having problem to make tour plan? We have{" "}
            <span className="text-blue-600">Experties</span>.
          </h3>
          <p className="text-gray-500">
            Joined over 400+ startups already growing with pagedone. whats
            holding you back?
          </p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link
            href="/gallery"
            className="flex items-center gap-2 py-3 px-6 border border-green-800 rounded-xl shadow-md transition-all duration-500 text-sm text-green-900 hover:bg-green-50"
          >
            <GalleryHorizontalEnd size={16} />
            View gallery
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 py-3 px-6 bg-green-800 rounded-xl shadow-md text-sm text-white hover:bg-green-700 transition-all duration-500"
          >
            Contact now
          </Link>
        </div>
      </div>
    </section>
  );
}
