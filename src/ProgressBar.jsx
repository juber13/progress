import { useEffect, useState } from "react"

const ProgressBar = ({value}) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100 , Math.max(value , 0)));
   },[value])

  //  console.log(percent)
  return (
    <div className="progress">
        <span>{percent.toFixed()} %</span>
        <div style={{width :`${percent}%`}}/>
    </div>
  )
}

export default ProgressBar