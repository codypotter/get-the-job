import {Content} from 'antd/es/layout/layout'
import {Row, Col} from 'antd'
import ProcessCollapse from '../process-collapse/process-collapse'

const MainContent = () => (
    <Content style={{padding: "16px 0"}}>
        <Row >
            <Col span={13} offset={2}>
                <h1>Leads</h1>
                <ProcessCollapse />
            </Col>
            <Col span={6} offset={1}>
                <h1>Pipeline</h1>
            </Col>
        </Row>
    </Content>
)

export default MainContent