import React from "react";
import { createClient } from "@/prismicio";
import NavBar from "./NavBar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("setting");

  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar settings={settings} />
    </header>
  );
}
