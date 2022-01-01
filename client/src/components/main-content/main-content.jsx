import {Content} from 'antd/es/layout/layout'
import {Row, Col} from 'antd'
import ProcessCollapse from '../process-collapse/process-collapse'
import Pipeline from '../pipeline/pipeline'

const MainContent = () => {
    return (
        <Content style={{padding: "16px 0"}}>
            <Row>
                <Col offset={1} xs={22} sm={22} md={22} lg={16} xl={16} xxl={16}>
                    <h1>Leads</h1>
                    <ProcessCollapse />
                </Col>
                <Col span={7} offset={1} xs={22} sm={22} md={22} lg={5} xl={5} xxl={5}>
                    <h1>Pipeline</h1>
                    <Pipeline />
                </Col>
            </Row>
        </Content>
    )

}

export default MainContent