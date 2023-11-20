import { useDispatch, useSelector } from "react-redux"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


function DiagramMain() {
    const CalloriasAll = useSelector(state => state.CalloriasAll.CalloriasAll)
    const CalloriasSum = useSelector(state => state.CalloriasSum.CalloriasSum)
    const CircalValue = CalloriasSum.sumKcal * 100 / CalloriasAll
    

    return (
        <div className="canvas">
            <div className="circleProgressbar">
                <CircularProgressbar 
                value={CircalValue}
                circleRatio={0.70}
                strokeWidth={12}
                styles={{ root:{transform:'rotate(0.66turn)'},path:{stroke: "rgb(138, 234, 146)"}}}
                />
            </div>
            <div className="circleProgressbar__text">
                <p>{CalloriasSum.sumKcal} / {Math.round(CalloriasAll)}</p>
            </div>
        </div>
    )
  }
  
  export default DiagramMain;