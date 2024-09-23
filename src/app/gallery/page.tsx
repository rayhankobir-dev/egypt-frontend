"use client";
import Gallery from "@/components/gallery";
import { cities } from "@/data";

function GalleryPage() {
  return (
    <section className="flex flex-col gap-7">
      <div className="max-w-5xl flex flex-col gap-2">
        <h1 className="font-bold text-3xl">Explore Places Gallery</h1>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
          aspernatur cupiditate ratione vitae dolorem praesentium iure optio
          possimus consequuntur adipisci repellendus itaque excepturi nemo sed
          earum. At neque veniam ducimus!
        </p>
      </div>
      <Gallery cities={cities} />
    </section>
  );
}

export default GalleryPage;
