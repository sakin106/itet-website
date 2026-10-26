import React from "react";
import { TopUtilityBar } from "./TopUtilityBar";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <>
      <TopUtilityBar />
      <Navbar />
    </>
  );
}

export { TopUtilityBar, Navbar };
