"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout1";
import Link from "next/link";

export default function EsqueciSenha() {
    function handleSubmit(event) {
        event.preventDefault();
        const body = new Object();
        document.querySelectorAll('[id="form-esqueci-senha"] input').forEach(pItem => {
            const name = pItem.name,
                value = pItem.value;
            body[name] = value;
        });
        console.log(body);
    };
    return (
        <Layout>
            <div className="  w-[90% ] max-w-[80%] text-black">
                <form id="form-esqueci-senha" className=" flex flex-col ml-[25%] p-5 h-[98%] border-solid border-4 border-[#2400FF]  bg-white rounded-2xl" action="">
                    <h1 className="text-indigo-800 text-[40px] text-center font-bold">Reset de Senha</h1>
                    <div className="w-full p-10 my-5">
                        <p className="text-center  text-black text-[25px] font-bold">Digite seu nome  usuário, e-mail ou telefone:</p>
                        <Input tipo="email" nome="email" width="w-[90%]" />
                    </div>
                    <div className="hidden">
                        <p className="text-center text-black text-[25px] font-bold">Um link foi enviado para o seu e-mail cadastrado!</p>
                    </div>
                    <div className="text-right text-lg">
                        <button onClick={handleSubmit}> Clique aqui para putas</button>
                        <Link href="/">
                            <Button classe="border-2 pl-8 pr-8 border-black rounded-2xl text-black bg-white active:bg-[#150190] active:text-[white]" titulo="Enviar" />
                        </Link>
                        {/*/<Link href="/">
                            <Button class="border-2 pl-8 pr-8 border-black rounded-2xl mr-11 text-black active:bg-[#150190] active:text-[white]" titulo="Voltar" />
                        </Link>
                        <Link href="/perfil">
                            <Button class="border-2 pl-8 pr-8 border-black rounded-2xl text-black bg-white active:bg-[#150190] active:text-[white]" titulo="Continuar" />
                        </Link>*/}
                    </div>

                </form>
            </div>
        </Layout>
    )
}