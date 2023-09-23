import Header from "../header/page";
import PaginaInicial from "../paginainicial/page";


const Cadastro = () => {
    return (

        <>

            <div className='m-4 flex flex-col justify-center  items-center'>
                <div className='h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] '></div>
                <div className='z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mt-[-1rem]'></div>
            </div>
            <div className="  w-[90% ] max-w-[80%] h-[81vh] ">
                <form className=" flex flex-col ml-[25%] p-5 h-[98%] border-solid border-2  border-black " action="">
                    <h1 className="   text-indigo-800 text-[40px] text-center font-bold font-['Inter']">Cadastre suas informaçoes  abaixo</h1>
                    <div className="p-2">
                        <label className="  text-center text-black text-[30px] font-bold font-['Inter']" htmlFor="nome">Nome:</label>
                        <input className=" ml-7 w-[40%] rounded-xl border-black border-2" name="nome" type="text" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold font-['Inter']" htmlFor="email">Email:</label>
                        <input className="ml-7 w-[40%] rounded-xl border-black border-2" name="email" type="text" />
                    </div>
                    <div className="p-2" >
                        <label className="text-center text-black text-[30px] font-bold font-['Inter']" htmlFor="telefone">Celular:</label>
                        <input className="ml-7 w-[20%] rounded-xl border-black border-2" name="telefone" type="text" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold font-['Inter']" htmlFor="idade"> Data de nascimento:</label>
                        <input className="ml-7 w-[11%] rounded-xl border-black border-2" name="idade" type="text" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold font-['Inter']" htmlFor="senha">Senha:</label>
                        <input className="ml-7 w-[30%] rounded-xl border-black border-2" name="senha" type="Password" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold font-['Inter']" htmlFor="confirma">Confirme sua senha:</label>
                        <input className="ml-7 w-[30%] rounded-xl border-black border-2" name="confirma" type="password" />
                    </div>
                    <div className="p-2">
                        <label className="text-center text-black text-[30px] font-bold font-['Inter']" htmlFor="endereco">Endereço:</label>
                        <input className="ml-7 w-[75%] rounded-xl border-black border-2" type="text" name="endereco" />
                    </div>
                    <div className="text-right text-lg">
                        <button className=" border-2 pl-8 pr-8 border-black rounded-2xl mr-11" type="submit">Voltar</button>
                        <button className=" border-2 pl-8 pr-8 border-black rounded-2xl bg-white active:bg-[#150190] active:text-[white]" type="submit"> Continuar</button>
                    </div>
                       
                </form>
            </div>
            <div className='m-4 flex flex-col-reverse justify-center  items-center'>
                <div className='h-[3rem] w-[90%] bg-[#150190] rounded border-[1px]  border-[#2400FF] bg-'></div>
                <div className='z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mb-[-1rem]'></div>
            </div>

        </>
    );
}

export async function getServerSideProps(ctx) {


    return {
        props: {
            data: null
        }
    }
}

export default Cadastro;