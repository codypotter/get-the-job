import {ReactComponent as Cylinder} from '../../assets/pipeline-step.svg'
import './pipeline-step.scss'

/**
 * A container for a step in the pipeline
 * @param sizing - a percentage string to set the size of the funnel svg section
 * @returns {JSX.Element}
 * @constructor
 */
const PipelineStep = ({sizing, title}) => (
    <div className="pipeline-step">
        <Cylinder  width={sizing} height="100%"/>
        <h2 className="pipeline-step-title">{title}</h2>
    </div>
)

export default PipelineStep