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
          title="New Portfolio"
          description="This is my personal portfolio, visit my portfolio and reach me out if you need any Front-End services"
          technologies={["React", "TypeScript", "Tailwind CSS", "Vercel", "OpenGraph", "NextJS"]}
          projectLink="https://www.codedoddle.com/"
          gitHubLink="https://github.com/angeldevildev/modern-portfolio"
        />
        <ProjectBox
          title="Car Rental"
          description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
          technologies={["React", "JavaScript", "CSS", "Vercel"]}
          projectLink='https://car-rental-angeldevil.vercel.app/'
          gitHubLink='https://github.com/angeldevildev/car-rental'
        />
        <ProjectBox 
          title="CrystalCove"
          description="I've created this website with NextJS and is for a MineCraft Server. It Is a private repository."
          technologies={["React", "TypeScript", "Tailwind CSS", "Vercel", "NextJS", "OpenGraph"]}
          projectLink='https://crystalcove.vercel.app'
          gitHubLink='#'
        />
          <ProjectBox 
          title="JellyFishMC Shop"
          description="The JellyFishMC shop is the part where you can buy some items of the server. It is a private repository."
          technologies={["React", "TypeScript", "Tailwind CSS", "Vercel", "NextJS", "OpenGraph"]}
          projectLink='https://jellyfish-shop.vercel.app/'
          gitHubLink='#'
        />
      </div>
      <Footer />
    </div>
  );
}
