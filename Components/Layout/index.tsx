import Search from "Components/Icons/Search"
import { FC, ReactNode } from "react"
import styles from './Layout.module.css'

const perfumOptions = ['masculino', 'feminino', 'compartilhado']

const TopBar: FC = () => (
  <div className={styles.topbar}>
    <h3>
      <a href="/" className={styles.titleStyle}>Thayllus</a>
    </h3>

    <ul className={styles.listContainer}>
      {perfumOptions.map((option) => (
        <li key={option}>
          <a href={`/perfumes/${option}`} className={styles.listOption}>
            {option}
          </a>
        </li>
      ))}
    </ul>

    <div className={styles.inputContainer}>
      <input className={styles.inputStyle} placeholder="Busque algo..." />
      <Search />
    </div>
  </div>
)

interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <div className={styles.container}>
    <TopBar />

    <main className={styles.mainContainer}>
      {children}
    </main>
  </div>
)

export default Layout