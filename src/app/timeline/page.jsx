import Image from "next/image";
import { FaThumbsUp, FaHeart, FaShare, FaUser } from "react-icons/fa6";
import { FaCommentAlt, FaPlusCircle } from "react-icons/fa";
import PostImg from "../../../public/estabelecimento_placeholder.png";
import { Api } from "@/libs/axios";
import Modal from "@/components/modal";
import Header from "@/components/header";

export const getTimeLine = async () => {
    const posts = await Api.get('/posts/timeline', {});
    return posts.data;
};

export default async function TimeLine() {
    const data = await getTimeLine();
    return (
        <main className=" h-[100vh] ">
            <Header />
            <Modal />
            <section name="post-container" className="bg-white flex-col rounded border-[4px] border-[#2400FF] m-4 flex items-center justify-center">
                {data.map((post, index) => {
                    let { usuario: { nome }, dataPostagem, conteudo, likes, compartilhamento, ameis } = post;
                    dataPostagem = new Date(dataPostagem).toLocaleString("en-GB")
                    return <div key={post.id} className="bg-white w-[80%]  border-[1px] border-[#2400FF] m-2 rounded-lg" >
                        <div className="grid">
                            <div className="flex items-center justify-between p-2" name="post-user">
                                <div className="flex items-center rounded " name="post-user-information">
                                    <div name="post-user-img" className="flex justify-center p-2 border-[#2400FF] border-4 rounded-full h-16 w-16">
                                        <FaUser size={36} className="text-black" />
                                    </div >
                                    <div className="p-2">
                                        <strong ><p className="text-black text-[1.5rem]" name="post-user-name">{nome}</p></strong>
                                    </div>
                                </div>
                                <div className="p-2" name="post-user-date">
                                    <p className="text-[#818181]">{dataPostagem}</p>
                                </div>
                            </div>
                            <div name="post-body" className="p-2 w-[80%] justify-self-center">
                                <div name="post-body-text-content" className="text-black">
                                    <p className="text-[1.2rem]">{conteudo}</p>
                                </div>
                                <div name="post-body-file-content" className=" hidden ">
                                    <Image alt="post-img" className="w-[30rem]" src={PostImg} />
                                </div>
                            </div>
                            <div name="post-likes" className="text-black flex p-2 mt-6">
                                <div name="post-likes-like" className="flex items-center px-2">
                                    <div className="bg-black p-1 rounded">
                                        <FaThumbsUp className="text-white" />
                                    </div>
                                    <div className="px-2">{likes}</div>
                                </div>
                                <div name="post-likes-heart" className="flex items-center px-2">
                                    <div className="bg-black p-1 rounded">
                                        <FaHeart className="text-white" />
                                    </div>
                                    <div className="px-2">{ameis}</div>
                                </div>
                                <div name="post-likes-coment" className="flex items-center px-2">
                                    <div className="bg-black p-1 rounded">
                                        <FaCommentAlt className="text-white" />
                                    </div>

                                    <div className="px-2">{compartilhamento}{/* arumar*/}</div>
                                </div>
                                <div name="post-likes-share" className="flex items-center px-2">
                                    <div className="bg-black p-1 rounded">
                                        <FaShare className="text-white" />
                                    </div>
                                    <div className="px-2">{compartilhamento}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </section>

            <div className="fixed z-20 bottom-5 bg-[#2400FF] p-2 rounded-2xl right-6" >
                <FaPlusCircle size={42} />
            </div>
        </main >
    )
};