import { Form, Input, Modal, Select, DatePicker, Button  } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import React from 'react'

const FormItem = Form.Item
const { Option } = Select

interface CreateFormProps extends FormComponentProps {
  modalVisible: boolean,
  loading: boolean,
  handleAdd: (fields: {
    username: string,
    sex: number,
    phone: number,
    birthday: string
  }) => void
  handleModalVisible: (visible: boolean) => void
}
const CreateForm: React.FC<CreateFormProps> = props => {
  const { modalVisible, loading, form, handleAdd, handleModalVisible } = props
  const formItemLayout: any = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 15 },
    },
  }
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) { return }
      const postParams = Object.assign({}, fieldsValue)
      postParams.birthday = fieldsValue.birthday.format('YYYY-MM-DD')
      handleAdd(postParams)
    })
  }

  return (
    <Modal
      destroyOnClose
      maskClosable={false}
      title="新建"
      visible={modalVisible}
      onCancel={() => handleModalVisible(false)}
      footer={[
        <Button key="back" onClick={() => handleModalVisible(false)}>
          取消
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={okHandle}>
          确定
        </Button>,
      ]}
    >
      <FormItem {...formItemLayout} label="用户名">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: '请输入用户名！'}],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="性别">
        {form.getFieldDecorator('sex', {
          rules: [{ required: true, message: '请选择性别！'}],
        })(
          <Select placeholder="请选择" style={{width: '100%'}}>
            <Option value="1">男</Option>
            <Option value="0">女</Option>
          </Select>
        )}
      </FormItem>
      <FormItem {...formItemLayout} label="手机号">
        {form.getFieldDecorator('phone', {
          rules: [{ required: true, message: '请输入手机号！'}],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem {...formItemLayout} label="出生日期">
        {form.getFieldDecorator('birthday', {
          rules: [{ required: true, message: '请选择出生日期！'}],
        })(<DatePicker placeholder="请输入" style={{width: '100%'}} />)}
      </FormItem>
    </Modal>
  )
}

export default Form.create<CreateFormProps>()(CreateForm)