import Blog from "../components/Blog";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Improve from "../components/Improve";
import Overview from "../components/Overview";
import Selected from "../components/Selected";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const app = () => {
  return (
    <main>
     <Hero/>
     <Overview/>
     <Selected/>
     <Improve/>
     <Testimonial/>
     <Team/>
     <Stats/>
     <Blog/>
     <CallToAction/>
    </main>
  );
};

export default app;
