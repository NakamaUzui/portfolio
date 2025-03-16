import ProjectsHero from '../sections/ProjectsHero';
import ProjectFilters from '../sections/ProjectFilters';
import ProjectStats from '../sections/ProjectStats';
import ProjectsSection from '../sections/Projects';
import ProjectGallery3D from '../components/ProjectGallery3D';
import Clients from '../sections/Clients';
import { myProjects } from '../constants/index.js';  // Add this import

const Projects = () => {
  const handleFilterChange = (filter) => {
    // Hier könnte die Filter-Logik implementiert werden
    console.log('Selected filter:', filter);
  };

  return (
    <>
      <ProjectsHero />
      <ProjectFilters onFilterChange={handleFilterChange} />
      <ProjectGallery3D projects={myProjects} />
      <ProjectsSection />
      <ProjectStats />
      <Clients />
    </>
  );
};

export default Projects;
