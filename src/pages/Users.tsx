import React from 'react'
import { Table, Divider } from 'antd'

export interface IUserRecord {
  username: string,
  sex: string,
  phone: number,
  birthday: string
}

interface IUserProps {
  data: IUserRecord[]
  query(obj: any): void
}

interface IUserStates {
  pageNum: number,
  pageSize: number,
  data: any[]
}

class Users extends React.Component<IUserProps, IUserStates> {

  state: IUserStates = {
    pageNum: 1,
    pageSize: 10,
    data: [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      }
    ]
  }

  public componentDidMount() {
    this.props.query({
      pageNum: this.state.pageNum,
      pageSize: this.state.pageSize
    })
  }

  public onTableChange = (selectedRowKeys: any, selectedRows: any[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  }

  public updatePre = (record: any) => {

  }

  public deletePre = (record: any) => {

  }

  public render() {
    const { data } = this.props

    // 行选择
    const rowSelection = {
      onChange: this.onTableChange
    }

    // 列属性
    const columns = [
      {
        title: '用户名',
        dataIndex: 'username',
        render: (text: any) => <a href="javascript:;">{text}</a>,
      },
      {
        title: '性别',
        dataIndex: 'sex',
      },
      {
        title: '手机号',
        dataIndex: 'phone',
      },
      {
        title: '出生年月',
        dataIndex: 'birthday',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text: any, record: any) => {
          return (
            <>
              <a onClick={() => this.updatePre(record)}>编辑</a>
              <Divider type="vertical" />
              <a onClick={() => this.deletePre(record)}>删除</a>
            </>
          )
        },
      },
    ]

    return (
      <>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </>
    )
  }
}

export default Users