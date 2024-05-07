import { Ellipsis, ListChecks } from "lucide-react"
import {decimalToFraction, fractionToPercentage} from "./fraction"
import ProgressBar from "./ProgressBar"

// eslint-disable-next-line react/prop-types
const ProgramCard = ({ title, subtitle, progres, date }) => {

    const progresEvaluation = eval(progres)
    const progressWidth = fractionToPercentage(decimalToFraction(progresEvaluation)).toString()
    // const progressWidthVar = (progresEvaluation * 100) + '%'
    // console.log(progressWidth, typeof(progressWidth))
    // document.documentElement.style.setProperty('--progress-width', progressWidthVar);

    return (
        <div className="shadow-xl rounded p-4 flex flex-col cursor-pointer mb-8">
            <div className="mb-6">
                <span className=" flex justify-between w-full">
                    <h3 className="font-bold">{title}</h3>
                    <Ellipsis className=" cursor-pointer" />
                </span>
                <p className=" text-xs font-normal text-black/70">{subtitle}</p>
            </div>
            <div className="mb-6">
                <div className="flex justify-between items-center text-sm mb-1">
                    <span className="flex gap-2 justify-start items-center">
                        <ListChecks size={14} />
                        <p>Progrès</p>
                    </span>
                    <span>
                        {progres}
                    </span>
                </div>
                <ProgressBar progressWidth={progressWidth} />
            </div>
            <div>
                <p className="border-[1px] w-28 cursor-pointer px-2 rounded">{date}</p>
            </div>
        </div>
    )
}

export default ProgramCard