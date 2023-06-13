import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';
import style from './Task.module.css';

interface TaskProps {
  id: string
  content: string
  onDeleteTask: (task: string) => void
  onCompleteTask: (task: string) => void
  isChecked: boolean
}


export function Task({ id, content, onDeleteTask, onCompleteTask, isChecked }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleCompleteTask() {
    onCompleteTask(id)
  }

  return (
    <div className={`${style.task} ${isChecked ? style.checkedTask : ''}`}>
      <Checkbox.Root className={style.checkboxRoot} onCheckedChange={handleCompleteTask} checked={isChecked}>
        <Checkbox.Indicator className={style.checkboxIndicator}>
          <Check size={12} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <p>{content}</p>
      <button className={style.deleteButton} onClick={handleDeleteTask} title='Deletar tarefa'>
        <Trash size={14} />
      </button>
    </div>
  )
}
