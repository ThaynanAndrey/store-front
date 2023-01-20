import Ello from "Components/Icons/Ello"
import Instagram from "Components/Icons/Instagram"
import Mastercard from "Components/Icons/Mastercard"
import Search from "Components/Icons/Search"
import Visa from "Components/Icons/Visa"
import { FC, ReactNode } from "react"
import styles from './Layout.module.css'

const perfumOptions = ['masculino', 'feminino', 'compartilhado']

const TopBar: FC = () => (
  <nav className={styles.topbar}>
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
  </nav>
)

const Footer: FC = () => (
  <footer className={styles.footerContainer}>
    <div className={styles.footerTitleContainer}>
      <h3>Thayllus</h3>
      <span className={styles.footerWarning}>© Todos os direitos reservados.</span>
    </div>

    <a href="https://www.instagram.com/thayllusoficial" target="_blank">
      <Instagram />
    </a>
  </footer>
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

    <Footer />
  </div>
)

export default Layout