import {Collapse} from 'antd'
import LeadsTable from '../leads-table/leads-table'

import './process-collapse.scss'

const {Panel} = Collapse

const ProcessCollapse = () => (
    <Collapse defaultActiveKey={['0']}>
        <Panel header='Ready to apply'>
            <LeadsTable />
        </Panel>
        <Panel header='Waiting to hear back'>
            <LeadsTable />
        </Panel>
        <Panel header='In process'>
            <LeadsTable />
        </Panel>
        <Panel header='Job offer'>
            <LeadsTable />
        </Panel>
    </Collapse>
)

export default ProcessCollapse