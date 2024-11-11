'use client'
import AccionesInicio from "./components/accionesInicio/accionesInicio";
import { Banner } from "./components/banner/banner";
import { Fundacion } from "./components/fundacion/fundacion";
import NavBar from "./components/nav/nav";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Banner/>
      <AccionesInicio />
      <Fundacion/>
    </div>
  );
}
