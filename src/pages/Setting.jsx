import { useState } from "react";
import { Gear, User, Coins, Check } from "@phosphor-icons/react";

function Setting({ userInfo, onUpdate }) {
    const [name, setName] = useState(userInfo.name);
    const [budget, setBudget] = useState(userInfo.budget);

    const handleSave = () => {
        onUpdate({
            name: name,
            budget: Number(budget)
        });
        // Visual feedback could be added here
        alert("설정이 저장되었습니다!");
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 pb-20 font-body">
            {/* 1. Consistent Header */}
            <header className="page-header sticky top-0 bg-white z-40 h-16 flex items-center justify-between px-6 border-b-2 border-gray-200">
                <h1 className="text-xl font-black uppercase tracking-tighter text-slate-900">환경 설정</h1>
                <div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center">
                    <Gear size={24} weight="bold" />
                </div>
            </header>

            <main className="p-6 space-y-8 max-w-md mx-auto w-full">
                {/* 2. Profile Section Title */}
                <div className="flex items-center gap-2 px-1">
                    <User size={20} weight="bold" className="text-emerald-500" />
                    <h2 className="text-sm font-black text-slate-800 tracking-tight italic uppercase">Profile Settings</h2>
                </div>

                {/* 3. Input Container (Card Style) */}
                <section className="bg-white rounded-[32px] p-8 border-b-4 border-gray-200 space-y-8">
                    {/* Name Input */}
                    <div className="space-y-3">
                        <label 
                            htmlFor="user_name" 
                            className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 flex items-center gap-2"
                        >
                            User Name
                        </label>
                        <div className="relative group">
                            <input 
                                type="text" 
                                id="user_name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                className="w-full h-14 px-4 bg-gray-100 rounded-xl font-bold text-slate-900 focus:bg-white focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all"
                                placeholder="이름을 입력하세요"
                            />
                        </div>
                    </div>

                    {/* Budget Input */}
                    <div className="space-y-3">
                        <label 
                            htmlFor="user_budget" 
                            className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 flex items-center gap-2"
                        >
                            Monthly Budget
                        </label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                                <Coins size={20} weight="bold" />
                            </div>
                            <input 
                                type="number" 
                                id="user_budget" 
                                value={budget} 
                                onChange={e => setBudget(e.target.value)}
                                className="w-full h-14 pl-12 pr-4 bg-gray-100 rounded-xl font-bold text-slate-900 focus:bg-white focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all"
                                placeholder="예산을 입력하세요"
                            />
                        </div>
                    </div>
                </section>

                {/* 4. Save Button (Design System: Primary Button) */}
                <button 
                    onClick={handleSave}
                    className="w-full h-16 bg-emerald-500 text-white font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-600 hover:scale-[1.03] active:scale-95 transition-all shadow-none"
                >
                    <Check size={24} weight="bold" />
                    저장하기
                </button>
            </main>
        </div>
    );
}

export default Setting;