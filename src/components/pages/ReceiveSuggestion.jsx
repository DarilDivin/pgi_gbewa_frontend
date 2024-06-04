import { useState } from "react";
import Layout from "../common/Layout.jsx";
import ReceiveCardList from "../ui/ReceiveCardList.jsx";
import PlaintesSoumises from "./PlaintesSoumises.jsx";
import PlainteSugHead from "../ui/PlainteSugHead.jsx";

export default function ReceiveSuggestion () {
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

    return (
        <Layout>
            <div className="w-[150px] sm:w-[200px] lg:w-[300px] bg-green-700 h-[45px] rounded-[6px] p-[3px] flex justify-between mx-auto mb-10 lg:mb-20">
                <button className={`${receiveIsActive ? 'text-white' : 'bg-slate-50 text-dark/70'} text-[10px] text-gray-500 sm:text-xs lg:text-base h-full  w-[150px] px-8 rounded font-semibold`} onClick={toggleTabs}>Soumis</button>
                <button className={`${receiveIsActive ? 'bg-slate-50 text-dark/70' : 'text-white '} text-[10px] sm:text-xs lg:text-base w-[150px] font-semibold h-full rounded `} onClick={toggleTabs}>Reçus</button>
            </div>

            <PlainteSugHead showButton={false}/>

            <div className="mb-8 pl-4 lg:pl-16 pr-8 lg:pr-12 h-auto flex flex-col">
                <div>
                    <h2 className=" ml-4 text-[1.5rem] font-semibold text-gray-600">Aujourd&apos;hui</h2>
                    <ReceiveCardList/>
                </div>
                <div>
                    <h2 className="ml-4 text-[1.5rem] font-semibold text-gray-600">Hier</h2>
                    <ReceiveCardList/>
                </div>
                <div>
                    <h2 className="ml-4 text-[1.5rem] font-semibold text-gray-600">Il y a deux jours</h2>
                    <ReceiveCardList/>
                </div>
            </div>
        </ Layout>
    );
}