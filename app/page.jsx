import ProfileHeader from "@/components/profile-header";
import MainCTA from "@/components/main-cta";
import PrimaryLinks from "@/components/primary-links";
import SecondaryLinks from "@/components/secondary-links";
import FeaturedProjects from "@/components/featured-projects";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-8 sm:py-12 md:max-w-lg md:py-16">
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
          <ProfileHeader />
          {/* <MainCTA /> */}
          <PrimaryLinks />
          <FeaturedProjects />
          <AboutSection />
          <SecondaryLinks />
          <Footer />
        </div>
      </div>
    </main>
  );
}
