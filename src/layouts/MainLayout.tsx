import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen max-w-2xl px-5 m-auto">{children}</div>;
};

export default MainLayout;
