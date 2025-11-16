import './CSS/ToDoItems.css'
import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import cross from './assets/cross.png'


const ToDoItems = ({no,display,text}) => {
  return (
    <div className='todo-items'>
      <div className="todoitem-container">
        <img src={not_tick} alt="" />
        <img src={tick} alt="" />

        <div className="todo-items-text">{text}</div>
      </div>
      <img src={cross} alt="" />
    </div>
  )
}

export default ToDoItems
