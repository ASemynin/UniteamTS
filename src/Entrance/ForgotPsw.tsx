import { useState } from "react"
import { SvgLogo } from "../media/svgIcons"
import "./entraceStyle.css"

function ForgotPsw(){

    const[email, setEmail] = useState('')

    return(
    <div>
        <div className="context z-10">
            <div className="flex justify-center text-center m-0 items-center h-[100vh]">
                <div className="w-96 h-96">
                    <h1 className="bigText flex items-center justify-center mb-8">{SvgLogo} Восстановление пароля</h1>
                    <form className="">
                        <div className="flex flex-wrap justify-center">
                            <input placeholder="E-mail" onChange={event => {setEmail(event.target.value)}} value={email} name="name" type="text" autoComplete="on" className="block w-full rounded-md border-0 py-1.5 my-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                        <p className="mt-2 text-center text-sm text-gray-500">На вашу почту будет отправлено письмо с дальнейшей инструкцией</p>
                            <button type="submit" className="mt-8 mb-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Отправить письмо</button> 
                    </form>
                </div>
            </div>
        </div>
        <div className="area -z-30">
                <ul className="circles">
                    <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>
                </ul>
        </div >
       
        </div>
    )
}

export default ForgotPsw

