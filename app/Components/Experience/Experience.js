import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-section" id="work">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-item">
        <div className="experience-date">Sep 2022 - Present</div>
        <h2 className="experience-title">Spotify - Frontend Engineer</h2>
        <p className="experience-description">
          As a frontend engineer at Spotify, I led the development of
          innovative user interfaces using HTML, CSS, and React. My
          expertise in JavaScript and Redux enabled the creation of
          reusable components, improving development efficiency.
          By integrating with the Spotify API, I enabled functionality
          advanced, handling asynchronous calls. On the server side, I
          used Express.js to ensure smooth communications with the
          backend. My experience helped optimize the experience
          user on a leading streaming platform, demonstrating a solid
          mastery of frontend technologies and a proven ability to
          address complex challenges.
        </p>
        <div className="experience-tech">
          <span className="experience-technology">HTML</span>
          <span className="experience-technology">CSS</span>
          <span className="experience-technology">React</span>
          <span className="experience-technology">JavaScript</span>
          <span className="experience-technology">Redux</span>
          <span className="experience-technology">API</span>
          <span className="experience-technology">Express.js</span>
        </div>
      </div>
      {/**Secondo experience item */}
      <div className="experience-item">
        <div className="experience-date">Apr 2015 - Giu 2023</div>
        <h2 className="experience-title">Microsoft - Frontend Developer</h2>
        <p className="experience-description">
          As a frontend developer at Microsoft, I led the development of
          cutting-edge user interfaces using React.js. My
          expertise in web development and programming enabled the creation
          engaging and high-performing user experiences. Using
          Photoshop, I integrated graphics principles to enhance the visual appearance
          visual aspect of web applications. My focus on user experience
          and mastery of front-end development have contributed to the success
          of web application projects. In addition, I have excelled in
          communication, collaborating effectively with multidisciplinary teams
          to achieve common goals.
        </p>
        <div className="experience-tech">
          <span className="experience-technology">Photoshop</span>
          <span className="experience-technology">CSS</span>
          <span className="experience-technology">HTML</span>
          <span className="experience-technology">React</span>
          <span className="experience-technology">Next.js</span>
          <span className="experience-technology">Scss</span>
          <span className="experience-technology">Tailwind</span>
          <span className="experience-technology">Git</span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
