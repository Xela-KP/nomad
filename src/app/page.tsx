import Content from 'components/Content';
import About from 'components/content/About';
import Contact from 'components/content/Contact';
import Header from 'components/Header';
import Works from 'components/content/Works';
import Navigation from 'components/Navigation';
import Welcome from 'components/content/Welcome';

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      {/* <Header>
        <Navigation />
      </Header>
      <Content>
        <About />
        <Works />
        <Contact />
      </Content> */}
    </>
  );
}
