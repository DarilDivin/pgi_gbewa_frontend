/* eslint-disable react/prop-types */

const ProgressBar = ({progressWidth}) => {
    return (
        <div>
            <span
                className={`w-full block relative bg-gray-300 h-[3px] py-[2px] rounded width-${progressWidth} before:bg-green-700 before:px-[2px] before:h-[3px] before:absolute before:rounded before:top-0`}
            ></span>

            {/* <span 
                    className={`w-full block relative bg-gray-300 h-[3px] py-[2px] rounded width-${progressWidth}  before:bg-green-700 before:px-[2px] before:h-[3px] before:absolute before:rounded before:top-0 -z-10`}
                ></span> */}
        </div>
    )
}

export default ProgressBar