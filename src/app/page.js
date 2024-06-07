import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievmentsSection from "./components/AchievmentsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 my-20"> 
         <HeroSection />
         <AchievmentsSection />
         <AboutSection />
         <ProjectSection />
         <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
