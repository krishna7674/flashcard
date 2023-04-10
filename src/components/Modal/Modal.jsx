import React, { useState } from "react";
import { BsShare, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { BiCopyAlt } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function Modal({ closeModal }) {
  const [url, setUrl] = useState(window.location.href);

  //Function To Copy Url to clipboard
  const copyUrl = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert("Link is Copied to clipboard.");
    });
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="mx-7 lg:w-96 lg:h-60 bg-slate-50 rounded-lg outline-none align-middle">
        <div className="flex  justify-end m-3 opacity-50 hover:opacity-100">
          <button onClick={() => closeModal(false)} className="close">
            <GrClose />
          </button>
        </div>

        <span className="text-lg font-semibold px-7">Share</span>

        <div className="my-4 px-7 flex items-center justify-center">
          <input
            className="border-2 rounded-md  w-full py-2 px-2 pr-3 font-semibold text-sm"
            type="text"
            defaultValue={url}
          />
          <button className="flex items-center justify-center opacity-60 mx-4">
            <BiCopyAlt
              onClick={copyUrl}
              className="text-2xl hover:opacity-70"
            />{" "}
            <BsShare className="text-lg ml-4" />
          </button>
        </div>
        <div className="icons">
          <ul className="flex items-center justify-around px-6 py-6">
            <div className="">
              <AiFillFacebook size={25} />
            </div>
            <div className="">
              <AiFillLinkedin size={25} />
            </div>
            <div className="">
              <BsWhatsapp size={25} />
            </div>
            <div className="">
              <BsTwitter size={25} />
            </div>
            <div className="">
              <AiOutlineMail size={25} />
            </div>
          </ul>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Modal;
