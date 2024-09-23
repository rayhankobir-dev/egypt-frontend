import CtaSection from "@/components/cta-section";
import HeroSlider from "@/components/hero-slider";
import PlanTripSection from "@/components/plan-section";
import CityCardSlider from "@/components/city-card-slider";
import { cities } from "@/data";
import ContentSection from "@/components/content-section";

export default async function Home() {
  // const res = await fetch("https://egypt-backend-txj3.onrender.com/api/home");
  // console.log(await res.json());
  return (
    <>
      <HeroSlider slides={[]} />
      <ContentSection
        title="History of Egypt"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
          perspiciatis quasi nam unde quia dolorum natus quos saepe nesciunt
          recusandae exercitationem officiis sint culpa maxime voluptatibus,
          ducimus debitis eos quidem?"
      />
      <CityCardSlider title="Top Cities" subTitle="" cities={cities} />
      <CtaSection />
      <PlanTripSection />
    </>
  );
}
