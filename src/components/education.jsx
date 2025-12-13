

export function Education()
{
    
    const education = [
        {
            degree: "Bachelor of Computer Application",
            field: "Science",
            school: "Kamla Nehru Mahavidyalaya, Nagpur",
            year: "2022 - 2025",
            details: "Percentage: 65.5%"
        },
        {
            degree: "Full Stack UI Web with REACT",
            field: "MERN Full Stack Development",
            school: "Naresh IT",
            year: "Oct 2024 - Jan 2025",
            details: "Intensive bootcamp covering MERN stack and modern web technologies"
        },
        {
            degree: "Java Package",
            field: "Java Backend Development",
            school: "SevenMentor",
            year: "July 2025 - Dec 2025",
            details: "Enhancing backend skills through active learning in Java, Spring Boot, Hibernate, and API creation"
        }
    ]

    return(
        <section id="education" className="edSec">
            <div className="edSecCont">
                <h2 className="edHead">
                    <span className="edHeadTxt">Education</span>
                </h2>

                <div className="edCont">
                    {education.map((item, index) => (
                        <div key={index} className="edDet" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="edDetCont">
                                <div>
                                    <h3 className="edDethead">
                                        <div className="bi bi-mortarboard"></div>
                                        {item.degree}
                                    </h3>
                                    <p className="edDetPara">{item.field}</p>
                                </div>
                                <div className="edDetCal">
                                    <div className="bi bi-calendar"></div>
                                    {item.year}
                                </div>
                            </div>
                            <p className="edSch">{item.school}</p>
                            <p className="edDetail">{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}