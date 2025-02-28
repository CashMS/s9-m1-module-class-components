import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.propsArray.map((todo) => {
          const { id, name, completed, visible } = todo;
          if (this.props.showCompleted || !completed) {
            return <Todo 
            key={id} 
            propsTodo={name} 
            propsComp={this.props.propsComp}
            propsChecked={completed}
            propsId={id}
            propsVisible={visible}
            />
          }
            
        })}
      </div>
    )
  }
}
