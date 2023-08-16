import Image from 'next/image'

export default function Home() {
  return (
    <div class='grid  content-between'>
      <div class=''>
        <div class='w-screen bg-[#2107C5] border-hidden h-10'></div>
        <div class='w-screen bg-[#002878] border-hidden h-10'></div>
        <div class='w-screen bg-[#003C8C] border-hidden h-8'></div>
        <div class='w-screen bg-[#d1dbe9] border-hidden h-5'></div>
      </div>
      <div class='h-[212px] flex justify-self-end'>
        <div class=' translate-y-[-150px] w-0 h-0 border-t-[100px] border-t-transparent border-r-[200px] border-r-blue-500 border-b-[150px] border-b-transparent'></div>
      </div>

      <div class='w-[60vh] cursor-pointer rounded-[25px] text-center border-black  bg-white justify- self-center justify-self-center h-[85vh] absolute border '>
        <div class='p-14'>
          <h3 class='rounded-full  border-2 p-1 mt-3 border-black'>Entre com google</h3>
          <h3 class='rounded-full border-2 p-1 mt-3 border-black'>Entre com Facebook</h3>
          <h3 class='rounded-full border-2 p-1 mt-3 border-black'>Entre com Instagram</h3>
        </div>
      
       <form class='cursor-pointer'>
        <label class='block 
        '  for='password'>
          <p class="text-start ml-10">Email</p>
          <input name='email' type='email' class='w-96 border-2 border-black  rounded-full peer'></input>
          <p class=" invisible peer-invalid:visible text-pink-600 text-sm">
          Por favor insira um email valido.
          </p>
        </label>

        <label  class='block ' for='password'>
        <p class="text-start ml-10">Senha</p>
          <input  name='password' type='password' class='w-96 border-2 border-black  rounded-full peer '></input>
          <p class=" invisible peer-invalid:visible text-pink-600 text-sm">
          Por favor insira uma senha valida.  
          </p>
          <a class="text-[#77005D] ">Esqueci minha senha</a>
        </label>
       
      </form>
      <div class='text-right pr-10 pt-10'>
      <button class="rounded-full border w-24 text-white p-1 bg-[#77005D]">Logar</button>
      <p>Ou Cadastre-se</p>
      </div>
       
        
      </div>
      

      <div clas='h-screen flex justify-self-end'>
        <div class='translate-y-[150px] w-0 h-0 border-t-[100px] border-t-transparent border-l-[200px] border-l-green-500 border-b-[150px] border-b-transparent'></div>
      </div>


      <div class='justify-self-end'>
        <div class='w-screen bg-[#d1dbe9] border-hidden h-5'></div>
        <div class='w-screen bg-[#003C8C]  border-hidden h-10'></div>
        <div class='w-screen bg-[#003C8C] border-hidden h-10'></div>
        <div class='w-screen bg-[#002878] border-hidden h-10'></div>
      </div>
    </div>

  )
}
