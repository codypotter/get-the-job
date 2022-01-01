import './pipeline.scss'
import PipelineStep from '../pipeline-step/pipeline-step'
import {useSelector} from 'react-redux'

const Pipeline = () => {
    const {ready, waiting, inProcess, offer} = useSelector((state) => state.stages)
    return (
        <div className="pipeline">
            <PipelineStep sizing="100%" title={ready.title} />
            <PipelineStep sizing="90%" title={waiting.title} />
            <PipelineStep sizing="80%" title={inProcess.title} />
            <PipelineStep sizing="70%" title={offer.title} />
        </div>
    )
}

export default Pipeline