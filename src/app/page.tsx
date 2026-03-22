import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import X1Showcase from "@/components/X1Showcase";
import About from "@/components/About";
import GitHubProjects from "@/components/GitHubProjects";
import XenSearch from "@/components/XenSearch";
import Links from "@/components/Links";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <X1Showcase />
        <About />
        <GitHubProjects />
        <Links />
        <XenSearch />
      </main>
      <Footer />
    </>
  );
}
