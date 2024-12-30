import { Children } from "react";

const AboutLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <>
      <nav className="fixed right-0 top-10 z-10 w-60 h-screen  bg-gray-800">
        <ul className="text-white p-5">
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
};

export default AboutLayout;
