import { Accordions } from "@/app/components/accordions/accordions";
import NavBar from "@/app/components/nav/nav";
import { NuestroEquipo } from "@/app/components/nuestroEquipo/page";
import { ComoSurgio } from "@/app/components/comoSurgio/comoSurgio";

export default function QuienesSomos() {
    return (
        <div className="bg-white">
            <NavBar /> 
            <NuestroEquipo/>
            <Accordions />
            <ComoSurgio />
           
        </div>
    );
}




