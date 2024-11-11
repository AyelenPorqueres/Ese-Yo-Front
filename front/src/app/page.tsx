'use client'
import { Banner } from "./components/banner/banner";
import NavBar from "./components/nav/nav";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Banner/>
    </div>
  );
}
