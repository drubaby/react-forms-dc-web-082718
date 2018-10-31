import React from 'react'

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }


  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        </form>
    )
  }





}

export default ControlledInput
