import { SuggestionCard } from "./SuggestionCard.jsx";


export function SuggestionCardList () {
    return (
        <div className="w-full h-auto overflow-x-scroll">
            <div className="ml-4 flex flex-row gap-4 justify-around">
                <SuggestionCard
                    treated = {true}
                    picture={false}
                    src={""}
                />
                <SuggestionCard
                    treated = {false}
                    picture={true}
                    src={""}
                />    
                <SuggestionCard
                    treated = {true}
                    picture={false}
                    src={""}
                />    
                <SuggestionCard
                    treated = {false}
                    picture={true}
                    src={""}
                />    
                <SuggestionCard
                    treated = {true}
                    picture={true}
                    src={""}
                />    
            </div>
        </div>
    );
}