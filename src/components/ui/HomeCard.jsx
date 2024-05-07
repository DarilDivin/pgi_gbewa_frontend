/* eslint-disable react/prop-types */
import { ScrollText, SquareArrowOutUpRight } from "lucide-react";

export function HomeCard ({children}) {
    return (
        <div>
            <div className="card w-72 h-64 p-8 rounded-3xl shadow-xl inline-block">
                <div className="icon-card w-12 h-12 p-3 text-center rounded-2xl text-white bg-green-700">
                    <div className="w-6 h-6 bg-green-700 text-center rounded-full">
                        <ScrollText color="white" size={22} />
                    </div>
                </div>
                <div className="mt-6">
                    {children}
                </div>
             <div className="icon-card bottom w-12 h-12 ml-auto text-center rounded-2xl p-2 text-white bg-gray-200">
                <SquareArrowOutUpRight color="black" size={30}/>
             </div>
            </div>
       </div>
    );
}