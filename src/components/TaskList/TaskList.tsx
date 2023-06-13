import { nanoid } from 'nanoid';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { NoTasks } from '../NoTasks/NoTasks';
import { Task } from "../Task/Task";
import style from "./TaskList.module.css";

interface Task {
  id: string
  name: string
  completed: boolean
}

export function TaskList() {

  const [tasks, setTasks] = useState<Task[]>([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, { id: nanoid(), name: newTaskText, completed: false }])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function completeTask(taskToComplete: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskToComplete) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const numberOfTasksCompleted = tasks.filter((task) => task.completed).length

  const isNewTaskEmpty = newTaskText.length === 0

  const totalNumberOfTasks = tasks.length

  return (
    <div className={style.container}>

      <form className={style.newTask} onSubmit={handleCreateNewTask}>
        <input
          required name="newTask"
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
        />
        <button type='submit' disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle weight='bold' />
        </button>
      </form>

      <div className={style.taskInfo}>
        <h3 className={style.taskCreate}>Tarefas criadas <span>{totalNumberOfTasks}</span></h3>
        <h3 className={style.taskDone}>Concluídas <span>{numberOfTasksCompleted} de {totalNumberOfTasks}</span></h3>
      </div>

      <div>
        {totalNumberOfTasks === 0 ? (
          <NoTasks />
        ) : (
          tasks.map(task => {
            return <Task key={task.id} id={task.id} content={task.name} onDeleteTask={deleteTask} onCompleteTask={completeTask} isChecked={task.completed} />
          })
        )}



        {/* {tasks.map(task => {
          return <Task key={task.id} id={task.id} content={task.name} onDeleteTask={deleteTask} onCompleteTask={completeTask} isChecked={task.completed} />
        })} */}

      </div>
    </div>
  );
}
