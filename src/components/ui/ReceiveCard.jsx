import { Download } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function ReceiveCard ({picture, src}) {

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

    return (
        <div className="min-w-[26rem] max-w-[30rem] h-60 px-6 py-4 mb-12 shadow-2xl rounded-xl">
        <div className="mb-4">
            <div className="flex flex-row gap-6">
                {profilPicture}
                <h3 className="font-bold">Nom Prénoms</h3>
            </div>
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