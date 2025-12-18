import { Wallet as WalletIcon, Receipt, CalendarBlank } from "@phosphor-icons/react";

function Wallet({ userInfo }) {
    const balance = userInfo.budget - userInfo.expense;

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 pb-20 font-body">
            {/* 1. Header (Restored to the cleaner version with icon box) */}
            <header className="page-header sticky top-0 bg-white z-40 h-16 flex items-center justify-between px-6 border-b-2 border-gray-200">
                <h1 className="text-xl font-black uppercase tracking-tighter text-slate-900">지갑 내역</h1>
                <div className="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center">
                    <WalletIcon size={24} weight="bold" />
                </div>
            </header>

            <main className="p-6 space-y-8 max-w-md mx-auto w-full">
                {/* 2. Bold Summary Section (Retained from Step 647) */}
                <section>
                    <div className="bg-emerald-500 rounded-[32px] p-8 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-none">
                        <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full" />
                        <div className="flex justify-between items-start relative z-10">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80">Available now</p>
                                <div className="text-4xl font-black tracking-tighter">
                                    {balance.toLocaleString()}<span className="text-xl ml-1 opacity-60">원</span>
                                </div>
                            </div>
                            <WalletIcon size={32} weight="duotone" className="opacity-40 group-hover:rotate-12 transition-transform" />
                        </div>
                    </div>
                </section>

                {/* 3. Transaction History (Retained from Step 647) */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2">
                            <Receipt size={20} weight="bold" className="text-emerald-500" />
                            <h2 className="text-sm font-black text-slate-800 tracking-tight italic uppercase">Transactions</h2>
                        </div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{userInfo.history.length} items</span>
                    </div>

                    <div className="space-y-3">
                        {userInfo.history.map(item => (
                            <div 
                                key={item.id}
                                className="bg-white rounded-2xl p-4 border-b-4 border-gray-200 flex items-center gap-4 hover:translate-x-1 transition-transform cursor-pointer"
                            >
                                <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex flex-col items-center justify-center font-black transition-colors group-hover:bg-emerald-50">
                                    <span className="text-[8px] text-gray-400 leading-none uppercase">{item.date.split('.')[1]}월</span>
                                    <span className="text-lg text-slate-800 leading-none">{item.date.split('.')[2]}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-black text-slate-800 tracking-tight truncate uppercase text-sm mb-0.5">{item.msg}</p>
                                    <div className="flex items-center gap-2">
                                        <CalendarBlank size={12} weight="bold" className="text-emerald-500" />
                                        <span className="text-[10px] font-bold text-gray-400">{item.date}</span>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-lg font-black text-rose-500 tracking-tighter">
                                        -{item.amount.toLocaleString()}원
                                    </p>
                                </div>
                            </div>
                        ))}

                        {userInfo.history.length === 0 && (
                            <div className="bg-white/50 border-4 border-dashed border-gray-200 rounded-[32px] p-16 text-center">
                                <p className="text-gray-400 font-black italic tracking-tight">지출 내역이 없습니다</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Wallet;