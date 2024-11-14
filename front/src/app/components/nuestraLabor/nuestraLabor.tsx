'use client'
import React from "react";
import "@/app/components/nuestraLabor/nuestraLabor"

export function NuestraLabor() {
  
  
    return (
    <>
  
    <img className="min-w-full" src="./images/nuestra-labor-top.jpg" alt="Imagen top nuestra labor"></img>
    <br/><br/>
      <div className=" justify-center pl-60 relative top-7 text-4xl font-semibold  text-[#000000] pb-16">Nuestra labor</div>
      <div className="justify-center w-[1645px] pl-60  text-2xl text-left text-[#000000] pb-16">En ESE YO, nos dedicamos a desarrollar programas y proyectos destinados a promover el bienestar y el desarrollo integral de los niños y niñas a través del juego y el deporte. 
    <br/><br/>
    Nuestras actividades incluyen talleres, eventos deportivos y programas de educación en valores, diseñados para potenciar las habilidades físicas, mentales y emocionales de los participantes.
    <br/><br/>Trabajamos en colaboración con instituciones educativas, organizaciones comunitarias y otros actores clave para maximizar nuestro impacto y llegar a más niños y niñas en situación de vulnerabilidad.</div>
    <br/>
   <div className="flex ...   ml-[242px] gap-28 size-96">
    <img className="flex-1 ...  border-2 border-black  rounded-lg " src="./images/ninos-basquet.jpeg" alt="Imagen top nuestra labor"></img>
    <img className="flex-1 ...  border-2 border-black rounded-lg " src="./images/ninos-soga.jpg" alt="Imagen top nuestra labor"></img>
    <img className="flex-1 ...  border-2 border-black rounded-lg" src="./images/ninos-tenis.jpg" alt="Imagen top nuestra labor"></img>
    </div>
    <br/><br/>
    
    </>
  )
}