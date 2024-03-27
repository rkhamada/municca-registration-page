"use client"

import React from 'react';
import ImgSlider from "@/components/common/imgslider";
import { useRouter } from 'next/navigation';

export default function ConfirmReg() {
    const router = useRouter(); 
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const emailCode = formData.get('code'); 
        if (emailCode === "ABCDEF") { 
            router.push("/dashboard");
        } else {
            alert('Wrong code! Please try again.')
        }        
    };
    
    async function getEmailCode(){
        try {
            const response = await(await fetch('http://localhost:3000/api/register/email-code')).json();
            const code = response;
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(code);
                alert('Code copied to clipboard!');
            } else {
                console.error('Clipboard API not available.');
            }
        } catch (error) {
          console.error('Failed to fetch or copy:', error);
        }
    }
  
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-full min-h-screen bg-gray-100">
            <div className="h-full min-h-24 w-full max-w-md flex justify-center items-center">
                <div className="w-[90%] h-12 max-h-12">
                    <ImgSlider />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full ">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-gray-700">
                    <h2 className="text-center text-2xl font-bold mb-6">Confirme seu Cadastro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="code" className="block text-gray-700 text-sm font-bold mb-2">
                                Digite abaixo o código enviado para o seu email
                            </label>
                            <input
                                name="code"
                                type="text"
                                id="code"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                            
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Confirmar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <button onClick={getEmailCode} className="text-white bg-red-500 hover:bg-red-700 p-3 rounded-xl mt-12">PLACEHOLDER <br /> chamada para pegar o código</button>
        </div>
    );
  }
  