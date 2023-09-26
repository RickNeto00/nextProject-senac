import Head from "next/head";
import Link from "next/link";

export default function loginPage() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <Head>
                <title>Login</title>
            </Head>
            <form className="grid login-form-card" action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="henrique@gmail.com" required/>
                </div>
                <div>    
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                </div>
                <button type="submit" className="margin-submit-register text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </form>
            <Link href={`/user/register`}>Create Account</Link>
        </main>
    )
}