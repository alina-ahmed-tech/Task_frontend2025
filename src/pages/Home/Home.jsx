import "./Home.scss";
import "../../../src/styles/main.scss";
import Header from "../../components/layout/Header/Header.jsx";
import Footer from "../../components/layout/Footer/Footer.jsx";

import Hero from "../../components/sections/Hero/Hero.jsx";
import Menu from "../../components/sections/Menu/Menu.jsx";
import Story from "../../components/sections/Story/Story.jsx";
import Newsletter from "../../components/sections/Newsletter/Newsletter.jsx";
import StoryMap from "../../components/sections/StoryMap/StoryMap.jsx";

import Container from "../../components/layout/Container/Container.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* constrained content only */}
        <Container>
          <Menu />
          <Story />
          <Newsletter />
          <StoryMap />
        </Container>
      </main>
      <Footer />
    </>
  );
}
