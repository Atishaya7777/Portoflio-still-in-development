import Particles from "react-particles-js";
import configParticles from "../config/configParticles";

function Hero({ children }) {
  return (
    <div className="hero-container">
      <div className="hero-container first">
        <Particles
          height="100vh"
          width="100vw"
          params={configParticles}
          className="jsparticles"
        />
        {children}
      </div>
    </div>
  );
}

export default Hero;
