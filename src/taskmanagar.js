import task from './task.png';
import './App.css';
import {DragDropContext , Droppable , Draggable} from 'react-beautiful-dnd'
import { useState ,useEffect } from 'react'
import user1 from './jimmy.jpeg'


function TaskManager() {

  const [tasks, settasks] = useState([
      {
          "id":1,
          "dragid":"1",
          "color":"yellow",
          "checked":false,
          "title":"Wash the Car",
          "desc":"written by bob",
          "taskType":"REJECTED"
      },
      {
        "id":2,
        "dragid":"2",
        "color":"grey",
        "checked":false,
        "title":"Wash the Car",
        "desc":"written by bob",
        "taskType":"PLANNED"
      },
      {
        "id":3,
        "dragid":"3",
        "color":"purple",
        "checked":false,
        "title":"Wash the Car",
        "desc":"written by bob",
        "taskType":"REJECTED"
      },
      {
        "id":4,
        "dragid":"4",
        "color":"Blue",
        "checked":false,
        "title":"Wash the Car",
        "desc":"written by bob",
        "taskType":"PLANNED"
      },
      {
        "id":5,
        "dragid":"5",
        "color":"yellow",
        "checked":false,
        "title":"Wash the Car",
        "desc":"written by bob",
        "taskType":"LATEST TASK"
      },
      {
        "id":6,
        "dragid":"6",
        "color":"Blue",
        "checked":false,
        "title":"Wash the Car",
        "desc":"written by bob",
        "taskType":"REJECTED"
      },
      {
        "id":7,
        "dragid":"7",
        "color":"purple",
        "checked":false,
        "title":"Wash the Car",
        "desc":"written by bob",
        "taskType":"image1"
      },
  ]); 
  useEffect(() => {
  }, [tasks]);
  function handleOnDragEnd(result){
      const items = Array.from ( tasks ) ;
      const [ reorderedItem ] = items.splice ( result.source.index , 1 ) ;
      items.splice ( result.destination.index , 0 , reorderedItem ) ;
      settasks(items)
    console.log(tasks)
  }
  function handleChange(num){
    let items = Array.from ( tasks );
    let item = {...items[num]};
    item.checked = true
    items[num] = item;
    settasks(items)

    console.log('The checkbox was toggled',item , items);
  }; 

    return (
        <div className='shadow-grey border-bottom rounded bg-white'>
            <div  className=' border-bottom p-2'>
              <img src={task} className='app-logo d-none d-md-inline-block w50px' alt="Tasks List Logo"/>
              Tasks List
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='characters'>
                  {(provided)=>(
            <div className='limitheight overflow-auto scrollbar-primary' {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map(function(task,index){
                if(task.taskType == "REJECTED" || task.taskType == "PLANNED" ){
                  const checked = task.checked
                return(
                  <Draggable key={task.id} draggableId={task.dragid} index={index}>
                    {(provided)=>(
                  <div className='px-2 py-3 d-flex border-bottom bg-white' key={index} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <span className={'border-'+task.color.toLowerCase()}></span>
                    <div className='d-inline-block checkbox-position'>
                      <input type="checkbox" key={Math.random()} defaultChecked={task.checked} onChange={event => handleChange(index)} className='form-check-input' />
                    </div>
                    <div className='d-inline-block px-3 text-start'>
                      <h6 className='mb-0 text-black-50 fw-bold'>
                      {task.title} <span className={'buttn '+task.taskType.toLowerCase()}>{task.taskType}</span>
                      </h6>
                      <span className='text-black-50'>{task.desc}</span>
                    </div>
                  </div>
                    )}
                  </Draggable>
                )}else if(task.taskType == "LATEST TASK"){
                  let newclassname = 'latesttask';
                  return(
                    <Draggable key={task.id} draggableId={task.dragid} index={index}>
                      {(provided)=>(
                  <div className='px-2 py-3 d-flex border-bottom bg-white' key={index} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <span className='border-blue'></span>
                    <div className='d-inline-block checkbox-position'>
                      <input type="checkbox" key={Math.random()} defaultChecked={task.checked} onChange={event => handleChange(index)}className='form-check-input' />
                    </div>
                    <div className='d-inline-block px-3 text-start'>
                      <h6 className='mb-0 text-black-50 fw-bold'>
                        {task.title} 
                      </h6>
                      <span className='text-black-50'>{task.desc}</span>
                    </div>
                    <div className='ms-auto pt-2'>
                      <span className={'d-inline-block buttn '+newclassname}>{task.taskType}</span>
                    </div>
                  </div>
                  )}
                  </Draggable>
                  )
                }else{
                  return(
                    <Draggable key={task.id} draggableId={task.dragid} index={index}>
                      {(provided)=>(
                    <div className='px-2 py-3 d-flex ' key={index} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                      <span className='border-blue'></span>
                      <div className='d-inline-block checkbox-position'>
                        <input type="checkbox" key={Math.random()} defaultChecked={task.checked} onChange={event => handleChange(index)} className='form-check-input' />
                      </div>
                      <img className='imagechatbox' src={user1}></img>
                      <div className='d-inline-block px-3 text-start'>
                        <h6 className='mb-0 text-black-50 fw-bold'>
                          {task.title}  
                        </h6>
                        <span className='text-black-50'>{task.desc}</span>
                      </div>
                    </div>
                    )}
                    </Draggable>
                  )
                }
              })}
            </div>
            )}
            </Droppable>
            </DragDropContext>
            <div className='text-end py-1 border-top'>
              <button className='btn text-blue'>Cancel</button>
              <button className='btn px-2 py-1 m-2 btn-blue'>Save</button>
            </div>
        </div>
    )
}

export default TaskManager;