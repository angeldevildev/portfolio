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
          title="Bank Website"
          description="Frontend of a bank website created with React and Css and deployed vith Vercel."
          technologies={["React", "JavaScript", "CSS", "ViteJS", "Vercel"]}
          projectLink='https://bank-website-omega.vercel.app/'
          gitHubLink='https://github.com/angeldevildev/bank-website'
        />
      </div>
      <Footer />
    </div>
  );
}
