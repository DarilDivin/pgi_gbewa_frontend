import Layout from "../common/Layout.jsx";
import SuggestionSingleCard from "../ui/SuggestionSingleCard.jsx";
import PlainteSugCardHead from "../ui/PlainteSugCardHead.jsx";
import Card from "../ui/Card.jsx";
import { FolderMinus, SquareGanttChart, UsersRound } from "lucide-react";

export default function Suggestions () {
    return(
        <Layout>
            <div className="w-full grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10 px-12 justify-between">
                <Card title={'Employées'} number={'7.558'} link={'/login'} active>
                    <UsersRound size={30} strokeWidth={3} className={"stroke-slate-50"}/>
                </Card>
                <Card title={'Rapports'} number={'6.187'} link={'/login'}>
                    <FolderMinus size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"}/>
                </Card>
                <Card title={'Présence'} number={'1.627'} link={'/login'}>
                    <UsersRound size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"}/>
                </Card>
                <Card title={'Activités'} number={'3.275'} link={'/login'}>
                    <SquareGanttChart size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"}/>
                </Card>
            </div>
            <PlainteSugCardHead>
                Rapport
            </PlainteSugCardHead>
            <div className="mb-8 pl-8 lg:pl-16 pr-8 lg:pr-12 h-auto">
                <div className="font-bold text-gray-600 text-2xl">
                    Aujourd&apos;hui
                </div>
                <SuggestionSingleCard
                        picture={false}
                        src={""}
                        show={false}
                    />
            </div>
        </Layout>
    )
}