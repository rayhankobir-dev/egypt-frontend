"use client";
import { City } from "@/types";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery({ cities }: { cities: City[] }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {cities.map((city) => (
          <Image
            className="p-1 rounded-xl"
            key={city._id}
            src={city.thumbnail}
            height={1024}
            width={1024}
            alt="City"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
