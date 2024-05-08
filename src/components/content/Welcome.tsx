import Link from 'next/link';

const Welcome = () => (
  <section className="p-12 min-h-screen flex flex-col justify-center align-middle bg-black">
    <div className="relative flex flex-col justify-center align-middle text-center bg-beige flex-grow rounded-2xl">
      <h1 className=" lg:text-8xl font-light">nomad</h1>
      <p className=" lg:text-3xl font-light">fullstack solutions.</p>
      <AboutButton />
    </div>
  </section>
);

const AboutButton = () => (
  <div className="block px-4 rounded-t-md bg-black text-beige w-fit absolute bottom-0 right-20">
    <Link href="#about">
      <h3>about</h3>
    </Link>
  </div>
);
export default Welcome;
