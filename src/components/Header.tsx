import Navigation from 'components/Navigation';

const Header = ({ children }: { children: React.ReactNode }) => (
  <header className="lg:sticky top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between">
    <h1>aleka</h1>
    <h2 className="">
      full stack solutions.
      <br />
      one provider.
    </h2>
    {children}
  </header>
);
export default Header;
