import {Content} from 'antd/es/layout/layout'
import {Row, Col} from 'antd'

const MainContent = () => (
    <Content>
        <Row >
            <Col span={13} offset={2}>
                Collapse
            </Col>
            <Col span={6} offset={1}>
                funnel goes here
            </Col>
        </Row>
    </Content>
)

export default MainContent