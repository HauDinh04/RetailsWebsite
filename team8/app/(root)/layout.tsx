import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <main className={"relative container"}>{children}</main>;
}

export default Layout;
