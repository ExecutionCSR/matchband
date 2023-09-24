import Button from "@/components/button";
import Header from "@/components/header";
import Input from "@/components/input";

const Cadastro = () => {
    return (
        <>
            <Header />
            <div className='m-4 flex flex-col justify-center  items-center'>
                <div className='h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] '></div>
                <div className='z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mt-[-1rem]'></div>
            </div>
            <div className="  w-[90% ] max-w-[80%] h-[81vh] text-black">
                <form className=" flex flex-col ml-[25%] p-5 h-[98%] border-solid border-4 border-[#2400FF]  bg-white rounded-2xl" action="">
                    <h1 className="text-indigo-800 text-[40px] text-center font-bold">Cadastre suas informaçoes  abaixo</h1>
                    {/*                     <div className="p-2">
                        <label className="  text-center text-black text-[30px] font-bold" htmlFor="nome">Nome:</label>
                        <input className=" ml-7 w-[40%] rounded-xl border-black border-2" name="nome" type="text" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold" htmlFor="email">Email:</label>
                        <input className="ml-7 w-[40%] rounded-xl border-black border-2" name="email" type="text" />
                    </div>
                    <div className="p-2" >
                        <label className="text-center text-black text-[30px] font-bold" htmlFor="telefone">Celular:</label>
                        <input className="ml-7 w-[20%] rounded-xl border-black border-2" name="telefone" type="text" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold" htmlFor="idade"> Data de nascimento:</label>
                        <input className="ml-7 w-[11%] rounded-xl border-black border-2" name="idade" type="text" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold" htmlFor="senha">Senha:</label>
                        <input className="ml-7 w-[30%] rounded-xl border-black border-2" name="senha" type="Password" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold" htmlFor="confirma">Confirme sua senha:</label>
                        <input className="ml-7 w-[30%] rounded-xl border-black border-2" name="confirma" type="password" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold" htmlFor="endereco">Endereço:</label>
                        <input className="ml-7 w-[75%] rounded-xl border-black border-2" type="text" name="endereco" />
                    </div> */}

                    <Input nome="nome" titulo="Nome:" />
                    <Input tipo="email" nome="email" titulo="Email:" />
                    <Input nome="celular" titulo="Celular:" width="w-[20%]" />
                    <Input tipo="date" nome="data-nascimento" titulo="Data de nascimento:" width="w-[15%]" tamanho="10" />
                    <Input tipo="password" nome="senha" titulo="Senha:" width="w-[30%]" />
                    <Input tipo="password" nome="confirma" titulo="Confirme sua senha:" width="w-[30%]" />
                    <Input nome="endereco" titulo="Endereço:" width="w-[75%]" />

                    <div className="text-right text-lg">
                        <Button class="border-2 pl-8 pr-8 border-black rounded-2xl mr-11 text-black active:bg-[#150190] active:text-[white]" titulo="Voltar" />
                        <Button class="border-2 pl-8 pr-8 border-black rounded-2xl text-black bg-white active:bg-[#150190] active:text-[white]" titulo="Continuar" />
                    </div>

                </form>
            </div>
            <div className='m-4 flex flex-col-reverse justify-center  items-center'>
                <div className='h-[3rem] w-[90%] bg-[#150190] rounded border-[1px]  border-[#2400FF]'></div>
                <div className='z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mb-[-1rem]'></div>
            </div>

        </>
    );
};

export default Cadastro;