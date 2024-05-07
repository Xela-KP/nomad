import type { Project } from 'types/projects/project';

export const ProjectsLoader = ({ projects }: { projects: Project[] }) => (
  <>
    {projects.map((project) => (
      <Project key={project.name} {...project} />
    ))}
  </>
);

const Project = ({ name, description, link }: Project) => (
  <div className="bg-wood">
    <a href={link} target="blank">
      <h3>{name}</h3>
    </a>
    <p>{description}</p>
  </div>
);
export default Project;
