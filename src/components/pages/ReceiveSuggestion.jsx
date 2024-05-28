import { ReceiveCardList } from "../ui/ReceiveCardList.jsx";

export function ReceiveSuggestion () {
    return (
        <div className="mb-8 pl-16 pr-12 h-auto flex flex-col">
                <div>
                    <h2 className=" ml-4 text-[1.5rem] font-semibold text-gray-600">Aujourd'hui</h2>
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
    );
}