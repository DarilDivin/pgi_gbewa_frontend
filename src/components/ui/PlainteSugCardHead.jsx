import { ChevronLeft, Plus } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function PlainteSugCardHead ({ children }) {
    return(
        <div className="w-auto m-auto flex flex-row justify-between px-12 lg:pl-20 lg:pr-12 my-8 mb-10 flex-wrap gap-4">
            <div className="flex flex-row gap-6 items-center">
                <ChevronLeft color="gray" />
                <h3 className="mb-3 text-center font-bold text-3xl text-gray-700">{children}</h3>
            </div>
                
            <button className="flex px-4 py-2 justify-center items-center bg-green-700 text-white rounded-md font-bold gap-4">
                <span className="hidden sm:flex">Ajouter</span>
                <Plus  />
            </button>
        </div>

    );
}