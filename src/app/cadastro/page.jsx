import Button from "@/components/button";
import Header from "@/components/header";
import Input from "@/components/input";
import Layout from "@/components/layout1";
import Link from "next/link";

const Cadastro = () => {
    return (
        <Layout >
            <div className="  w-[90% ] max-w-[80%] h-[81vh] text-black">
                <form className=" flex flex-col ml-[25%] p-5 h-[98%] border-solid border-4 border-[#2400FF]  bg-white rounded-2xl" action="">
                    <h1 className="text-indigo-800 text-[40px] text-center font-bold">Cadastre suas informaçoes  abaixo</h1>
                    <Input nome="nome" titulo="Nome:" />
                    <Input tipo="email" nome="email" titulo="Email:" />
                    <Input nome="celular" titulo="Celular:" width="w-[20%]" />
                    <Input tipo="date" nome="data-nascimento" titulo="Data de nascimento:" width="w-[15%]" tamanho="10" />
                    <Input tipo="password" nome="senha" titulo="Senha:" width="w-[30%]" />
                    <Input tipo="password" nome="confirma" titulo="Confirme sua senha:" width="w-[30%]" />
                    <Input nome="endereco" titulo="Endereço:" width="w-[75%]" />

                    <div className="text-right text-lg">
                        <Link href="/">
                            <Button class="border-2 pl-8 pr-8 border-black rounded-2xl mr-11 text-black active:bg-[#150190] active:text-[white]" titulo="Voltar" />
                        </Link>
                        <Link href="/perfil">
                            <Button class="border-2 pl-8 pr-8 border-black rounded-2xl text-black bg-white active:bg-[#150190] active:text-[white]" titulo="Continuar" />
                        </Link>
                    </div>

                </form>
            </div>
        </Layout>
    );
};

export default Cadastro;