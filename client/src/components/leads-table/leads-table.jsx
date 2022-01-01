import {Table} from 'antd'

const columns = [
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
    },
];

const LeadsTable = ({leads}) => {
    let dataSource = leads.map((lead) => ({
        key: lead.url,
        company: lead.company,
        position: lead.position,
        url: lead.url
    }))
    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            showHeader={false}
            pagination={false}
        />
    )
}

export default LeadsTable