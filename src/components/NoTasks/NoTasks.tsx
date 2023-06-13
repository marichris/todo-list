import clipboard from '../../assets/clipboard.svg'
import style from './NoTasks.module.css'

export function NoTasks() {
  return (
    <div className={style.noTasks}>
      <img src={clipboard} alt="" />
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
