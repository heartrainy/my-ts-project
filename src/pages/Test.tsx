import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

export interface IStore {
  num: number
}

export interface IStore2 {
  num2: number
}

interface IProps {
  test: IStore,
  test2: IStore2,
  addNum(): void,
  decreaseNum(): void,
  addNum2(): void,
  decreaseNum2(): void,
  addNumSaga(): void
}

interface IStates {
}

class Test extends React.Component<IProps, IStates> {
  public state: IStates = {
  }

  public addNum = () => {
    this.props.addNum()
  }

  public decreaseNum = () => {
    this.props.decreaseNum()
  }

  public addNum2 = () => {
    this.props.addNum2()
  }

  public decreaseNum2 = () => {
    this.props.decreaseNum2()
  }

  public addNumSaga = () => {
    this.props.addNumSaga()
  }

  public render() {
    const { num } = this.props.test
    const { num2 } = this.props.test2

    return (
      <>
        <div>
          <Button onClick={this.addNum}>添加</Button>
          <Button onClick={this.decreaseNum}>减少</Button>
          <Button onClick={this.addNumSaga}>添加Saga</Button>
        </div>
        <div>{num}</div>
        <div>
          <Button onClick={this.addNum2}>添加</Button>
          <Button onClick={this.decreaseNum2}>减少</Button>
        </div>
        <div>{num2}</div>
      </>
    )
  }
}

export default Test