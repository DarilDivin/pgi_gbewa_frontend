import { FolderMinus, LineChart, Plus, Redo2, Undo2, UsersRound } from "lucide-react";
import Layout from "../common/Layout";
import Card from "../ui/Card";
import ProgramCard from "../ui/ProgramCard";

const DashboardPrograms = () => {

  return (
    <Layout>
      {/* <div className="w-full flex flex-1 flex-wrap justify-between items-center px-12 py-8 gap-5 overflow-scroll"> */}
      <div className="w-full grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b pb-10 px-12 justify-between">
        <Card title={'Programmes'} number={'7.558'} link={'/login'} active>
          <UsersRound size={30} strokeWidth={3} className={"stroke-slate-50"}/>
        </Card>
        <Card title={'Projet'} number={'7.558'} link={'/login'}>
          <FolderMinus size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"}/>
        </Card>
        <Card title={'Axes Stratégiques'} number={'7.558'} link={'/login'}>
          <UsersRound size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"}/>
        </Card>
        <Card title={'Projet'} number={'7.558'} link={'/login'}>
          <UsersRound size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"}/>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-12 my-8 flex-wrap gap-4">
        <h3 className="font-bold text-3xl">Programmes</h3>
        <div className="flex flex-1 max-w-3xl gap-4 justify-between flex-wrap">
          <select name="" id="" className="min-w-60 max-w-64 xl:max-w-80 border-[1px] h-10 border-slate-200 rounded px-4 overflow-clip">
            <option value="">Programme</option>
            <option value="">Prog</option>
            <option value="">Prog</option>
            <option value="">Prog</option>
            <option value="">Prog</option>
          </select>
          <div className="flex items-center justify-evenly gap-4 text-slate-900/70">
            <Undo2 className="cursor-pointer hover:text-slate-900"/>
            <Redo2 className="cursor-pointer hover:text-slate-900"/>
            <LineChart className="cursor-pointer hover:text-slate-900"/>
          </div>
          <button className="flex px-4 py-2 justify-center items-center bg-green-700 text-white rounded-md font-bold gap-4">
            Nouveau Programme
            <Plus />
          </button>
        </div>
      </div>

      {/* <div className="flex justify-center px-12 w-full"> */}

      {/* For Rabelais */}
      {/* grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4 border-b pb-10 */}

      {/* Mine */}
      {/* flex flex-wrap py-8 px-12 gap-[30px] overflow-y-scroll w-auto */}
        <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4 border-b pb-10 px-12">
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"17/20"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"4/10"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"35/78"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"17/180"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"9/10"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"11/13"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"2/15"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"54/180"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"3/5"} date={"04 Mai 2024"}/>
          <ProgramCard title={"Présentation de conception"} subtitle={"Marketing de vente"} progres={"7/10"} date={"04 Mai 2024"}/>
        
        </div>
      {/* </div> */}
    </Layout>
  )
}

export default DashboardPrograms