"use client";
import Logo from '../../../public/icone.png';
import Instagram from '../../../public/instagram.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc"
import { FaSquareFacebook } from 'react-icons/fa6';



const Login = () => {
    function handleSubmit(event) {

        console.log(event);
        event.preventDefault();
        let wInput = new Object();
        document.querySelectorAll('[id="form-login"] input')
    };
    return (
        <section className='grid bg-black grid-cols-2'>
            <div className='flex items-center justify-center'>
                <div className=" absolute w-[500px] h-[500px] bg-white border-[3px] border-[#2400FF]" style={{ "clipPath": "polygon(100% 50%, 0 0, 0 100%)" }}>
                </div>
                <Image alt="logo" className='z-10 w-[30rem] mr-[5rem]' src={Logo} />
            </div>
            <div className='bg-black flex flex-col'>
                <div className='w-[60vh] h-fit cursor-pointer flex flex-col rounded-[25px] text-center border-black  bg-white justify - self-center justify-self-center border '>
                    <div className='p-14'>
                        <h3 className='rounded-full border-2 p-1 mt-3 border-black text-[#150190] text-[18px] font-bold flex justify-center items-center'>
                            Entre com google
                            <FcGoogle className='ml-4' size={30} />
                            {/* <Image alt="google" className='w-8 ml-5 inline-flex h-8' src={Google} /> */}
                        </h3>
                        <h3 className='rounded-full border-2 p-1 mt-3 border-black text-[#150190] text-[18px] font-bold text-center flex justify-center items-center'>
                            Entre com Facebook
                            <FaSquareFacebook className='ml-4' size={30} />
                            {/* <Image alt="facebook" className='w-8 ml-3 inline-flex h-8' src={Facebook} /> */}
                        </h3>
                        <h3 className='rounded-full border-2 p-1 mt-3 border-black text-[#150190] text-[18px] font-bold text-center flex justify-center items-center'>
                            Entre com Instagram
                            <Image alt="instagram" className='w-8 inline-flex ml-3 h-8' src={Instagram} />
                        </h3>
                    </div>
                    {/* formulario  */}
                    <form id='form-login' method="post" onSubmit={handleSubmit} className=' w-[100%] cursor-pointer'>
                        <label className='flex ml-5 text-black' htmlFor='email'>Email </label>
                        <input name='email' type='email' className='w-[90%] border-2 border-black  rounded-full peer text-black' />
                        <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
                            Por favor insira um email valido.
                        </p>
                        <label className='flex ml-5 text-black' htmlFor='password'>Senha</label>
                        <input name='password' type='password' className='w-[90%] border-2 border-black  rounded-full peer text-black' />
                        <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
                            Por favor insira uma senha valida.
                        </p>
                        <Link href="/esquecisenha">
                            <p className="text-[#150190] flex ml-8 ">Esqueci minha senha</p>
                        </Link>

                    </form>

                    {/* Botao */}
                    <div className=' text-right pr-10 pt-5 '>
                        <button type='submit' onClick={handleSubmit} className="rounded-full border-[2px] border-black w-24 text-white p-1 bg-[#150190]">Logar</button>
                        <Link href="/cadastro">
                            <p className='text-[#150190]'>Ou Cadastre-se</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Login;