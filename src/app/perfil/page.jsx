import Image from "next/image";
import foto from "../../../public/foto.jpeg";
const Criarperfil = () => {
  return (
    <>
      <div className="m-4 flex flex-col justify-center  items-center">
        <div className="h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] "></div>
        <div className="z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mt-[-1rem]"></div>
      </div>

      <div className="  w-[90% ] max-w-[80%] h-[81vh] ">
        <div className="  ml-[25%] p-5 h-[90%] border-solid border-2  border-black ">
          <div>
            <span className="m-10">Coloue sua foto de perfil</span>
            <span className="m-10"> Escreva sua bio:</span>
          </div>
     
          <div className="flex mt-5 w-[100%]">
            <div className="w-[25%]  bg-red-600 ml-10 mr-10 h-[90%]">
              <Image className="w-[100%]  h-[100%]" alt="foto" src={foto} />
            </div>

            <div className="w-[50vh] border rounded-xl border-black h-[150px]"></div>
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
