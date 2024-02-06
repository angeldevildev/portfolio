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
          technologies={["React", "CSS", "JavaScript"]}
        />
      </div>
      <Footer />
    </div>
  );
}
