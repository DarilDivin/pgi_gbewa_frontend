/* eslint-disable react/no-unescaped-entities */
import { BarChartBig, ChevronDown, ChevronLeft, Download, Plus } from "lucide-react"
import Layout from "../common/Layout"
import AvatarGroup from "../ui/AvatarGroup"
import DoghnutChart from "../ui/DoghnutChart"

const SingleProjectPage = () => {
    return (
        <Layout>
            <div className="flex gap-2 lg:gap-4 items-center font-bold text-xl px-12 lg:pl-28">
                <ChevronLeft />
                <h1>Liste des projets</h1>
            </div>
            <div className="w-full px-12 lg:px-28 ">
                <h1 className="font-bold text-2xl my-8">Nom du projet</h1>
                <div className="flex flex-col xl:flex-row gap-6 h-auto ">
                    <div className="flex flex-col w-full xl:w-3/4 py-2 px-6 shadow-xl rounded-xl border-[0.5px] border-slate-200">
                        <span className="flex gap-16 pb-3">
                            <h3 className="font-bold text-lg w-52">Intervenants</h3>
                            <AvatarGroup />
                        </span>
                        <span className="flex gap-16 pb-3">
                            <h3 className="font-bold text-base xl:text-lg w-36 xl:w-52">Echéance</h3>
                            <p className=" px-4 text-sm font-semibold flex items-center rounded-lg border-[1px] border-slate-200 ">12 avril 2024 - 12 juin 2024</p>
                        </span>
                        <span className="flex gap-16 pb-3">
                            <h3 className="font-bold text-base xl:text-lg w-36 xl:w-52">Axe Stratégique</h3>
                            <p className=" px-4 text-sm font-semibold flex items-center rounded-lg border-[1px] border-slate-200 ">Axe 1</p>
                        </span>
                        <span className="flex gap-16 pb-3">
                            <h3 className="font-bold text-base xl:text-lg w-36 xl:w-52">Zones d'intervention</h3>
                            <p className=" px-4 text-sm font-semibold flex items-center rounded-lg border-[1px] border-slate-200 ">Cotonou - Ouidah - Dassa</p>
                        </span>
                        <div>
                            <p className=" text-sm mb-4 font-semibold text-black/70">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem veniam nesciunt eum, saepe magnam est fugiat omnis suscipit ut aliquid, minima officia praesentium et, hic ducimus! In accusamus officiis harum ducimus quis temporibus alias minima saepe placeat. Tenetur, excepturi at? Officia minima iste rerum temporibus blanditiis et eos asperiores.
                            </p>
                            <p className=" text-sm mb-4 font-semibold text-black/70">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta alias, sunt perferendis quos in non modi provident animi ipsa iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum at corporis, porro perspiciatis aperiam.
                            </p>
                            <p className=" text-sm mb-4 font-semibold text-black/70">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam at doloremque eaque quos dicta? Sunt natus molestias quia maxime explicabo adipisci fuga delectus facere saepe dignissimos dolorem atque, exercitationem repellat id quidem repellendus corrupti cum tempora qui nemo enim rem perspiciatis. Autem possimus similique minus aliquid esse repellendus, ducimus alias veniam architecto, sit dolor eos sequi quos suscipit eveniet cum?
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center h-auto w-full xl:w-1/4 p-2 shadow-xl rounded-xl border-[0.5px] border-slate-200">
                        <h3 className="font-bold text-lg my-4">Evolution des Activités</h3>
                        <div className="flex justify-between items-center gap-6">
                            <div className="flex flex-col items-center gap-2 p-2 border-[1px] border-slate-300">
                                <p className="text-center">Activités totales</p>
                                <p className="font-bold text-2xl">476</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-2 border-[1px] border-slate-300">
                                <p className="text-center">Activités totales</p>
                                <p className="font-bold text-2xl">476</p>
                            </div>
                        </div>
                        <div className="w-full p-6 h-[250px] flex justify-center items-center">
                            <DoghnutChart />
                        </div>
                        <div className="w-full">
                            {/* <!-- component --> */}
                            <div className="m-2 space-y-2">
                                <div className="group flex flex-col gap-2 rounded-lg bg-white p-2 text-black" tabIndex="1">
                                    <div className="flex cursor-pointer items-center justify-between">
                                        <span className="flex gap-4 items-center font-bold text-black/70">
                                            <span className="size-[10px] block rounded-full bg-green-300 before:size-[20px] before:bg-green-200/50 before:block before:-translate-x-1/4 before:-translate-y-1/4 before:rounded-full before:relative relative"></span> 
                                            Activités terminées 
                                        </span>
                                        <span className="flex gap-2 font-bold">
                                            186
                                            <ChevronDown className="transition-all duration-500 group-focus:-rotate-180"/>
                                        </span>
                                    </div>
                                    <div className="invisible h-auto px-4 max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                    </div>
                                </div>
                                <div className="group flex flex-col gap-2 rounded-lg bg-white p-2 text-black" tabIndex="1">
                                    <div className="flex cursor-pointer items-center justify-between">
                                        <span className="flex gap-4 items-center font-bold text-black/70">
                                            <span className="size-[10px] block rounded-full bg-green-500 before:size-[20px] before:bg-green-400/50 before:block before:-translate-x-1/4 before:-translate-y-1/4 before:rounded-full before:relative relative"></span> 
                                            Activités terminées 
                                        </span>
                                        <span className="flex gap-2 font-bold">
                                            186
                                            <ChevronDown className="transition-all duration-500 group-focus:-rotate-180"/>
                                        </span>
                                    </div>
                                    <div className="invisible h-auto px-4 max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                    </div>
                                </div>
                                <div className="group flex flex-col gap-2 rounded-lg bg-white p-2 text-black" tabIndex="1">
                                    <div className="flex cursor-pointer items-center justify-between">
                                        <span className="flex gap-4 items-center font-bold text-black/70">
                                            <span className="size-[10px] block rounded-full bg-green-700 before:size-[20px] before:bg-green-600/50 before:block before:-translate-x-1/4 before:-translate-y-1/4 before:rounded-full before:relative relative"></span> 
                                            Activités terminées 
                                        </span>
                                        <span className="flex gap-2 font-bold">
                                            186
                                            <ChevronDown className="transition-all duration-500 group-focus:-rotate-180"/>
                                        </span>
                                    </div>
                                    <div className="invisible h-auto px-4 max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                        <p className="py-2 border-b-[1px] border-black/20">Tache 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col p-2 my-8 rounded-xl">
                    <h3 className="my-8 font-bold text-black/70 text-2xl">Point Financier</h3>
                    <div className="flex gap-2 overflow-x-scroll px-2">
                        <div className="min-w-[200px] size-[200px] rounded-3xl flex flex-col justify-start gap-4 bg-blue-400/50 p-4">
                            <span className="rounded-full bg-blue-700 size-10 flex justify-center items-center p-[2px]">
                                <BarChartBig className="size-[25px] text-white " />
                            </span>
                            <span className="font-bold text-2xl text-blue-950">800.000 FCFA</span>
                            <p className="font-semibold text-black/80">Budget</p>
                            {/* <p className="text-xs text-blue-700 font-bold">Depuis 3 semaines</p> */}
                        </div>
                        <div className="min-w-[200px] size-[200px] rounded-3xl flex flex-col justify-start gap-4 bg-green-400/50 p-4">
                            <span className="rounded-full bg-green-700 size-10 flex justify-center items-center p-[2px]">
                                <BarChartBig className="size-[25px] text-white " />
                            </span>
                            <span className="font-bold text-2xl text-blue-950">560.000 FCFA</span>
                            <p className="font-semibold text-black/80">Recettes</p>
                            <p className="text-xs text-blue-700 font-bold">Depuis 3 semaines</p>
                        </div>
                        <div className="min-w-[200px] size-[200px] rounded-3xl flex flex-col justify-start gap-4 bg-pink-400/50 p-4">
                            <span className="rounded-full bg-pink-700 size-10 flex justify-center items-center p-[2px]">
                                <BarChartBig className="size-[25px] text-white " />
                            </span>
                            <span className="font-bold text-2xl text-blue-950">250.000 FCFA</span>
                            <p className="font-semibold text-black/80">Dépenses</p>
                            <p className="text-xs text-blue-700 font-bold">Depuis 10 jours</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border-[1px] border-green-500/70 rounded-lg p-4 flex flex-col gap-8 mb-8">
                    <h3 className="font-bold text-2xl text-black/70">Données Collectées sur le terrain</h3>
                    <p className="text-sm font-medium text-black/80">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quis, officiis quibusdam inventore
                        amet architecto quaerat porro corrupti fugit cumque hic, voluptatibus, nostrum atque fuga qui vitae
                        obcaecati! Delectus, itaque! Iure voluptate quibusdam culpa iste odit sapiente eveniet omnis explicabo alias.
                        Accusantium similique minima libero fugiat dignissimos, dolore placeat blanditiis labore voluptates vero
                        accusamus dicta magnam porro in nihil dolor a ad vitae iste iure quos corporis ipsum alias.
                    </p>
                    <ul className="text-sm font-medium text-black/80 list-disc list-inside">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos necessitatibus eum voluptatum voluptatibus fugiat provident tempore iure sit a?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos necessitatibus eum voluptatum voluptatibus fugiat provident tempore iure sit a?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos necessitatibus eum voluptatum voluptatibus fugiat provident tempore iure sit a?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos necessitatibus eum voluptatum voluptatibus fugiat provident tempore iure sit a?</li>
                    </ul>
                    <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                        <Download />
                        Télécharger
                    </button>
                </div>

                <div className="flex flex-col w-full border-[1px] border-green-500/70 bg-green-100/50 rounded-lg p-4 gap-4 mb-8">
                    <div className=" flex justify-between items-center">
                        <h3 className="font-bold text-2xl text-black/70">Soumission de Documents</h3>
                        <button className="text-white flex gap-2 p-3 rounded-lg bg-green-700 w-max font-bold">
                            Ajouter un Document
                            <Plus />
                        </button>
                    </div>

                    <div className="flex gap-3 px-3 py-1 overflow-x-scroll">
                        <div className="min-w-[350px] max-w-[350px] p-2 border-[1px] flex flex-col gap-2 border-green-500/70 rounded-lg bg-white">
                            <div className="w-full flex items-center gap-4">
                                <div className="size-[40px] rounded-full flex justify-center items-center p-1 overflow-hidden">
                                    <p className="font-bold text-2xl text-white w-full h-full bg-blue-500 flex justify-center items-center rounded-full">P</p>
                                    {/* <img src="/public/vite.svg" alt="" className=" object-contain"/> */}
                                </div>
                                <p className="font-bold text-lg">Rabelais KPETCHEKOU</p>
                            </div>
                            <p className="text-sm font-medium text-black/80">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur modi velit quos cupiditate
                                dignissimos dolorem inventore accusamus non explicabo, reprehenderit.
                            </p>
                            <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                                <Download />
                                Télécharger
                            </button>
                        </div>
                        <div className="min-w-[350px] max-w-[350px] p-2 border-[1px] flex flex-col gap-2 border-green-500/70 rounded-lg bg-white">
                            <div className="w-full flex items-center gap-4">
                                <div className="size-[40px] rounded-full flex justify-center items-center p-1 overflow-hidden">
                                    {/* <p className="font-bold text-2xl text-white w-full h-full bg-blue-500 flex justify-center items-center rounded-full">P</p> */}
                                    <img src="/public/vite.svg" alt="" className=" object-contain" />
                                </div>
                                <p className="font-bold text-lg">Rabelais KPETCHEKOU</p>
                            </div>
                            <p className="text-sm font-medium text-black/80">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur modi velit quos cupiditate
                                dignissimos dolorem inventore accusamus non explicabo, reprehenderit.
                            </p>
                            <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                                <Download />
                                Télécharger
                            </button>
                        </div>
                        <div className="min-w-[350px] max-w-[350px] p-2 border-[1px] flex flex-col gap-2 border-green-500/70 rounded-lg bg-white">
                            <div className="w-full flex items-center gap-4">
                                <div className="size-[40px] rounded-full flex justify-center items-center p-1 overflow-hidden">
                                    <p className="font-bold text-2xl text-white w-full h-full bg-blue-500 flex justify-center items-center rounded-full">P</p>
                                    {/* <img src="/public/vite.svg" alt="" className=" object-contain"/> */}
                                </div>
                                <p className="font-bold text-lg">Rabelais KPETCHEKOU</p>
                            </div>
                            <p className="text-sm font-medium text-black/80">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur modi velit quos cupiditate
                                dignissimos dolorem inventore accusamus non explicabo, reprehenderit.
                            </p>
                            <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                                <Download />
                                Télécharger
                            </button>
                        </div>
                        <div className="min-w-[350px] max-w-[350px] p-2 border-[1px] flex flex-col gap-2 border-green-500/70 rounded-lg bg-white">
                            <div className="w-full flex items-center gap-4">
                                <div className="size-[40px] rounded-full flex justify-center items-center p-1 overflow-hidden">
                                    {/* <p className="font-bold text-2xl text-white w-full h-full bg-blue-500 flex justify-center items-center rounded-full">P</p> */}
                                    <img src="/public/vite.svg" alt="" className=" object-contain" />
                                </div>
                                <p className="font-bold text-lg">Rabelais KPETCHEKOU</p>
                            </div>
                            <p className="text-sm font-medium text-black/80">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur modi velit quos cupiditate
                                dignissimos dolorem inventore accusamus non explicabo, reprehenderit.
                            </p>
                            <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                                <Download />
                                Télécharger
                            </button>
                        </div>
                        <div className="min-w-[350px] max-w-[350px] p-2 border-[1px] flex flex-col gap-2 border-green-500/70 rounded-lg bg-white">
                            <div className="w-full flex items-center gap-4">
                                <div className="size-[40px] rounded-full flex justify-center items-center p-1 overflow-hidden">
                                    <p className="font-bold text-2xl text-white w-full h-full bg-blue-500 flex justify-center items-center rounded-full">P</p>
                                    {/* <img src="/public/vite.svg" alt="" className=" object-contain"/> */}
                                </div>
                                <p className="font-bold text-lg">Rabelais KPETCHEKOU</p>
                            </div>
                            <p className="text-sm font-medium text-black/80">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur modi velit quos cupiditate
                                dignissimos dolorem inventore accusamus non explicabo, reprehenderit.
                            </p>
                            <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                                <Download />
                                Télécharger
                            </button>
                        </div>
                        <div className="min-w-[350px] max-w-[350px] p-2 border-[1px] flex flex-col gap-2 border-green-500/70 rounded-lg bg-white">
                            <div className="w-full flex items-center gap-4">
                                <div className="size-[40px] rounded-full flex justify-center items-center p-1 overflow-hidden">
                                    {/* <p className="font-bold text-2xl text-white w-full h-full bg-blue-500 flex justify-center items-center rounded-full">P</p> */}
                                    <img src="/public/vite.svg" alt="" className=" object-contain" />
                                </div>
                                <p className="font-bold text-lg">Rabelais KPETCHEKOU</p>
                            </div>
                            <p className="text-sm font-medium text-black/80">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur modi velit quos cupiditate
                                dignissimos dolorem inventore accusamus non explicabo, reprehenderit.
                            </p>
                            <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                                <Download />
                                Télécharger
                            </button>
                        </div>
                        <div className="min-w-[350px] max-w-[350px] p-2 border-[1px] flex flex-col gap-2 border-green-500/70 rounded-lg bg-white">
                            <div className="w-full flex items-center gap-4">
                                <div className="size-[40px] rounded-full flex justify-center items-center p-1 overflow-hidden">
                                    <p className="font-bold text-2xl text-white w-full h-full bg-blue-500 flex justify-center items-center rounded-full">P</p>
                                    {/* <img src="/public/vite.svg" alt="" className=" object-contain"/> */}
                                </div>
                                <p className="font-bold text-lg">Rabelais KPETCHEKOU</p>
                            </div>
                            <p className="text-sm font-medium text-black/80">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur modi velit quos cupiditate
                                dignissimos dolorem inventore accusamus non explicabo, reprehenderit.
                            </p>
                            <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                                <Download />
                                Télécharger
                            </button>
                        </div>
                        <div className="min-w-[350px] max-w-[350px] p-2 border-[1px] flex flex-col gap-2 border-green-500/70 rounded-lg bg-white">
                            <div className="w-full flex items-center gap-4">
                                <div className="size-[40px] rounded-full flex justify-center items-center p-1 overflow-hidden">
                                    {/* <p className="font-bold text-2xl text-white w-full h-full bg-blue-500 flex justify-center items-center rounded-full">P</p> */}
                                    <img src="/public/vite.svg" alt="" className=" object-contain" />
                                </div>
                                <p className="font-bold text-lg">Rabelais KPETCHEKOU</p>
                            </div>
                            <p className="text-sm font-medium text-black/80">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur modi velit quos cupiditate
                                dignissimos dolorem inventore accusamus non explicabo, reprehenderit.
                            </p>
                            <button className="flex gap-2 p-3 rounded-lg border-[1px] border-green-500/70 w-max self-end text-black/70 font-bold">
                                <Download />
                                Télécharger
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleProjectPage