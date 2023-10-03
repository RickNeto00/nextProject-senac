import { Inter } from 'next/font/google'
import { deleteCookie, getCookie } from 'cookies-next'
import { checkToken } from '@/services/tokenConfig';
import { useRouter } from 'next/router';
import styles from "@/styles/home.module.css";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  function logOut() {
    deleteCookie('authorization');
    router.push(`/user/login`);
  }

  return (
            <main className={`flex min-h-screen flex-col  justify-between p-24 ${inter.className}`}>
              <nav className={styles.navBar}>
                <input type="text" placeholder='Search Bar'/>
                <button className={styles.logout} onClick={logOut}>Logout</button>
              </nav>
            </main>
  )
}

export function getServerSideProps({req, res}: any) {
  try {
    const token = getCookie('authorization', {req, res});
    
    if (!token) {
      throw new Error('Invalid Token');
    }

    checkToken(token);

    return {props: {}};

  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: `/user/login`
      },
      props: {}
    };
  }
}