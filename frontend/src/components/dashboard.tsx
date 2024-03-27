"use client"

import React from 'react';
import '@/styles/dashboard.css';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const router = useRouter();
    function redirectToHome( ) {
        router.push("/");
    };

  return (
    <div className="dashboard text-gray-600">
        <aside className="sidebar">
            <div className="logo-container">
                <img src="/images/municca_logo.png" alt="Municca logo" />
            </div>
            <nav className="navigation">
                <ul>
                    <li>Início</li>
                    <li>Documentos</li>
                    <li>Pastas</li>
                    <li>Relatórios</li>
                    <li>Configurações</li>
                </ul>
                <button onClick={redirectToHome} className="absolute bottom-10 lg:bottom-16 left-10 flex gap-2 items-center">
                    <img src="/images/icon-logout-red.svg" alt="logout icon" />
                    <span>logout</span>
                </button>
                <div className='absolute bottom-20 lg:bottom-10 left-10 lg:left-36'>
                    <img src="/images/user-picture.png" alt="user picture" className='w-20'/>
                </div>
            </nav>
        </aside>
        <main className="main-content">
            <header className="w-full h-[14vh] overflow-hidden flex justify-end items-center pr-12">
                <img src="/images/rkenji_logo.png" alt="rkenji logo" className="w-44" />
            </header>
            <section className="statistics">
            <div className="statistic-card">
                <span className="number">0</span>
                <span className='text-green-500 font-bold'>Finalizados</span>
            </div>
            <div className="statistic-card">
                <span className="number">2</span>
                <span className='text-yellow-500 font-bold'>Em curso</span>
            </div>
            <div className="statistic-card">
                <span className="number">0</span>
                <span className='text-red-500 font-bold'>Recusados</span>
            </div>
            <div className="statistic-card view-all flex items-center justify-center">
                <span className="label">Ver todos</span>
            </div>
            </section>
        </main>
    </div>
  );
};

export default Dashboard;
