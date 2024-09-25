import { City } from "@/types";
import axiosInstance, { API_URL } from "@/api";
import { Suspense, lazy } from "react";
import Image from "next/image";
import { Map } from "lucide-react";
import ContentSection from "@/components/content-section";
const Spinner = lazy(() => import("@/components/spinner"));

async function CitySinglePage() {
  const { data } = await axiosInstance.get("/cities/naogaon");
  const city: City = data.data.city;
  console.log(city);

  return (
    <Suspense
      fallback={<Spinner size={28} className="h-full w-full justify-center" />}
    >
      <section className="flex flex-col gap-2.5">
        <div className="py-5">
          <h1 className="font-bold text-3xl">{city.name}</h1>
          <h2 className="flex items-center gap-1.5 font-normal text-lg">
            <Map /> {city.location}
          </h2>
        </div>

        <div className="w-full flex">
          <Image
            className="w-full aspect-[9/7] md:aspect-[16/9] lg:aspect-[16/7] object-center rounded-xl overflow-hidden"
            src={API_URL + city.thumbnail}
            height={1024}
            width={1024}
            alt={city.name}
          />
        </div>

        <ContentSection title="Description" content={city.description} />
      </section>
    </Suspense>
  );
}

export default CitySinglePage;
