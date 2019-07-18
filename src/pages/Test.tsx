import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

interface IProps {
  num: number
}

interface IStates {
}

class Test extends React.Component<IProps, IStates> {
  public state: IStates = {
  }

  public addNum(): void {
    console.log(this.props.dispatch)
  }

  public render() {
    return (
      <>
        <Button onClick={this.addNum}>添加</Button>
        <Button>减少</Button>
        <div>{this.props.num}</div>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  num: state.num
})

const TestMap = connect(
  mapStateToProps
)(Test)

export default TestMap