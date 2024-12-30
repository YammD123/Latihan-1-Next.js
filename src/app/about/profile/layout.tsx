import { Children } from "react";

const ProfileLayout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  return (
    <>
    <h1>title</h1>
      <div>
        {children}
      </div>
    </>
  );
};

export default ProfileLayout;
