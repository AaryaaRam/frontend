import Link from 'next/link'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Anwesha</h1>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/multicity">Multicity</Link>
        <Link className={styles.link} href="/ca">Campus Ambassadors</Link>
        <Link className={styles.link} href="/about">About</Link>
        <Link className={styles.link} href="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar