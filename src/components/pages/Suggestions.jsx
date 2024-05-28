import { useState } from "react";
import {  Plus, Redo2, Undo2 } from "lucide-react";
import Layout from "../common/Layout.jsx";
import { ReceiveSuggestion } from "./ReceiveSuggestion.jsx";
import { PlaintesSoumises } from "./PlaintesSoumises.jsx";

export function Suggestions () {

    const [receiveIsActive, setReceiveIsActive] = useState(false);
    const container = [];

    //La gestion de la bascule entre Soumis et Reçus ne marche pas.
    const toggleTabs = (e) => {
        console.log(e.target.firstChild.data);
        if (e.target.firstChild.data === "Reçus") {
            console.log("Reçus");
            container.push(
                <ReceiveSuggestion/>
            )
            setReceiveIsActive(true)
        } else {
            console.log("Soumis");
            container.push(
                <PlaintesSoumises/>
            )
            setReceiveIsActive(false)
        }
    }
    //La gestion de la bascule entre Soumis et Reçus ne marche pas.

    return(
        <Layout>
            <div className="w-[150px] sm:w-[200px] lg:w-[300px] bg-green-700 h-[45px] rounded-[6px] p-[3px] flex justify-between mx-auto mb-20">
                <button className={`${receiveIsActive ? 'text-white' : 'bg-slate-50 text-dark/70'} text-[10px] sm:text-xs lg:text-base h-full  w-[150px] px-8 rounded font-semibold`} onClick={toggleTabs}>Soumis</button>
                <button className={`${receiveIsActive ? 'bg-slate-50 text-dark/70' : 'text-white '} text-[10px] sm:text-xs lg:text-base w-[150px] font-semibold h-full rounded `} onClick={toggleTabs}>Reçus</button>
            </div>

            <div className="flex flex-col lg:flex-row justify-between px-12 lg:pl-20 lg:pr-12 my-8 mb-12 flex-wrap gap-4">
                <h3 className="font-bold text-3xl">Plaintes et Suggestions</h3>
                <div className="flex flex-1 max-w-2xl gap-2 justify-between flex-wrap">
                    <select name="" id="" className="min-w-60 max-w-64 xl:max-w-80 border-[1px] h-10 border-slate-200 rounded px-4 overflow-clip">
                        <option value="">Trier par</option>
                        <option value="">Critère 1</option>
                        <option value="">Critère 2</option>
                        <option value="">Critère 3</option>
                        <option value="">Critère 4</option>
                    </select>
                    <div className="flex items-center justify-evenly gap-4 text-slate-900/70">
                        <Undo2 className="cursor-pointer hover:text-slate-900"/>
                        <Redo2 className="cursor-pointer hover:text-slate-900"/>
                    </div>
                    <button className="flex px-4 py-2 justify-center items-center bg-green-700 text-white rounded-md font-bold gap-4">
                        Ajouter
                        <Plus />
                    </button>
                </div>
            </div>
            {container}
        </Layout>
    )
}