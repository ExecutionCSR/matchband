import Image from "next/image";
import Header from "../header/page";
import IconeUser from "../../../public/icone_placeholder.png";
import { FaThumbsUp, FaHeart, FaShare } from "react-icons/fa6";
import { FaCommentAlt } from "react-icons/fa";
import PostImg from "../../../public/estabelecimento_placeholder.png";
import { IconContext } from "react-icons";

const TimeLine = () => {
    return (
        <main>
            <Header />
            <section name="post-container" className="bg-white w-[80%] rounded border-[1px] border-[#2400FF]">
                <div className="grid">
                    <div className="flex items-center justify-between p-2" name="post-user">
                        <div className="flex items-center" name="post-user-information">
                            <div name="post-user-img" className="p-2">
                                <Image src={IconeUser} />
                            </div >
                            <div className="p-2">
                                <strong ><p className="text-black text-[1.5rem]" name="post-user-name">Ozzy Ousbourne</p></strong>
                            </div>
                        </div>
                        <div className="p-2" name="post-user-date">
                            <p className="text-[#818181]">22/009/2023 11:22</p>
                        </div>
                    </div>
                    <div name="post-body" className="p-2 w-[80%] justify-self-center">
                        <div name="post-body-text-content" className="text-black">
                            <p className="text-[1.2rem]">Esse sábado estarei tocando alguns covers de Black Sabbath no Zanzibar, ás 20 da noite. Venham beber e ouvir um som em um dos melhores bares da capital. </p>
                    </div>
                    <div name="post-body-file-content">
                        <Image className="w-[30rem]" src={PostImg} />
                    </div>
                </div>
                <div name="post-likes" className="text-black flex p-2 mt-6">
                    <div name="post-likes-like" className="flex items-center px-2">
                        <div className="bg-black p-1 rounded">
                            <FaThumbsUp className="text-white" />
                        </div>
                        <div className="px-2">1.3K</div>
                    </div>
                    <div name="post-likes-heart" className="flex items-center px-2">
                        <div className="bg-black p-1 rounded">
                            <FaHeart className="text-white" />
                        </div>
                        <div className="px-2">3K</div>
                    </div>
                    <div name="post-likes-coment" className="flex items-center px-2">
                        <div className="bg-black p-1 rounded">
                            <FaCommentAlt className="text-white" />
                        </div>

                        <div className="px-2">2</div>
                    </div>
                    <div name="post-likes-share" className="flex items-center px-2">
                        <div className="bg-black p-1 rounded">
                            <FaShare className="text-white" />
                        </div>
                        <div className="px-2">500</div>
                    </div>
                </div>
            </div>
        </section>
        </main >
    )
}

export default TimeLine;