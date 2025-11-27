import Header from "../../components/layout/Header/Header.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

import Hero from "../../components/sections/Hero/Hero.jsx";
import Menu from "../../components/sections/Menu/Menu.jsx";
import Story from "../../components/sections/Story/Story.jsx";
import Newsletter from "../../components/sections/Newsletter/Newsletter.jsx";
import StoryMap from "../../components/sections/StoryMap/StoryMap.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Newsletter />
        <StoryMap />
      </main>
      <Footer />
    </>
  );
}
