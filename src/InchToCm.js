import React, { Component } from 'react';
import ValueInput from './ValueInput';
class InchToCm extends Component {
  constructor(props){
    super(props)
    this.state={ inch:0, cm:0 }
  }
  // asd
  render() {
    return (
      <div>
        <ValueInput title='inch' value={this.state.inch}
          onChange={(e) =>{
            this.setState({
              inch: e.value,
              cm: e.value * 2.54
            })
          }} />
        <ValueInput title='cm' value={this.state.cm}
          onChange={(e) =>{
            this.setState({
              inch: e.value / 2.54,
              cm : e.value
            })
          }} />
      </div>
    );
  }
}

export default InchToCm;