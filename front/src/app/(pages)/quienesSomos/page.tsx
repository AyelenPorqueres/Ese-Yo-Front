import { Accordions } from "@/app/components/accordions/accordions";
import NavBar from "@/app/components/nav/nav";

import { ComoSurgio } from "@/app/components/comoSurgio/comoSurgio";
import { CardsEquipo } from "@/app/components/cardsEquipo/cardsEquipo";

export default function QuienesSomos() {
    return (
        <div className="bg-white">
            <NavBar />
            <CardsEquipo/>
            <Accordions />
            <ComoSurgio />
        </div>
    );
}