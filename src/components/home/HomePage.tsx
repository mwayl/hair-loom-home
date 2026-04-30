import {
  HeroSectionNew,
  PhotoSpeakSection,
  HowItWorksSection,
  EvolutionBannerSection,
  HairLoomExperience,
  AlbumOptions,
  ClientTestimonial,
  GiveTheGift,

} from "./subcomponent";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSectionNew />
      <PhotoSpeakSection />
      <HowItWorksSection />
      <EvolutionBannerSection />
      <HairLoomExperience />
      <AlbumOptions />
      <ClientTestimonial />
      <GiveTheGift />
      
    </div>
  );
}