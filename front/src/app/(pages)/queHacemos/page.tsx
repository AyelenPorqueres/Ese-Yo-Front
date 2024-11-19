'use client'

import { AccionesQueHacemos } from "@/app/components/cardsQueHacemos/accionesQueHacemos";
import { NuestraLabor } from "@/app/components/nuestraLabor/nuestraLabor"



export default function QueHacemos () {
    return(
<div className="bg-white">
<NuestraLabor/>
<AccionesQueHacemos/>
</div>

);
}