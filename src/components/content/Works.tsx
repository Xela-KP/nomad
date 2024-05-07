import { projects } from 'types/projects/projectDirectory';
import { ProjectsLoader } from './projects/Projects';

const Works = () => (
  <section>
    <h1>Sample Projects</h1>
    <ProjectsLoader projects={projects} />
  </section>
);
export default Works;
