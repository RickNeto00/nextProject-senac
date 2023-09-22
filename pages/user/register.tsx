import Head from "next/head";
import { useState } from "react";

export default function registerPage(){
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    function handleFormEdit(event: any, name: any) {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    async function formSubmit(event: any) {
        event.preventDefault();

        const response = await fetch(`/api/actions/user/create`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        const responseJson = await response.json();
        console.log(responseJson);
        console.log(response.status);
    }

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <Head>
                <title>Register</title>
            </Head>
            <form className="grid" action="" onSubmit={formSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Henrique Ferreira Neto"/>
                </div>
                <div>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" id="cpf" value={formData.cpf} onChange={(e) => {handleFormEdit(e, 'cpf')}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000.000.000-00" required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="henrique@gmail.com" required/>
                </div>
                <div>    
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                </div>
                <div> 
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input type="password" id="repeat-password" value={formData.repeatPassword} onChange={(e) => {handleFormEdit(e, 'repeatPassword')}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                </div>
                <button type="submit" className="margin-submit-register text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </main>
    )
}