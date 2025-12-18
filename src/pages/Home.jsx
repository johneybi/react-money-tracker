import { useState } from "react";
import { Plus, CreditCard } from "@phosphor-icons/react";
import piggyImg from "../assets/piggy.png";
import AddExpenseModal from "../components/AddExpenseModal";

function Home({ userInfo, addExpense }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const balance = userInfo.budget - userInfo.expense;

    return (
        <div className="flex flex-col h-full bg-gray-100 overflow-hidden">
            {/* Sticky White Header */}
            <header className="page-header shrink-0 bg-white z-40 h-16 flex items-center justify-between px-6 border-b-2 border-gray-200">
                <h1 className="text-xl font-black uppercase tracking-tighter text-slate-900">용돈관리</h1>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center hover:scale-110 active:scale-90 transition-all shadow-none"
                >
                    <Plus size={24} weight="bold" />
                    <span className="sr-only">지출추가</span>
                </button>
            </header>

            {/* Massive Piggy Section - Adjusted for No-Scroll */}
            <section className="relative h-[42vh] shrink-0 bg-emerald-500 overflow-hidden flex flex-col items-center justify-center pt-2">
                {/* Decorative Geometric Shapes */}
                <div className="absolute top-[-10%] right-[-15%] w-80 h-80 bg-white/10 rounded-full" />
                <div className="absolute bottom-[-15%] left-[-10%] w-72 h-72 bg-slate-900/5 rotate-[30deg]" />
                <div className="absolute top-[20%] left-[5%] w-12 h-12 border-4 border-white/20 rounded-full" />
                
                <img 
                    src={piggyImg} 
                    alt="Piggy Bank" 
                    className="w-[40vh] mx-auto object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.3)] transition-transform hover:scale-105 duration-700 relative z-10"
                />

            </section>

            {/* Content Layout - Compact for No-Scroll */}
            <main className="flex-1 p-5 min-h-0 overflow-y-auto flex flex-col max-w-md mx-auto w-full">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-emerald-500 border border-gray-100 shrink-0">
                            <CreditCard size={20} weight="bold" />
                        </div>
                        <h2 className="font-medium text-lg text-slate-800 tracking-tight">
    <span className="font-bold">{userInfo.name}</span>님의 이번달 소비
</h2>
                    </div>

                    <div className="bg-white rounded-2xl mt-4 p-6 border-b-4 border-gray-200 hover:scale-[1.02] transition-transform">
                        <p className="text-sm font-black uppercase text-gray-400 mb-0.5">전체 소비</p>
                        <div className="text-4xl font-black text-emerald-500 tracking-tighter">
                            {userInfo.expense.toLocaleString()}<span className="text-xl ml-1 text-slate-800 font-bold">원</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-3 py-3 border-t border-gray-100 mt-2">
                        <span className="text-medium font-bold text-gray-400 ">남은 금액</span>
                        <span className="text-lg font-black text-slate-800 tracking-tighter">{balance.toLocaleString()}원</span>
                    </div>
                </div>
            </main>

            {/* Modal Portal */}
            {isModalOpen && (
                <AddExpenseModal 
                    onClose={() => setIsModalOpen(false)} 
                    onAddExpense={addExpense} 
                />
            )}
        </div>
    );
}

export default Home;