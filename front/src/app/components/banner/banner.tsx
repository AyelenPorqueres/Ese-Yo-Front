'use client'
import React from "react";
import "@/app/components/banner/banner.css"

export function Banner() {
    return (
        <>
            <div className="bannerContainer text-black">
                <div className="tituloBanner">La diversión es por aquí</div>
                <div className="subtituloBanner">Creemos en el poder transformador del juego y el deporte, y trabajamos para hacerlo accesible a todos.</div>
                <button className="botonDonar">DONÁ AHORA</button>
                <img className="bannerImagen" src="/banner.png" alt="Imagen del banner"></img>
            </div>
        </>
    )
}