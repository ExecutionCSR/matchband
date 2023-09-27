import Image from "next/image";
import foto from "../../../public/foto.jpeg";
import Link from "next/link";
import Button from "@/components/button";


const Criarperfil = () => {
  return (
    <>
      <div className="m-4   flex flex-col justify-center  items-center">
        <div className="h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] "></div>
        <div className="z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mt-[-1rem]"></div>
      </div>

      <div className="grid justify-items-center ">

        <div className=" w-[60%] justify-center   h-[45rem]  border-solid border-2  border-black ">
          <h1 className=" 
text-indigo-800 font-bold font-['Inter'] text-center text-[40px] ">Crie seu perfil</h1>
          <div>
            <span className="m-10 font-['Inter'] text-[22px]">Coloque sua foto de perfil</span>
            <span className="m-10 font-['Inter'] text-[22px]"> Escreva sua bio:</span>
          </div>

          <div className="flex mt-5 w-[100%]">
            <div className="w-[25%]  bg-red-600 ml-10 mr-10 h-[90%]">
              <Image className="w-[100%]  h-[100%]" alt="foto" src={foto} />
            </div>

            <input className="w-[50%] mr-3 border rounded-xl border-black "></input>


          </div>
          <div className="mt-10" >
            <span className="m-10  text-justify mt-3 font-['Inter'] text-[22px]">Escreva as hashtags dos seus gêneros de música:</span>
            <span className="m-10 font-['Inter'] text-[22px]"> Poste algumas fotos e vídeos </span>
            <div className="flex">
              <input className="border-2 border-black w-50 h-28 rounded-xl cursor-auto ml-10 mt-3" type="text" name="" id="" />
              <div className="border-2 border-black w-[80%] h-28 rounded-xl cursor-auto  ml-28 mr-10 mt-3" type="text" name="" id="" >
                <button className="w-[10%] h-[40%] text-xl border-2 rounded-xl hover:bg-blue-900 m-3 border-black" type="submit"> + </button>
              </div>
            </div>

      
            <div className="text-right text-lg">
              <Link href="/">
                <Button className="border-2 pl-8 pr-8 border-black rounded-2xl mr-11 text-black active:bg-[#150190] active:text-[white]" titulo="Voltar" />
              </Link>
              <Link href="/">
                <Button className="border-2 pl-8 pr-8 border-black rounded-2xl text-black bg-white active:bg-[#150190] active:text-[white]" titulo="Continuar" />
              </Link>
            </div>
            
           

          </div>
        </div>


      </div>

      <div className="m-4 flex flex-col-reverse justify-center  items-center">
        <div className="h-[3rem] w-[80%]  bg-[#150190] border-[1px]  border-[#2400FF] bg-"></div>
        <div className="z-10 h-[2rem] w-[50%] border-[1px] bg-[#2107C5] border-[#2400FF] mb-[-1rem]">

        </div>

      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default Criarperfil;
