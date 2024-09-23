import CityCard from "@/components/city-card";
import { cities } from "@/data";

function CitiesPage() {
  return (
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
  );
}

export default CitiesPage;
