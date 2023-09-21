
import Logo from '../../../public/icone.png';
import Facebook from '../../../public/facebook.png';
import Instagram from '../../../public/instagram.jpg';
import Google from "../../../public/linkedin.png";
import Image from 'next/image';
import Link from 'next/link';



const Login = () => {
    return (
        <section className='grid bg-black grid-cols-2'>
            <div className='flex items-center justify-center'>
                <div className=" absolute w-[500px] h-[500px] bg-white border-[3px] border-[#2400FF]" style={{ "clipPath": "polygon(100% 50%, 0 0, 0 100%)" }}>
                </div>
                <Image className='z-10 w-[30rem] mr-[5rem]' src={Logo} />
            </div>
            <div className='bg-black flex flex-col'>
                <div className='w-[60vh] h-fit cursor-pointer flex flex-col rounded-[25px] text-center border-black  bg-white justify - self-center justify-self-center border '>
                    <div className='p-14'>
                        <h3 className='rounded-full   border-2 p-1 mt-3 border-black text-[#150190] text-[18px] font-bold'>Entre com google
                            <Image className='w-8 ml-5 inline-flex h-8' src={Google} />
                        </h3>
                        <h3 className='rounded-full border-2 p-1 mt-3 border-black text-[#150190] text-[18] font-bold'>Entre com Facebook
                            <Image className='w-8 ml-3 inline-flex h-8' src={Facebook} />
                        </h3>
                        <h3 className='rounded-full t border-2 p-1 mt-3 border-black text-[#150190] text-[18] font-bold'>Entre com Instagram
                            <Image className='w-8 inline-flex ml-3 h-8' src={Instagram} />
                        </h3>
                    </div>
                    {/* formulario  */}
                    <form className=' w-[100%] cursor-pointer'>
                        <label className='flex ml-5 text-black' htmlFor='email'>Email </label>
                        <input name='email' type='email' class='w-[90%] border-2 border-black  rounded-full peer'></input>
                        <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
                            Por favor insira um email valido.</p>


                        <label className='flex ml-5 text-black' htmlFor='password'>Senha</label>

                        <input name='password' type='password' class='w-[90%] border-2 border-black  rounded-full peer '></input>
                        <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
                            Por favor insira uma senha valida.
                        </p>
                        <a className="text-[#150190] flex ml-8 ">Esqueci minha senha</a>
                    </form>

                    {/* Botao */}
                    <div class=' text-right pr-10 pt-5 '>
                        <Link href="cadastro">
                            <button class="rounded-full border-[2px] border-black w-24 text-white p-1 bg-[#150190]">Logar</button>
                            <p className='text-[#150190]'>Ou Cadastre-se</p>
                        </Link>
                    </div>


                </div>
            </div>
        </section>
    )

}

export default Login;