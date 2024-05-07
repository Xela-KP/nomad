import Content from 'components/Content';
import About from 'components/content/About';
import Contact from 'components/content/Contact';
import Header from 'components/content/Header';
import Works from 'components/content/Works';
import Navigation from 'components/Navigation';

export default function Home() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Content>
        <About />
        <Works />
        <Contact />
      </Content>
    </>
  );
}
