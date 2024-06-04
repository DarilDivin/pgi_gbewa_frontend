import ReceiveCard from "./ReceiveCard.jsx";

export default function ReceiveCardList () {
    return(
        <div className="w-full h-auto overflow-x-scroll">
            <div className="ml-4 flex flex-row gap-4 justify-around">
                <ReceiveCard
                    picture={false}
                    src={""}
                />
                <ReceiveCard
                    picture={false}
                    src={""}
                />    
                <ReceiveCard
                    picture={false}
                    src={""}
                />    
                <ReceiveCard
                    picture={false}
                    src={""}
                />    
                <ReceiveCard
                    picture={false}
                    src={""}
                />    
            </div>
        </div>
    );
}