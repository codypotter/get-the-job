import './pipeline.scss'
import {ReactComponent as PipelineStep} from '../../assets/pipeline-step.svg'

const Pipeline = () => (
    <div className="pipeline">
        <PipelineStep className="step" style={{width: "100%"}}/>
        <PipelineStep className="step" style={{width: "90%"}}/>
        <PipelineStep className="step" style={{width: "80%"}}/>
        <PipelineStep className="step" style={{width: "70%"}}/>
    </div>
)

export default Pipeline