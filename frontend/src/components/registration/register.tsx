"use client"

import ImgSlider from "@/components/common/imgslider";
import { useRouter } from 'next/navigation';
import React, { MouseEvent } from 'react';

export default function RegisterForm() {
    const router = useRouter();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName, email, password }),
        });

        if (response.ok) {
            router.push('/register/confirm');
        } else {
            console.error('Failed to send email.');
        }
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
                    <h2 className="text-center text-2xl font-bold mb-6">Cadastre-se grátis</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                                Nome completo
                            </label>
                            <input
                                name="fullName"
                                type="text"
                                id="fullName"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                E-mail
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Senha
                            </label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label>
                                <input
                                name="checkbox"
                                type="checkbox"
                                required
                                className="mr-2 leading-tight"
                                />
                                <span className="text-sm"> Concordo com <a href="/rules/terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"> Termos de Uso </a>e<a href="/rules/privacy-policy" target="_blank" rel="noopener noreferrer"  className="hover:text-green-500"> Política de Privacidade </a>
                                </span>
                            </label>
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
                    <p className="text-center text-sm text-gray-600">
                        Já tem cadastro? <a href="/login" className="text-blue-500 hover:text-blue-600">Acesse sua conta</a>
                    </p>
                </div>
            </div>
        </div>
    );
  }
  