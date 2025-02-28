import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <li
        onClick={() => this.props.propsComp(this.props.propsId)}>
          {this.props.propsTodo} {this.props.propsChecked && '✓'}
          </li>
      </div>
    )
  }
}
