"use client";
import Image from "next/image";
import { FaThumbsUp, FaHeart, FaShare, FaUser } from "react-icons/fa6";
import { FaCommentAlt, FaPlusCircle } from "react-icons/fa";
import PostImg from "../../../public/estabelecimento_placeholder.png";
import { Api } from "@/libs/axios";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import Button from "@/components/button";

export default function TimeLine() {
    const [hidden, setHidden] = useState(false);
    const [posts, setPosts] = useState([]);

    function handleCommit(event) {
        let element = event.target,
            post_reference = element.getAttribute('post-reference');
        console.log(post_reference);
        if (post_reference) {
            let post_comment = document.getElementsByName("postagem-comentario-" + post_reference);

            if (post_comment.length) {
                post_comment = post_comment[0];
                console.log(post_comment);
                let isHidden = post_comment.classList.contains('hidden');

                if (isHidden) {
                    post_comment.classList.remove('hidden');
                    post_comment.classList.add('grid');
                } else {
                    post_comment.classList.add('hidden');
                    post_comment.classList.remove('grid');
                };
            }
        };

    }

    useEffect(() => {
        Api.get('/posts/timeline', {}).then(result => {
            setPosts(result.data);
        });
    }, [])
    return (
        <main className=" h-[100vh] ">
            <Header />
            {
                hidden &&
                <div name="modal-post-create" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50    ">
                    <div className="bg-white w-[60%]  border-[1px] border-[#2400FF] m-2 rounded-lg" >
                        <div className="grid">
                            <div className="flex items-center justify-between p-2" name="post-user">
                                <div className="flex items-center rounded " name="post-user-information">
                                    <div name="post-user-img" className="flex justify-center p-2 border-[#2400FF] border-4 rounded-full h-16 w-16">
                                        <FaUser size={36} className="text-black" />
                                    </div >
                                    <div className="p-2">
                                        <strong ><p className="text-black text-[1.5rem]" name="post-user-name">Usuario Teste</p></strong>
                                    </div>
                                </div>
                                <div className="p-2" name="post-user-date">
                                    <p className="text-[#818181]">{new Date().toLocaleString("en-GB")}</p>
                                </div>
                            </div>
                            <div name="post-body" className="p-2 w-[80%] justify-self-center">
                                <div name="post-body-text-content" >
                                    <textarea maxLength={500} className="text-[1.2rem] w-full text-black border-2 border-black rounded-xl" rows={3}>
                                    </textarea>
                                </div>
                                <div name="post-body-file-content" className=" hidden ">

                                </div>
                            </div>
                            <div name="post-likes" className="text-black flex justify-between p-2 mt-6">
                                <div name="post-likes-like" className="flex items-center px-2">
                                    <Button classe="bg-[#2400FF] text-white text-[1.2rem] border px-6 border-black py-1 rounded-full" titulo="Anexar" />
                                </div>
                                <div name="post-likes-heart" className="flex justify-between items-center px-2">
                                    <button className="bg-white text-black text-[1.2rem] border px-6 border-black py-1 rounded-full mx-2" titulo="Cancelar" onClick={() => { setHidden(false) }} >
                                        Cancelar
                                    </button>
                                    <Button classe="bg-[#2400FF] text-white text-[1.2rem] border px-6 border-black py-1 rounded-full mx-2" titulo="Post" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <section name="post-container" className="bg-white flex-col rounded border-[4px] border-[#2400FF] m-4 flex items-center justify-center">
                {posts.map((post, index) => {
                    let { usuario: { nome }, dataPostagem, conteudo, likes, compartilhamento, ameis, id } = post;
                    dataPostagem = new Date(dataPostagem).toLocaleString("en-GB")
                    return <div key={post.id} className="bg-white w-[80%]  border-[1px] border-[#2400FF] m-2 rounded-lg" >
                        <div name="postagem" className="grid">
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
                                <div name="post-likes-coment" className="flex items-center px-2" onClick={handleCommit}>
                                    <div className="bg-black p-1 rounded block" post-reference={id}>
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
                        <div name={"postagem-comentario-" + id} className="hidden items-center justify-center ">
                            <div className="bg-[#f5f5f5]  border rounded border-[#2400FF] m-2">
                                <div className="grid border rounded border-[#2400FF] m-2">
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
                                        {/* 
                                            <div name="post-likes-share" className="flex items-center px-2">
                                                <div className="bg-black p-1 rounded">
                                                    <FaShare className="text-white" />
                                                </div>
                                                <div className="px-2">{compartilhamento}</div>
                                            </div> 
                                        */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </section>

            <button className="fixed z-20 bottom-5 bg-[#2400FF] p-2 rounded-2xl right-6" onClick={() => { setHidden(true) }}>
                <FaPlusCircle size={42} />
            </button>
            {/* <button className="fixed z-20 bottom-5 bg-[#2400FF] p-10 rounded-2xl right-6" onClick={}>

            </button> */}
        </main >
    )
};