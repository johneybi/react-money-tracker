import { useState } from "react";
import { X } from "@phosphor-icons/react";

function AddExpenseModal({ onClose, onAddExpense }) {
    const [amount, setAmount] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation: basic check for empty values
        if (!amount || !msg) {
            alert("금액과 내역을 모두 입력해주세요!");
            return;
        }

        onAddExpense(amount, msg);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm">
            <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-200 shadow-2xl">
                <header className="flex items-center justify-between p-6 bg-emerald-500 text-white border-b border-white/10">
                    <h2 className="text-xl font-black uppercase tracking-tight text-white">지출 내역 추가</h2>
                    <button onClick={onClose} className="hover:rotate-90 transition-transform">
                        <X size={24} weight="bold" />
                    </button>
                </header>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Amount Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">금액 (원)</label>
                        <input 
                            type="number" 
                            placeholder="0"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full h-14 px-4 bg-gray-100 rounded-xl font-bold text-slate-900 focus:bg-white focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-gray-300"
                        />
                    </div>

                    {/* Description Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">내역</label>
                        <input 
                            type="text" 
                            placeholder="어디에 쓰셨나요?"
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            className="w-full h-14 px-4 bg-gray-100 rounded-xl font-bold text-slate-900 focus:bg-white focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all placeholder:text-gray-300"
                        />
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="flex-1 h-16 bg-gray-100 text-slate-500 font-black uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-all"
                        >
                            취소
                        </button>
                        <button 
                            type="submit"
                            className="flex-[2] h-16 bg-emerald-500 text-white font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 hover:scale-[1.03] active:scale-95 transition-all"
                        >
                            추가하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddExpenseModal;
