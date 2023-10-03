
import Header from "@/components/header";
import Layout from "@/components/layout1";
import Login from "../login/page";

const PaginaInicial = () => {
    return (
        <Layout>
            <Login />
        </Layout>
        /*         <main className='bg-black'>
                    <Header />
                    <div className='m-4 flex flex-col justify-center  items-center'>
                        <div className='h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] '></div>
                        <div className='z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mt-[-1rem]'></div>
                    </div>
                    
                    <div className='m-4 flex flex-col-reverse justify-center  items-center'>
                        <div className='h-[3rem] w-[90%] bg-[#150190] rounded border-[1px] border-[#2400FF] '></div>
                        <div className='z-10 h-[2rem] w-[50%] rounded border-[1px] bg-[#2107C5] border-[#2400FF] mb-[-1rem]'></div>
                    </div>
                </main> */

    )
}
export default PaginaInicial;