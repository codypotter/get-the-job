import {Content} from 'antd/es/layout/layout'
import {Form, Input, Row, Col, Button, Modal} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import ProcessCollapse from '../process-collapse/process-collapse'
import Pipeline from '../pipeline/pipeline'
import './main-content.scss'
import {useState} from "react";

const MainContent = () => {
    useState()
    const handleOk = () => {}
    const handleCancel = () => {}
    const confirmLoading = () => {}
    const onFinish = () => {}
    const onFinishFailed = () => {}
    return (
        <Content style={{padding: "16px 0"}}>
            <Row>
                <Col offset={1} span={13}>
                    <h1>Leads</h1>
                    <ProcessCollapse />
                </Col>
                <Col className="col-pipeline" offset={1} span={7}>
                    <h1>Pipeline</h1>
                    <Pipeline />
                </Col>
            </Row>
            <Button className="fab" size="large" type="primary" shape="circle" icon={<PlusOutlined />} onClick={() => console.log("turdburglar")} />
            <Modal
                title="New Lead?"
                visible={true}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                >
                <Form
                    name="newLead"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Company"
                        name="company"
                        rules={[{ required: true, message: 'What company is it?' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Position"
                        name="position"
                        rules={[{ required: true, message: 'What is the position?' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="URL"
                        name="url"
                        rules={[{ required: true, message: 'Paste the link to the posting.' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>

            </Modal>
        </Content>
    )

}

export default MainContent