import './pipeline.scss'
import PipelineStep from '../pipeline-step/pipeline-step'

const Pipeline = () => (
    <div className="pipeline">
        <PipelineStep sizing="100%"/>
        <PipelineStep sizing="90%"/>
        <PipelineStep sizing="80%"/>
        <PipelineStep sizing="70%"/>
    </div>
)

export default Pipeline