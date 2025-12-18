import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Home from "./pages/Home"
import Wallet from "./pages/Wallet"
import Setting from "./pages/Setting"

function App() {
  const [userInfo, setUserInfo] = useState({
    name : '사용자',
    budget : 1000000,
    expense : 0,
    history : []
  });

  const addExpense = (amount, msg) => {
    const newExpense = Number(amount);
    const newHistoryItem = {
      id: Date.now(),
      amount: newExpense,
      msg: msg,
      date: new Date().toLocaleDateString()
    };

    setUserInfo(prev => ({
      ...prev,
      expense: prev.expense + newExpense,
      history: [newHistoryItem, ...prev.history]
    }));
  };

  const updateUserInfo = (newData) => {
    setUserInfo(prev => ({ ...prev, ...newData }));
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden pb-[68px]">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home userInfo={userInfo} addExpense={addExpense} />} />
          <Route path="/wallet" element={<Wallet userInfo={userInfo} />} />
          <Route path="/setting" element={<Setting userInfo={userInfo} onUpdate={updateUserInfo} />} />
        </Routes>
      </div>
      <Header />
    </div>
  )
}

export default App
