import Image from 'next/image';
import Header from '@/pages/header';
import Facebook from '../../public/facebook.png';
import Instagram from '../../public/instagram.jpg';
import Google from "../../public/linkedin.png"


export default function Home() {
  //<div style={{width: '100%', height: '100%', background: '#150190', borderRadius: 5, border: '1px #2400FF solid'}}></div>
  return (
    <main className='w-screen'>
      <Header />
      <div className='bg-black w-screen h-screen flex flex-col'>
        <div className='m-4 flex flex-col justify-center w-screen items-center'>
          <div className='h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] '></div>
          <div className='h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mt-[-1rem]'></div>
        </div>
        <div className='w-[60vh] h-fit cursor-pointer flex flex-col rounded-[25px] text-center border-black  bg-white justify - self-center justify-self-center h-[85vh] border '>
          <div className='p-14'>
            <h3 class='rounded-full   border-2 p-1 mt-3 border-black text-fuchsia-950 text-[18px] font-bold'>Entre com google
              <Image className='w-8 ml-5 inline-flex h-8' src={Google} />
            </h3>
            <h3 class='rounded-full border-2 p-1 mt-3 border-black text-fuchsia-950 text-[18] font-bold'>Entre com Facebook
              <Image className='w-8 ml-3 inline-flex h-8' src={Facebook} />
            </h3>
            <h3 class='rounded-full t border-2 p-1 mt-3 border-black text-fuchsia-950 text-[18] font-bold'>Entre com Instagram
              <Image className='w-8 inline-flex ml-3 h-8' src={Instagram} />
            </h3>
          </div>
          {/* formulario  */}
          <form className=' w-[100%] cursor-pointer'>
            <label className='flex ml-5 ' for='password'>Email </label>
            <input name='email' type='email' class='w-[90%] border-2 border-black  rounded-full peer'></input>
            <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
              Por favor insira um email valido.</p>


            <label className='flex ml-5 ' for='password'>Senha</label>

            <input name='password' type='password' class='w-[90%] border-2 border-black  rounded-full peer '></input>
            <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
              Por favor insira uma senha valida.
            </p>
            <a className="text-[#77005D] flex ml-8 ">Esqueci minha senha</a>


          </form>

          {/* Botao */}
          <div class='text-right pr-10 pt-5'>
            <button class="rounded-full border w-24 text-white p-1 bg-[#77005D]">Logar</button>
            <p className='text-[#77005D]'>Ou Cadastre-se</p>
          </div>


        </div>
        <div className='m-4 flex flex-col-reverse justify-center w-screen items-center'>
          <div className='h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] '></div>
          <div className='h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mt-[-1rem]'></div>
        </div>
      </div>
    </main>

  )
}
