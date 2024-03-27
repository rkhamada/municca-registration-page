"use client"

import ImgSlider from "@/components/common/imgslider";
import { redirect, useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

export default function Home() {
    const router = useRouter();
    const redirectToRegister = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push('/register');
       
    };
  
    return (

        <div className="flex flex-col items-center justify-center gap-4 w-full min-h-screen bg-gray-100">
            <div className="h-full min-h-24 w-full max-w-md flex justify-center items-center">
                <div className="w-[90%] h-12 max-h-12">
                    <ImgSlider />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full ">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-gray-700">
                    <h2 className="text-center text-2xl font-bold mb-6">Bem Vindo a Municca!</h2>   
                    <p className="text-center">Municca já está entre os seletos grupos de startups globais que participam como case de apps inovadores construídos através das tecnologias e servidores AWS</p>
                    <div className="w-full mt-10 flex justify-center">
                        <button onClick={redirectToRegister} className="text-center w-64 py-2 bg-green-500 text-white hover:bg-green-700 rounded-lg">REGISTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  