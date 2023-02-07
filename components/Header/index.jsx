import Link from 'next/link';
import styles from './header.module.sass';

const Header = () => {
	return (
		<header className={styles.header}>
			<Link href='/'>Index</Link>
			<Link href='/about'>about</Link>
			<Link href='/test'>test</Link>
		</header>
	)
}

export default Header;