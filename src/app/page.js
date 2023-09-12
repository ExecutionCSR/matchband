import Image from 'next/image'
import google from '../../public/google-37.png'
import facebook from '../../public/facebook-13.png'
import instagram from '../../public/instagram-40.png'
export default function Home() {
  return (
    /*navegação*/
    /* TESTE */
    <div class='bg-[url(../../public/background.jpg)]  bg-cover grid content-between'>
      <nav class='w-screen bg-[#480a64] h-14 text-lg text text-center font-bold text-white border-hidden '>
        MatchBand!
      </nav>

    {/* faixas */}
      <div class=''>
        <div class='w-screen bg-[#2107C5] border-hidden h-10'></div>
        <div class='w-screen bg-[#002878] border-hidden h-10'></div>
        <div class='w-screen bg-[#003C8C] border-hidden h-8'></div>
        <div class='w-screen bg-[#d1dbe9] border-hidden h-5'></div>
      </div>

      {/* Arrow direita*/}
      <div class='h-[212px] flex justify-self-end'>
        <div class=' translate-y-[-150px] w-0 h-0 border-t-[100px] border-t-transparent border-r-[200px] border-r-blue-500 border-b-[100px] border-b-transparent'></div>
      </div>

{/* links  */}
      <div className='w-[60vh] cursor-pointer flex flex-col rounded-[25px] text-center border-black  bg-white justify - self-center justify-self-center h-[85vh] absolute border '>
        <div className='p-14'>
          <h3 class='rounded-full   border-2 p-1 mt-3 border-black text-fuchsia-950 text-[18px] font-bold'>Entre com google<Image className='w-8 ml-5 inline-flex h-8' src={google} /></h3>
          <h3 class='rounded-full border-2 p-1 mt-3 border-black text-fuchsia-950 text-[18] font-bold'>Entre com Facebook<Image className='w-8 ml-3 inline-flex h-8' src={facebook} /></h3>
          <h3 class='rounded-full t border-2 p-1 mt-3 border-black text-fuchsia-950 text-[18] font-bold'>Entre com Instagram<Image className='w-8 inline-flex ml-3 h-8' src={instagram} /></h3>
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

 {/*Arrow esquerda*/}
      <div clas='h-screen flex justify-self-end'>
        <div class='translate-y-[90px] w- h-0 border-t-[90px] border-t-transparent border-l-[200px] border-l-green-500 border-b-[80px] border-b-transparent'></div>
      </div>

{/* faixas inferiores */}
      <div class='justify-self-end'>
        <div class='w-screen bg-[#d1dbe9] border-hidden h-5'></div>
        <div class='w-screen bg-[#003C8C]  border-hidden h-8'></div>
        <div class='w-screen bg-[#002878] border-hidden h-10'></div>
      </div>
    </div>

  )
}
