

export function Skills()
{
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["HTML5","CSS3","Bootstrap","Tailwind CSS","React.js","JavaScript","Typescript"]
        },
        {
            category: "Backend",
            skills: ["Node.js","Express.js","MongoDB","MySQL","Java (Core & Advance)","Hibernate","Spring","Spring Boot"]
        },
        {
            category: "Tools & Others",
            skills: ["VS code","Eclipse","Git","GitHub","Vercel","Problem Solving"]
        }
    ];

    return(
        <section id="skills" className="skillSec">
            <div className="skillSecCont">
                <h2 className="skillSecHead">
                    <span className="skillSecHeadTxt">Skills & Technologies</span>
                </h2>

                <div className="skillCont">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skillCat" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="skillCatTxt"> {category.category} </h3>
                            <div className="skillList">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="skillListCont"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Visual */}
                <div className="techStack">
                    <h3 className="techStackHead">Tech Stack Proficiency</h3>
                    <div className="techStackCont">
                        {[
                            { name: "React & JavaScript", level: 95 },
                            { name: "Backend Development", level: 85 },
                            { name: "Database Design", level: 80 },
                            { name: "Deployment", level: 75 }
                        ].map((tech, index) => (
                            <div key={index}>
                                <div className="techStackDet">
                                    <span className="techStackName"> {tech.name} </span>
                                    <span className="techStackLevel"> {tech.level}% </span>
                                </div>
                                <div className="techLevel">
                                    <div
                                        className="techLevelCont"
                                        style={{ 
                                            width: `${tech.level}%`,
                                            animation: `slideInLeft 0.8s ease-out ${index * 0.1}s both`,
                                         }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}