import { Download } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function SuggestionCard ({treated, picture, src}) {
    //treated pour savoir si ce "dossier" est traité ou pas.
    //picture pour savoir si ce "dossier" a une image de profil.
    //src sera la valeur du lien src au cas où le dossier aura une image. Elle prendra la valeur "none" sinon.

    let hasPicture = picture;
    let profilPicture = [];

    if (hasPicture) {
        profilPicture.push(
            <div className="w-8 h-8 rounded-full text-center item-center">
                <img className="w-8 h-8" src={src} alt="Photo de profil" />
            </div>
        );
    } else {
        profilPicture.push(
            <div className="w-8 h-8 rounded-full text-center item-center text-2xl text-white font-bold bg-blue-500">
                P
            </div>
        );
    }

    let isTreated = treated;
    const treat = [];

    if (isTreated) {
        treat.push(
            <div className="w-20 h-8 text-center py-1 bg-green-300 text-gray-600 font-semibold rounded-lg">
                Traité
            </div>
        );
    } else {
        treat.push(
            <div className="w-20 h-8 text-center py-1 bg-red-300 text-gray-600 font-semibold rounded-lg">
                En cours
            </div>
        );
    }

    return (
        <div className="min-w-[26rem] max-w-[30rem] h-60 px-6 py-4 mb-12 shadow-2xl rounded-xl">
            <div className="flex flex-row justify-between mb-4">
                <div className="flex flex-row gap-6">
                    {profilPicture}
                    <h3 className="font-bold">Nom Prénoms</h3>
                </div>
                {treat}
            </div>
            <p className="mb-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat corporis molestias facilis ratione sunt dolores? 
                Minima eum repellendus fugiat hic.
            </p>
            <div className="flex flex-row justify-end">
                <button className="border-2 border-gray-200 text-gray-600 p-2 rounded-lg w-auto flex flex-row gap-2"><Download size={20}/>Télécharger</button>
            </div>
        </div>
    );
}