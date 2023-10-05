import Image from "next/image";
import foto from "../../../public/foto.jpeg";
import Input from "@/components/input";
const Criarperfil = () => {
  return (
    <>
      <div className="m-4 flex flex-col justify-around items-center">
        <div className="h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] "></div>
        <div className="z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mt-[-1rem]"></div>
      </div>

      <div>
        <div className="flex  flex-wrap  w-[80% ] h-[33rem] m-20  border-solid border-2  border-black ">
         <div className="w-[100%] text-center m-3 text-[35px] h-5  text-indigo-800  font-bold font-['Inter']">
          <h1>Crie seu perfil</h1></div> 
          
          <div className="w-[30%] items-center  text-center h-[30%]  mr-5">
          <p>Coloque sua foto de perfil</p>
          <div className="ml-[20%]">
          <Image
          
          src={foto}
          width={200}
          height={100}
          alt="Picture of the Usuario"
          />
          </div>
       
          </div>
          <div className="w-[60%] h-[40%] border-2">
            <input className="w-[100%] h-[90%]  rounded-[25px] border-2 border-black" type="text" />
          </div>

      
            <div className="w-[30%] h-[40%] border-2 ml-5 text-center mr-3">
              <p>Escreva as hashtags dos seus gêneros de música:</p>
              <input className="w-[100%] h-[70%] flex max-h-44 border-2 mr-8 rounded-[25px]  border-black" type="text" />
            </div>
            <div className="w-[60%] text-center h-[40%] border-2">
              <p>Poste algumas fotos e vídeos</p>
              <div className="w-[90%] h-[78%] justify-start border-2 border-black rounded-[25px] ml-5 ">
                <button className="w-12 h-12 bg-red-50 border-2 border-black m-3">+</button>
              </div>
            </div>
      
        </div>
      </div>

      <div className="m-4 flex flex-col-reverse justify-center  items-center">
        <div className="h-[3rem] w-[90%] rounded-[25%] bg-[#150190] border-[1px]  border-[#2400FF] bg-"></div>
        <div className="z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mb-[-1rem]"></div>
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
