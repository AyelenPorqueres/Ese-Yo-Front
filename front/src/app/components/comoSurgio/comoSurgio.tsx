'use client'
import React from "react";

export function ComoSurgio() {
  return (
    <div>
      <div className="flex flex-col border-y-4 border-green-300">
        <h1 className="w-60 h-20 text-4xl self-center text-[#000000] relative mt-[2%]"> Como Surgio</h1>
        <p className="texto text-[#000000] w-[1600px] self-center text-2xl mb-[40px] bg-white">Surgió en un bar de Buenos Aires. Estábamos comiendo con unos amigos. Como suele suceder en la ciudad, en repetidas ocasiones se nos acercaron personas para preguntarnos si podríamos ayudarlos. Ya sea comprando alguno de los productos que ofrecían o compartiendo una ración de nuestro plato. Conversando con los demás miembros del proyecto, que estaba iniciándose, nos dimos cuenta que esta situación no solo tenía lugar en la capital sino también en el interior. Mismas necesidades, distinta latitud. <br></br><br></br>

          Entre la precoz imaginación de todos los posibles futuros y la intensidad momentánea de nuestro compromiso social, surgió la pregunta: ¿Qué hacemos nosotros por el otro? Ese otro. Ese otro que no contó, quizá, con las posibilidades y privilegios que nosotros gozamos. Ese otro que no dispuso de la protección de un techo, que no sintió amor, que no recibió alimento. Ese otro a quien educaron miles y miles de no. Nosotros saciando todas nuestras necesidades y ese otro mendigando para llenar su barriga.<br></br><br></br>

          Anteriormente ya habíamos hablado de formar una Fundación. Sin saberlo, ese fue el momento. Tiramos varios nombres, iniciamos un juego de palabras: ese otro también soy yo, ese otro soy, ese otro yo. Como si un reflejo susurrara al pasar y un espejo nos tocara la fibra más íntima, coincidimos: ESE YO</p>
      </div>
      <img className="quienesSomos min-w-full h-[520px]" src="./images/quienesSomos.png" alt="Imagen del banner"></img>
    </div>
  )
}