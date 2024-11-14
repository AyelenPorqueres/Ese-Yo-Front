'use client'
import React from "react";

export function Banner() {
    return (
        <>
            <div className="w-full h-[520px] flex flex-col items-center gap-5 text-center relative overflow-hidden pt-7 text-black flex-wrap">
                <div className="text-[2.625em] font-bold font-[cursive] z-10">La diversión es por aquí</div>
                <div className="text-[1.5625em] w-auto max-w-[90%] md:max-w-[710px] z-10">Creemos en el poder transformador del juego y el deporte, y trabajamos para hacerlo accesible a todos.</div>
                <button className="rounded-lg border border-gray-200 bg-[#f2cc0f] text-white h-10 w-44 text-[1.25em] z-10 hover:bg-white hover:text-black">DONÁ AHORA</button>
                <img className="w-full h-[520px] object-cover absolute top-0 left-0" src="./images/banner.png" alt="Imagen del banner" />
            </div>
        </>
    );
}