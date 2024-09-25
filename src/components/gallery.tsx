"use client";
import Image from "next/image";
import { API_URL } from "@/api";
import { GalleryImage } from "@/types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {images?.map(({ imageUrl }, index) => (
          <Image
            className="p-1 rounded-xl"
            key={index}
            src={API_URL + imageUrl}
            height={1024}
            width={1024}
            alt="City"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
