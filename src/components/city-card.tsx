import Link from "next/link";
import { City } from "@/types";
import Image from "next/image";
import { Map } from "lucide-react";

export default function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="w-full h-full flex flex-col gap-2 hover:opacity-80 duration-300 overflow-hidden"
    >
      <Image
        className="w-full rounded-lg"
        src={city.thumbnail}
        width={300}
        height={300}
        alt={city.name}
      />
      <div>
        <h2 className="flex items-center gap-1.5 font-semibold text-xl">
          <Map size={16} /> {city.name}
        </h2>
        <p className="font-light text-sm">{city.location}</p>
      </div>
    </Link>
  );
}
