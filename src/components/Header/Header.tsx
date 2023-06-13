import rocketLogo from '../../assets/rocket-logo.svg'
import style from './Header.module.css'

export function Header() {
  return (
    <div className={style.header}>
      <img src={rocketLogo} alt="" />
      <h1 className={style.titleOne}>to</h1>
      <h1 className={style.titleTwo}>do</h1>
    </div>
  )
}
