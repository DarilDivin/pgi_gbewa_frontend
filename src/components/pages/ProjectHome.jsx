import Layout from "../common/Layout"
import { ChevronRight } from 'lucide-react'
import { HomeCard as Card }from '../ui/HomeCard'

const ProjectHome = () => {
    return (
        <Layout>
            <div className="mt-20 mb-12 flex justify-between md:w-auto sm:w-96 px-12 lg:pl-28">
                <h2 className="text-2xl font-bold block"> Projets & Programmes</h2>
                <p className="block">
                    <ChevronRight color="green" size={30} />
                </p>
            </div>
            <div className="border grid gap-x-32 gap-y-16 w-full mb-24 auto-rows-auto justify-between xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 px-12 lg:pl-28">
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Programmes</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Projets</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
                <Card>
                    <div>
                        <h3 className="mb-4 font-bold">Suivi et Evaluation</h3>
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
                        <h3 className="mb-4 font-bold">Plaintes et Suggestions</h3>
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
                        <h3 className="mb-4 font-bold">Paramètres</h3>
                        <p className="mb-4">Descriptions</p>
                    </div>
                </Card>
            </div>
        </Layout>
    )
}

export default ProjectHome