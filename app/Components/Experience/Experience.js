import React from "react";
import "./Experience.css";

const ExperienceItem = ({
  date,
  title,
  description,
  technologies,
  note,
  email,
  note2,
  githubLink,
}) => (
  <div className="experience-item">
    <div className="experience-date">{date}</div>
    <h2 className="experience-title">{title}</h2>
    <p className="experience-description">{description}</p>
    <div className="experience-tech">
      {technologies.map((tech) => (
        <span key={tech} className="experience-technology">
          {tech}
        </span>
      ))}
    </div>
    {note && (
      <p style={{ marginTop: "1.5em" }}>
        {note}
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    )}
    {note2 && (
      <p style={{ marginTop: "0.01em" }}>
        {note2}
        <a href={`${githubLink}`} target="_blank">
          angeldevildev
        </a>
      </p>
    )}
  </div>
);

const Experience = () => {
  const experiences = [
    {
      date: "Jan 2024 - Present",
      title: "Freelancer - Frontend Engineer",
      description: `I am currently available, for freelance work as a FrontEnd Developer
        for any type of project you can contact me on Linkedin or by email
        explaining the details of the freelance project, after that I will
        write to you telling you a quote for the project, if I am available to
        do it and most importantly how long it will take me to complete it.`,
      technologies: [
        "Javascript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "Redux",
        "HTML",
        "CSS",
        "Sass",
        "Tailwind",
        "Bootstrap",
        "Git",
        "GitHub",
        "Figma",
      ],
      note: "You can also work with me today, contact me from my email address which is: ",
      email: "angelobroggian4@gmail.com",
      note2: "Checkout my GitHub profile: ",
      githubLink: "https://github.com/angeldevildev",
    },
    {
      date: "Sep 2022 - Present",
      title: "Spotify - Frontend Engineer",
      description: `In my role as frontend engineer at Spotify, I had the opportunity to lead the development of innovative user interfaces using HTML, CSS, and React. With my experience with JavaScript and Redux, I was able to create reusable components that made the development process faster and more efficient. By integrating the Spotify API, I implemented advanced functionality and handled asynchronous calls smoothly. In addition, I used Express.js to ensure smooth communication with the backend.`,
      technologies: [
        "HTML",
        "CSS",
        "React",
        "JavaScript",
        "Redux",
        "API",
        "Express.js",
      ],
    },
    {
      date: "Apr 2015 - Giu 2023",
      title: "Microsoft - Frontend Developer",
      description: `In my role as a frontend developer at Microsoft, I had the opportunity to create truly cutting-edge user interfaces using React.js. With my experience in web development and programming, I was able to create engaging and high-performing user experiences. I also used Photoshop to enhance the visual appearance of web applications, incorporating graphical principles that gave an extra touch.`,
      technologies: [
        "Photoshop",
        "CSS",
        "HTML",
        "React",
        "Next.js",
        "Scss",
        "Tailwind",
        "Git",
      ],
    },
  ];

  return (
    <div className="experience-section ciao" id="work">
      <h2 className="experience-heading">Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          date={exp.date}
          title={exp.title}
          description={exp.description}
          technologies={exp.technologies}
          note={exp.note}
          note2={exp.note2}
          email={exp.email}
          githubLink={exp.githubLink}
        />
      ))}
    </div>
  );
};

export default Experience;
