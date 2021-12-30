import {Content} from 'antd/es/layout/layout'
import {Row, Col} from 'antd'
import ProcessCollapse from '../process-collapse/process-collapse'
import Pipeline from '../pipeline/pipeline'

const MainContent = () => (
    <Content style={{padding: "16px 0"}}>
        <Row>
            <Col offset={1} xs={22} sm={22} md={22} lg={14} xl={14} xxl={14}>
                <h1>Leads</h1>
                <ProcessCollapse />
            </Col>
            <Col span={7} offset={1} xs={10} sm={10} md={10} lg={7} xl={7} xxl={7}>
                <h1>Pipeline</h1>
                <Pipeline />
            </Col>
        </Row>
    </Content>
)

export default MainContent