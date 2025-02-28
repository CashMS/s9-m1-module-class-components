import React from 'react'
import '../styles/Form.css'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <input 
        className='form-input'
        type='text' 
        placeholder='Type todo'
        onChange={this.props.propsInput} 
        value={this.props.propsValue}
        onKeyDown={this.props.propsEnter}
        />
        <button 
        onClick={this.props.propsSubmit}>
          Submit
          </button>
        <div>
          <button 
          className='completed-btn'
          onClick={this.props.propsHide} >
            {this.props.showCompleted ? 'Hide Completed' : 'Show Completed'}
            </button>
        </div>
      </div>
    )
  }
}
