import { City } from "@/types";
import axiosInstance from "@/api";
import { Suspense, lazy } from "react";
const Spinner = lazy(() => import("@/components/spinner"));
const CtaSection = lazy(() => import("@/components/cta-section"));
const HeroSlider = lazy(() => import("@/components/hero-slider"));
const PlanTripSection = lazy(() => import("@/components/plan-section"));
const CityCardSlider = lazy(() => import("@/components/city-card-slider"));
const ContentSection = lazy(() => import("@/components/content-section"));

async function Home() {
  const { data } = await axiosInstance.get("/home");
  const res = await axiosInstance.get("/cities");
  const cities: City[] = res.data.data.cities;
  const home = data.data.home;

  return (
    <Suspense
      fallback={<Spinner size={28} className="h-full w-full justify-center" />}
    >
      <HeroSlider slides={home.slides} />
      <ContentSection title="History of Egypt" content={home.history} />
      <CityCardSlider title="Top Cities" subTitle="" cities={cities} />
      <CtaSection />
      <PlanTripSection />
    </Suspense>
  );
}
export default Home;
