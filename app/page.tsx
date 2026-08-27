import { getProjects } from "@/lib/github";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProjectGrid } from "@/components/sections/Projects/ProjectGrid";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <About />
      <ProjectGrid projects={projects} />
      <Experience />
      <Contact />
    </>
  );
}
