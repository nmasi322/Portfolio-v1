import Image from "next/image";
import React from "react";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <div className="bg-themeBlack min-h-screen text-gray-300 px-5 xs:px-10 md:px-20 xl:px-40">
      <h1 className="extrabold text-2xl md:text-3xl text-center py-5">
        Divine Edeh - Her projects
      </h1>
      <div className="space-y-20 lg:space-y-10 relative mt-20 mx-auto w-full block mb-10">
        <div className="flex space-x-5 justify-end small md:worrk-header">
          <h1 className="black text-xl">01/06</h1>
          <a href="https://adedamola.netlify.app/">
            <div className="bg-portfolio worrk">
              <div className="not__main scale-[2] md:scale-[5] duration-700 text-themeYellow mt-[20rem] md:mt-[8rem]">
                <h1 className="text">Portfolio</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="flex space-x-5 small md:worrk-header">
          <h1 className="black text-xl">02/06</h1>
          <a href="https://velorian.herokuapp.com/">
            <div className="bg-velo worrk">
              <div className="not__main scale-[2] md:scale-[5] duration-700 md:text-themeYellow text-gray-700 mt-[20rem] md:mt-[8rem]">
                <h1 className="text">Velo</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="flex space-x-5 justify-end small md:worrk-header">
          <h1 className="black text-xl">04/06</h1>
          <a href="https://divine-nft-collection.vercel.app/">
            <div className="bg-web32 worrk">
              <div className="not__main scale-[2] md:scale-[5] duration-700 text-themeYellow mt-[20rem] md:mt-[8rem]">
                <h1 className="text">Web3</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="flex space-x-5 small md:worrk-header">
          <h1 className="black text-xl">03/06</h1>
          <a href="https://divine-whitelist-dapp.vercel.app/">
            <div className="bg-web31 worrk">
              <div className="not__main scale-[2] md:scale-[5] duration-700 md:text-themeYellow text-gray-700 mt-[20rem] md:mt-[8rem]">
                <h1 className="text">Web3</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="flex space-x-5 justify-end small md:worrk-header">
          <h1 className="black text-xl">05/06</h1>
          <a href="https://enuguagency.netlify.app/">
            <div className="bg-remita worrk">
              <div className="not__main scale-[2] md:scale-[5] duration-700 md:text-themeYellow text-gray-700 mt-[20rem] md:mt-[8rem]">
                <h1 className="text">Remita</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="flex md:space-x-5 small md:worrk-header">
          <h1 className="black text-xl">06/06</h1>
          <a href="https://github.com/nmasi322/Solana-Wallet">
            <div className="bg-solWallet worrk">
              <div className="not__main scale-[2] md:scale-[5] duration-700 md:text-themeYellow text-gray-700 mt-[20rem] md:mt-[8rem]">
                <h1 className="text">SolWallet</h1>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="mx-auto relative w-80">
        <BottomNav />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
