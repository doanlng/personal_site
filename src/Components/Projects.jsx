import fourth from '../assets/project_images/4.jpg'
import github from '../assets/project_images/github.png'
const ProjectCarousel = () => {
    return (
        <div className="justify-center text-white  py-10">
            <div className="flex justify-center text-5xl pb-10"><h1>Projects</h1></div>
            <ul className="flex justify-center sm:flex sm:flex-col sm:items-center sm:justify-center sm:text-center sm:p-4">
              <li><ProjectCard /></li>
              <li><ProjectCard /></li>
              <li><ProjectCard /></li>
              <li><ProjectCard /></li>

            </ul>
        </div>
    )
}
const ProjectCard = () => {
  return (
    <div className="project-card ">
      <img src={fourth}  className="h-full w-full object-cover"/>
      <h1 className="text-white text-2xl font-bold py-3">Project Name</h1>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <p className="text-white text-center px-10 py-10">This is the project description that is a bit longer as to test the boundaries of the card</p>
        <div className="flex items-center justify-center absolute bottom-12 left-0 w-full p-4">
          <a href="https://github.com/doanlng/ml_movie_recommendation" target="_blank" rel="noopener noreferrer"><img src={github}  className="relative h-12 w-12 "/></a>
        </div>
      </div>
    </div>
  )
}
export default ProjectCarousel