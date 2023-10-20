import React from "react"
import Button from "@/components/button";
import { FaUser } from "react-icons/fa6";

export default function Modal({ isVisible }) {
    if (!Number(isVisible)) {
        return null;
    };
    return (
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
                            <Button classe="bg-white text-black text-[1.2rem] border px-6 border-black py-1 rounded-full mx-2" titulo="Cancelar" click={() => { setHidden(true) }} />
                            <Button classe="bg-[#2400FF] text-white text-[1.2rem] border px-6 border-black py-1 rounded-full mx-2" titulo="Post" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}