import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Skillset from "./Components/Skillset/Skillset";
import Experience from "./Components/Experience/Experience";
import ProjectBox from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skillset />
      <Experience />
      <div className="project-container">
        <ProjectBox
          title="Car Rental"
          description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
          technologies={["React", "JavaScript", "CSS", "Vercel"]}
          projectLink='https://car-rental-angeldevil.vercel.app/'
          gitHubLink='https://github.com/angeldevildev/car-rental'
        />
        <ProjectBox 
          title="Portfolio 2024"
          description="My new portfolio with a new design, i am still working on this project!"
          technologies={["React", "TypeScript", "Tailwind CSS", "Vercel"]}
          projectLink='https://portfolio-2024-eight-iota.vercel.app/'
          gitHubLink='https://github.com/angeldevildev/bank-website'
        />
        <ProjectBox 
          title="VisiUI"
          description="VisiUI is a library that provides pre-built, editable React components that can be used in your app. Is OpenSource and you can start contributing right NOW!"
          technologies={["React", "TypeScript", "Tailwind CSS", "Vercel", "OpenGraph"]}
          projectLink="https://visi-ui.vercel.app/"
          gitHubLink="https://github.com/VisiUI/VisiUI"
        />
      </div>
      <Footer />
    </div>
  );
}
