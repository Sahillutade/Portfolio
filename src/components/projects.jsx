import axios from "axios"
import { useEffect, useState } from "react"


export function Projects()
{

    const [hoveredProject, setHoveredProject] = useState(null)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            try{
                const res = await axios.get("http://localhost:4050/project");
                const data = res.data;

                const formatted = data.map((project) => ({
                    ...project,
                    languages: project.languages? project.languages.split(",").map((l) => l.trim()) : [],
                }))
                .sort(
                    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                )

                setProjects(formatted)
            }
            catch(error){
                console.error("Error fetching projects: ",error)
            }
        }

        fetchProjects();
    },[])

    return(
        <section id="projects" className="project">
            <div className="projectHead">
                <h2 className="projectHeadCont">
                    <span className="projectHeadContTxt">Featured Projects</span>
                </h2>

                <div className="projectLists">
                    {projects.map((project) => (
                        <div key={project.id} className="project-1" onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
                            {/* Image Container */}
                            <div className="projectImage">
                                <img src={project.image || "/placeholder.svg"} alt={project.title} className="projectImg" />
                                <div className="imageAfter"/>

                                {/* Hover Actions */}
                                {hoveredProject === project.id && (
                                    <div className="imgHover">
                                        <button onClick={() => window.open(project.live, "_blank")} disabled={!project.live} className="imgHoverBtn1">
                                            <div className="bi bi-box-arrow-up-right"></div>
                                        </button>
                                        <button onClick={() => window.open(project.code)} disabled={!project.code} className="imgHoverBtn2">
                                            <div className="bi bi-github"></div>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="projectCont">
                                <h3 className="projectContHead">
                                    {project.title}
                                </h3>
                                <p className="project-1Para"> {project.description} </p>

                                <div className="projectTechnologies">
                                    {project.languages.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="technologies"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}