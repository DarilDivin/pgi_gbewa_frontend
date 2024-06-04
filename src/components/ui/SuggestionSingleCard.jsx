import { Download } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function SuggestionSingleCard ({picture, src, show = true}) {

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
        <div className="min-w-[26rem] max-w-auto h-full px-12 py-10 mb-12 shadow-2xl rounded-xl">
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-6">
                {profilPicture}
                <h3 className="font-bold">Nom Prénoms</h3>
            </div>
            <span className="border border-gray-100 font-semibold text-sm text-gray-700">12 Avril 2024</span>
        </div>
        {show && <div className="ml-14 font-bold text-lg">Motif de la plainte ou suggestion</div>}
        <p className="mt-8 mb-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem voluptate expedita, quos ipsum impedit eum aut nisi optio iste quod eaque? Odio praesentium iure aperiam? Quibusdam maxime in nulla vero ipsam ea cumque itaque quam excepturi, odio nihil illo nam beatae pariatur. Error sequi omnis delectus, similique vero quae tenetur molestiae ducimus nulla voluptas, non ipsam quod? Consectetur, magni, perferendis cum ipsum culpa porro hic iure nisi adipisci necessitatibus ipsa ex veniam. Perspiciatis omnis totam, numquam culpa quo, eveniet quisquam molestias modi itaque, optio ex beatae illo obcaecati rem laborum minima eius quia consequatur quis veniam soluta sunt excepturi.
        </p>
        <div className="my-8 text-gray-700">
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque nostrum vero itaque? Commodi mollitia nisi laboriosam, accusantium distinctio reprehenderit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque nostrum vero itaque? Commodi mollitia nisi laboriosam, accusantium distinctio reprehenderit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque nostrum vero itaque? Commodi mollitia nisi laboriosam, accusantium distinctio reprehenderit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque nostrum vero itaque? Commodi mollitia nisi laboriosam, accusantium distinctio reprehenderit.</li>
            </ul>
        </div>
        {show && <div className="flex justify-start">
            <button className="bg-green-700 text-white p-2 rounded-lg w-auto flex flex-row gap-2"><Download size={20}/>Télécharger</button>
        </div>}
        <div className="flex justify-end">
            <button className="w-28 mt-12 bg-green-700 text-white p-2 rounded-lg flex justify-center gap-2">Gérer</button>
        </div>
    </div>
    );
}