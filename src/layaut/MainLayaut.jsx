import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export default function MainLayaut() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
