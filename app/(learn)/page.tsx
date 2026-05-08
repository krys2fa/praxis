import HeroSection from "@/components/learn/hero-section";
import FeaturesSection from "@/components/learn/features-section";
import CoursesPreview from "@/components/learn/courses-preview";
import PricingSection from "@/components/learn/pricing-section";
import TestimonialsSection from "@/components/learn/testimonials-section";
import CtaSection from "@/components/learn/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CoursesPreview />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
