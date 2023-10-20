import Image from "next/image";
import foto from "../../../public/foto.jpeg";
import Button from "@/components/button";
import Link from "next/link";
import Layout from "@/components/layout1";
import { FaPlus } from "react-icons/fa6";
const Criarperfil = () => {
  return (
    <Layout >
      <div className="text-black">
        <div className="flex  flex-wrap  w-[80% ] h-[33rem] m-20  border-solid border-4  border-[#2400FF] bg-white rounded-lg">
          <div className="w-[100%] text-center text-[35px] h-5  text-indigo-800  font-bold">
            <h1>Crie seu perfil</h1>
          </div>

          <div className="w-[30%] items-center  text-center h-[30%]  mr-5">
            <p>Coloque sua foto de perfil</p>
            <div className="ml-[20%] cursor-pointer">
              <Image
                src={foto}
                width={200}
                height={100}
                alt="Picture of the Usuario"
              />
            </div>

          </div>
          <div className="w-[60%] mt-5 h-[35%] ">
            <p>Escreva sua bio:</p>
            <input className="w-[100%] h-[80%]  rounded-[25px] border-2 border-black" type="text" />
          </div>

          <div className="w-[30%] mt-10 h-[35%] ml-5 text-center mr-3">
            <p>Escreva as hashtags dos seus gêneros de música:</p>
            <input className="w-[100%] h-[60%] flex max-h-44 border-2 mr-8 rounded-[25px]  border-black" type="text" />
          </div>
          <div className="w-[60%] text-center h-[40%] ">
            <p>Poste algumas fotos e vídeos</p>
            <div className="w-[90%] h-[78%] flex items-start border-2 border-black rounded-[25px] ml-5 ">
              <div className="w-12 h-12  bg-white border-2 border-black m-3 text-black flex justify-center items-center rounded-[1rem]">
                <FaPlus size={30} />
              </div>

              <button className="w-12 h-12  bg-red-50 border-2 border-black m-3">+</button>
            </div>
          </div>
          <div className=" w-full  text-lg flex items-center justify-between p-4">
            <Link href="/">
              <Button classe="border-2 pl-8 pr-8 border-black rounded-2xl text-black active:bg-[#150190] active:text-[white]" titulo="Voltar" />
            </Link>
            <Link href="/perfil">
              <Button classe="border-2 pl-8 pr-8 border-black rounded-2xl text-black bg-white active:bg-[#150190] active:text-[white]" titulo="Continuar" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Criarperfil;
