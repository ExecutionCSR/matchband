import Header from "../header/page";


const Cadastro = () => {
    return (
        <Header/>
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