import React from 'react'
import { Table, Divider, Form, Row, Col, Select, Input, Button, Card } from 'antd'
import CreateForm from './CreateForm'

const FormItem = Form.Item
const { Option } = Select

export interface IUserRecord {
  username: string
  sex: string
  phone: number
  birthday: string
}

interface IUserProps {
  form: any
  data: IUserRecord[]
  tableLoading: false,
  createLoading: false,
  createVisible: boolean,
  query(payload: any): void,
  add(payload: any): any,
  handleCreateVisible(payload: boolean): void
}

interface IUserStates {
  pageNum: number
  pageSize: number,
  updateModalVisible: boolean
}

class Users extends React.Component<IUserProps, IUserStates> {

  state: IUserStates = {
    pageNum: 1,
    pageSize: 10,
    updateModalVisible: false,
  }

  public componentDidMount() {
    this.props.query({
      pageNum: this.state.pageNum,
      pageSize: this.state.pageSize
    })
  }

  // 查询表格
  public searchTable = (e: React.FormEvent) => {
    e.preventDefault()
    this.props.query({
      pageNum: this.state.pageNum,
      pageSize: this.state.pageSize
    })
  }

  // 表格参数变化
  public onTableChange = (selectedRowKeys: any, selectedRows: any[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  }

  public updatePre = (record: any) => {

  }

  public deletePre = (record: any) => {

  }

  public handleAdd = (fields: any) => {
    this.props.add(fields)
  }

  public handleCreateModalVisible = (visible: boolean) => {
    this.props.handleCreateVisible(visible)
  }

  public renderForm = () => {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <Form onSubmit={this.searchTable} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="用户名">
              {getFieldDecorator('username')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="使用状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">关闭</Option>
                  <Option value="1">运行中</Option>
                </Select>,
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className="submitButtons">
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }}>
                重置
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    )
  }

  public render() {
    const { data, tableLoading, createLoading, createVisible } = this.props

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

    const createParentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleCreateModalVisible,
    }

    return (
      <>
        <Card bordered={false}>
          <div className="tableList">
            <div className="tableListForm">{this.renderForm()}</div>
            <div className="tableListOperator">
              <Button icon="plus" type="primary" onClick={() => this.handleCreateModalVisible(true)}>
                新建
              </Button>
            </div>
            <Table loading={tableLoading} rowSelection={rowSelection} columns={columns} dataSource={data} />
          </div>
        </Card>
        <CreateForm {...createParentMethods} modalVisible={createVisible} loading={createLoading} />
      </>
    )
  }
}

export default Form.create()(Users)