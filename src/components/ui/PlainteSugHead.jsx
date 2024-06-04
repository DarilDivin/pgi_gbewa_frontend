import { Plus, Redo2, Undo2 } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function PlainteSugHead ({ showButton=true }) {
    return(
        <div className="w-auto m-auto flex flex-col xl:flex-row justify-between px-12 lg:pl-20 lg:pr-12 my-8 mb-12 flex-wrap gap-4">
            <h3 className="mb-3 text-center font-bold text-3xl text-gray-700">Plaintes et Suggestions</h3>
            <div className="flex flex-1 flex-row gap-6 justify-center xl:justify-end items-center flex-wrap">
                <select name="" id="" className="min-w-48 md:min-w-64 border-[1px] h-10 border-slate-200 rounded px-4 overflow-clip">
                    <option value="">Trier par</option>
                    <option value="">Critère 1</option>
                    <option value="">Critère 2</option>
                    <option value="">Critère 3</option>                        
                    <option value="">Critère 4</option>
                </select>
                <div className="flex flex-row gap-6 items-center">
                    <div className="flex flex-row gap-6 items-center">
                        <Undo2 color="gray" className="cursor-pointer hover:text-slate-900" />
                        <Redo2 color="gray" className="cursor-pointer hover:text-slate-900"/>
                    </div>
                    {showButton && <button className="flex px-4 py-2 justify-center items-center bg-green-700 text-white rounded-md font-bold gap-4">
                        Ajouter
                        <Plus />
                    </button>}
                </div>
            </div>
        </div>

    );
}