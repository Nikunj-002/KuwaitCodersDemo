import Link from 'next/link';
import { useRouter } from "next/router";
import classes from './main-navigation.module.css';

function MainNavigation() {
	const router = useRouter();
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Demo</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts" className={router.pathname.includes("/posts") ? "active" : ""}>Posts</Link>
          </li>
          <li>
            <Link href="/contact" className={router.pathname == "/contact" ? "active" : ""}>Contact</Link>
          </li>
		  <li>
            <Link href="/sample-blog" className={router.pathname == "/sample-blog" ? "active" : ""}>Sample Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
