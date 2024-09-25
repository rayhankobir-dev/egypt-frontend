import { City } from "@/types";
import axiosInstance from "@/api";
import { Suspense, lazy } from "react";
const Spinner = lazy(() => import("@/components/spinner"));
const CityCard = lazy(() => import("@/components/city-card"));

async function CitiesPage() {
  const { data } = await axiosInstance.get("/cities");
  const cities: City[] = data.data.cities;

  return (
    <Suspense
      fallback={<Spinner size={28} className="h-full w-full justify-center" />}
    >
      <section className="flex flex-col gap-7">
        <div className="max-w-5xl flex flex-col gap-2">
          <h1 className="font-bold text-3xl">All Cities of Egypt</h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            aspernatur cupiditate ratione vitae dolorem praesentium iure optio
            possimus consequuntur adipisci repellendus itaque excepturi nemo sed
            earum. At neque veniam ducimus!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-7">
          {cities.map((city) => (
            <CityCard key={city._id} city={city} />
          ))}
        </div>
      </section>
    </Suspense>
  );
}

export default CitiesPage;
