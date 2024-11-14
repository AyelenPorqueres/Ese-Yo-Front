'use client'
import React from "react";
import "@/app/components/cardsEquipo/cardsEquipo.css"

export function CardsEquipo() {
    return (
        <>
        <img className="nuestroEquipo min-w-full h-[200px]" src="./images/banner.png" alt="Nuestro Equipo"></img>
   <h1 className="titulo w-72 h-[70px] text-4xl justify-center ml-[350px] font-serif text-black">Nuestro equipo</h1>
   <p className="w-[1200px] h-[200px] text-2xl justify-center ml-[350px] text-black">En ESE YO, contamos con un equipo comprometido y apasionado, formado por individuos dedicados a hacer una diferencia en la vida de los niños y niñas. Nuestro equipo está integrado por profesionales con amplia experiencia en el ámbito deportivo y educativo, así como por amigos y familiares comprometidos con nuestra causa. Juntos, trabajamos en sinergia para llevar a cabo nuestros programas y proyectos, siempre con el objetivo de impactar positivamente en la vida de los más pequeños.</p>
        
        
        
        <div className="flex flex-row justify-center gap-28">
        <div className="bg-slate-600 h-96 w-96 ml-3">
            <img className="" src="./images/aimar.png" alt="Imagen de miembro del equipo"></img>
            <h1 className="font-serif">Pablo Aimar</h1>
            <p className="">Nací en Río cuarto, Córdoba. Soy papá de cuatro hijos. Creo que dar una mano es siempre un buen plan. Formo parte con alegría de ese-YO</p>

        </div>
        <div className="bg-slate-600 h-96 w-96 ml-3">
            <img className="" src="./images/aimar.png" alt="Imagen de miembro del equipo"></img>
            <h1 className="font-serif">Pablo Aimar</h1>
            <p className="">Nací en Río cuarto, Córdoba. Soy papá de cuatro hijos. Creo que dar una mano es siempre un buen plan. Formo parte con alegría de ese-YO</p>

        </div>        <div className="bg-slate-600 h-96 w-96 ml-3">
            <img className="" src="./images/aimar.png" alt="Imagen de miembro del equipo"></img>
            <h1 className="font-serif">Pablo Aimar</h1>
            <p className="">Nací en Río cuarto, Córdoba. Soy papá de cuatro hijos. Creo que dar una mano es siempre un buen plan. Formo parte con alegría de ese-YO</p>

        </div>
        </div>
        </>
    )
}