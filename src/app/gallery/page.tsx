import axiosInstance from "@/api";
import { Suspense, lazy } from "react";
const Gallery = lazy(() => import("@/components/gallery"));
const Spinner = lazy(() => import("@/components/spinner"));

async function GalleryPage() {
  const { data } = await axiosInstance.get("/gallery");
  const images = data.data.gallery;

  return (
    <Suspense
      fallback={<Spinner size={28} className="h-full w-full justify-center" />}
    >
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
        <Gallery images={images} />
      </section>
    </Suspense>
  );
}

export default GalleryPage;
