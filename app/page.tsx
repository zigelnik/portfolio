import { getProjects } from "@/lib/github";
import { getOpenSourceEntries } from "@/lib/opensource";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProjectGrid } from "@/components/sections/Projects/ProjectGrid";
import { OpenSource } from "@/components/sections/OpenSource";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { WaveDivider } from "@/components/ocean/WaveDivider";

export default async function Home() {
  const [projects, openSourceEntries] = await Promise.all([
    getProjects(),
    getOpenSourceEntries(),
  ]);

  return (
    <>
      <Hero />
      <WaveDivider />
      <About />
      <ProjectGrid projects={projects} />
      <OpenSource entries={openSourceEntries} />
      <WaveDivider />
      <Experience />
      <Contact />
    </>
  );
}
