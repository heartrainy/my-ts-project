import React, { Component } from 'react';
interface Props {

}
interface State {
  list: string,
}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      list: 'hello world!!!'
    }
  }
  render() {
    return (
      <div>
        {this.state.list}
      </div>
    );
  }
}
export default App;