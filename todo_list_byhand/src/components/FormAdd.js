import React from 'react'
import { Button, Overlay, Tooltip } from 'react-bootstrap'

class FormAdd extends React.Component {
  constructor(...args) {
    super(...args)

    this.input = node => {
      this.input = node
    }

    this.attachRef = target => this.setState({target})
    this.state = {show: false}
  }

  render() {
    const {submitForm} = this.props
    const {show, target} = this.state

    return (
      <form className="form-inline" action="" onSubmit={(e) => {
        e.preventDefault()
        if (this.input.value === '') {
          return
        }

        submitForm(this.input.value)
        this.input.value = ''
      }}>
        <div className="form-group mx-sm-2 mb-2">
          <input
            type="text"
            className="form-control"
            ref={this.input}
            placeholder="Todo"
            title="Tooltip on bottom"
          />
        </div>
        <Button className="btn btn-primary mb-2" variant="primary"><i className="fas fa-plus"></i></Button>

        <Button
          ref={this.attachRef}
          onClick={() => this.setState({show: !show})}
        >
          Click me!
        </Button>
        <Overlay target={target} show={show} placement="right">
          {props => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
            </Tooltip>
          )}
        </Overlay>
      </form>
    )
  }

}

export default FormAdd
