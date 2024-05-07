import { ChevronRight } from "lucide-react"
import Layout from "../common/Layout"
import { HomeCard as Card }from '../ui/HomeCard'


const AdministrationHome = () => {
    return (
        <Layout>
            <div className="mt-20 mb-12 flex justify-between px-12 lg:pl-28">
                <h2 className="text-2xl font-bold block"> Administration </h2>
                <p className="block">
                    <ChevronRight color="green" size={30} />
                </p>
            </div>
            <div className="border grid gap-0 md:gap-4 lg:gap-8 xl:gap-16 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full mb-24 justify-between px-12 lg:pl-28">
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Ressources Humaines</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Finances</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Plaintes et Suggestions</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Perfomances</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Statistiques</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Documentations</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Paramètres</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}

export default AdministrationHome