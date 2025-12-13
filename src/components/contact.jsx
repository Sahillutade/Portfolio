import axios from "axios"
import React, { useState } from "react"


export function Contact()
{
    const [formData, setFormData] = useState({
        name: "",
        sender: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const response = await axios.post(
                "https://portfolio-9tu8.onrender.com/mail",
                formData,
                {
                    headers: {
                        "Content-Type":"application/json",
                    },
                }
            )

            console.log("Backend Response: ", response.data)
            alert("Message sent successfully")

            setFormData({ name: "", email: "", subject: "", message: "" })
        }
        catch(error){
            console.error("Error sending message: ", error)
            alert("Failed to send message. Try again.")
        }

    }

    return(
        <section id="contact" className="Contact">
            <div className="ContactSec">
                <h2 className="ContactHead">
                    <span className="ContactHeadTxt">Get In Touch</span>
                </h2>
                <p className="ContactSecPara">
                    Have a project in mind or just want to chat? Feel free to reach out. I'll get back to you as soon as possible.
                </p>

                <div className="ContactMain">
                    {/* Contact Info */}
                    <div className="ContactInfo">
                        <div className="ContactInfoCon">
                            <div className="bi bi-envelope"></div>
                            <div>
                                <h3 className="EnvelopeHead">Email</h3>
                                <a href="mailto:lutadesahil@gmail.com" className="EnvelopeTxt">
                                    lutadesahil@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="ContactInfoCon">
                            <div className="bi bi-telephone"></div>
                            <div>
                                <h3 className="EnvelopeHead">Phone</h3>
                                <a href="tel: +91 8237967628" className="EnvelopeTxt">
                                    +91 8237967628
                                </a>
                            </div>
                        </div>

                        <div className="ContactInfoCon">
                            <div className="bi bi-geo-alt"></div>
                            <div>
                                <h3 className="EnvelopeHead">Location</h3>
                                <p className="LocationPara">Hinganghat, Maharashtra, India</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="SocialHead">Connect With Me</h3>
                            <div className="SocialCont">
                                {    [
                                        { icon: "bi bi-github", href: "https://github.com/Sahillutade", label: "GitHub" },
                                        { icon: "bi bi-linkedin", href: "https://www.linkedin.com/in/sahillutade", label: "LinkedIn" },
                                        { icon: "bi bi-envelope", href: "mailto:someone@example.com", label: "Email" },
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className={`${social.icon} SocialContIcon`}
                                            aria-label={social.label}
                                        ></a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="Form">
                        <div>
                            <label htmlFor="name" className="NameField">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="NameFieldTxt" placeholder="Your Name"></input>
                        </div>
                        <div>
                            <label htmlFor="sender" className="NameField">Email</label>
                            <input type="email" id="sender" name="sender" value={formData.email} onChange={handleChange} required className="NameFieldTxt" placeholder="your@email.com"></input>
                        </div>
                        <div>
                            <label htmlFor="subject" className="NameField">Subject</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="NameFieldTxt" placeholder="Discussion"></input>
                        </div>
                        <div>
                            <label htmlFor="message" className="NameField">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="MessageFieldTxt" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="submit" className="ContactFormSubmit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}