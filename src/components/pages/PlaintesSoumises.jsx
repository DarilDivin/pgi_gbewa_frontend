import { SuggestionCardList } from "../ui/SuggestionCardList.jsx";

export function PlaintesSoumises () {
return (
    <div className="mb-8 pl-16 pr-12 h-auto flex flex-col">
        <div>
            <h2 className=" ml-4 text-[1.5rem] font-semibold text-gray-600">Aujourd'hui</h2>
            <SuggestionCardList/>
        </div>
        <div>
            <h2 className="ml-4 text-[1.5rem] font-semibold text-gray-600">Hier</h2>
            <SuggestionCardList/>
        </div>
        <div>
            <h2 className="ml-4 text-[1.5rem] font-semibold text-gray-600">Il y a deux jours</h2>
            <SuggestionCardList/>
        </div>
    </div>
    );
}