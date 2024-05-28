import { FolderMinus, LineChart, Plus, Redo2, Undo2, UsersRound } from "lucide-react"
import Layout from "../common/Layout"
import Card from "../ui/Card"
import ProgressBar from "../ui/ProgressBar"
import { useState } from "react"

const DashboardProjects = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Layout>
        <div className="w-full grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-b pb-10 px-12 justify-between">
          <Card title={'Programmes'} number={'7.558'} link={'/login'} active>
            <UsersRound size={30} strokeWidth={3} className={"stroke-slate-50"} />
          </Card>
          <Card title={'Projet'} number={'7.558'} link={'/login'}>
            <FolderMinus size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"} />
          </Card>
          <Card title={'Axes Stratégiques'} number={'7.558'} link={'/login'}>
            <UsersRound size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"} />
          </Card>
          <Card title={'Projet'} number={'7.558'} link={'/login'}>
            <UsersRound size={30} strokeWidth={3} className={" stroke-green-700 group-hover:stroke-slate-50"} />
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row justify-between px-12 my-8 flex-wrap gap-4">
          <h3 className="font-bold text-3xl">Projets</h3>
          <div className="flex flex-1 max-w-3xl gap-4 justify-between flex-wrap">
            <select name="" id="" className="min-w-60 max-w-64 xl:max-w-80 border-[1px] h-10 border-slate-200 rounded px-4 overflow-clip">
              <option value="">Projets</option>
              <option value="">Prog</option>
              <option value="">Prog</option>
              <option value="">Prog</option>
              <option value="">Prog</option>
            </select>
            <div className="flex items-center justify-evenly gap-4 text-slate-900/70">
              <Undo2 className="cursor-pointer hover:text-slate-900" />
              <Redo2 className="cursor-pointer hover:text-slate-900" />
              <LineChart className="cursor-pointer hover:text-slate-900" />
            </div>
            <button className="flex px-4 py-2 justify-center items-center bg-green-700 text-white rounded-md font-bold gap-4" onClick={() => {setShowModal(true)}}>
              Nouveau Projet
              <Plus />
            </button>
          </div>
        </div>

        <div className="flex w-full px-12 ">
          <div className="w-full border-[1px] border-slate-200 max-h-[90vh] overflow-y-scroll rounded-xl mb-8">
            <table className="table-auto w-full min-w-full divide-y divide-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Projet</th>
                  <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Bénéficiaire</th>
                  <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Status</th>
                  <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Membres</th>
                  <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500">Axes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
                <tr>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap max-w-[500px] overflow-clip text-ellipsis">Nom du projet</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Nextmux</td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap flex flex-col gap-1">
                    <p className="text-green-700">75%</p>
                    <ProgressBar progressWidth={75} />
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center -space-x-4 max-w-[300px]">
                      <img
                        alt="user 1"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                      <img
                        alt="user 2"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        className="relative inline-block h-8 w-8 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                      />
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">Axes 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
      {/* {showModal &&  */}
        <div className={`absolute w-screen h-screen top-0 z-20 flex justify-center items-center transition-[visibility] delay-100 ${!showModal? 'invisible' : 'visible'}`}>
          <div className={`w-screen h-screen bg-black/50 transition-[opacity] duration-700 ${showModal? 'opacity-100': 'opacity-0'}`} onClick={() => {setShowModal(false)}}></div>
          <div className={`absolute bg-white p-2 flex flex-col rounded-lg max-h-[680px] overflow-y-scroll transition-[transform] duration-700 ${showModal? 'translate-y-0 opacity-100': 'translate-y-16 opacity-0'}`}>
            <h3 className="mb-6 text-xl font-bold text-black/80">Nouveau Projet</h3>
            <form action="" className="w-[200px] sm:w-[400px] p-2">
              <div className="w-full flex flex-col gap-1 mb-4">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" className="h-[35px] px-2 py-1 border-[1px] border-black/50 rounded bg-white shadow-lg" />
              </div>
              <div className="w-full flex flex-col gap-1 mb-4">
                <label htmlFor="nom">Bénéficiaire</label>
                <input type="text" id="nom" className="h-[35px] px-2 py-1 border-[1px] border-black/50 rounded bg-white shadow-lg" />
              </div>
              <div className="w-full flex flex-col gap-1 mb-4">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" className="h-[35px] px-2 py-1 border-[1px] border-black/50 rounded bg-white shadow-lg" />
              </div>
              <div className="w-full flex flex-col gap-1 mb-4">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" className="h-[35px] px-2 py-1 border-[1px] border-black/50 rounded bg-white shadow-lg" />
              </div>
              <div className="w-full flex flex-col gap-1 mb-4">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" className="h-[35px] px-2 py-1 border-[1px] border-black/50 rounded bg-white shadow-lg" />
              </div>
              <div className="flex gap-1">
                <div className="w-1/2 flex flex-col gap-1 mb-4">
                  <label htmlFor="nom">Nom</label>
                  <input type="text" id="nom" className="h-[35px] px-2 py-1 border-[1px] border-black/50 rounded bg-white shadow-lg" />
                </div>
                <div className="w-1/2 flex flex-col gap-1 mb-4">
                  <label htmlFor="nom">Nom</label>
                  <input type="text" id="nom" className="h-[35px] px-2 py-1 border-[1px] border-black/50 rounded bg-white shadow-lg" />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="flex px-4 py-2 justify-center items-center bg-green-700 text-white rounded-md font-bold gap-4">
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      {/* } */}
    </div>
  )
}

export default DashboardProjects