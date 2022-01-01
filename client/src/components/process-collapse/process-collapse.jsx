import {Collapse} from 'antd'
import LeadsTable from '../leads-table/leads-table'

import './process-collapse.scss'
import {useSelector} from "react-redux";

const {Panel} = Collapse

const ProcessCollapse = () => {
    const {ready, waiting, inProcess, offer} = useSelector((state) => state.stages)

    return (
        <Collapse defaultActiveKey={['0']}>
            <Panel header={ready.title} key={ready.title}>
                <LeadsTable leads={ready.leads} />
            </Panel>
            <Panel header={waiting.title} key={waiting.title}>
                <LeadsTable leads={waiting.leads} />
            </Panel>
            <Panel header={inProcess.title} key={inProcess.title}>
                <LeadsTable leads={inProcess.leads} />
            </Panel>
            <Panel header={offer.title} key={offer.title}>
                <LeadsTable leads={offer.leads} />
            </Panel>
        </Collapse>
    )
}

export default ProcessCollapse