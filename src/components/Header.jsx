import { NavLink } from 'react-router-dom';
import { HouseIcon, WalletIcon, GearIcon } from '@phosphor-icons/react';

function Header() {
    // Neumorphic Inset Shadow for active state on white background
    const shadowInset = "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]";

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-100 z-50 px-4">
            <ul className="h-full flex items-center justify-around gap-4">
                <li className="flex-1 h-16">
                    <NavLink 
                        to="/" 
                        title="Home"
                        className={({ isActive }) => `
                            flex flex-col items-center justify-center h-full rounded-2xl transition-all duration-300
                            ${isActive ? `${shadowInset} text-emerald-500` : 'text-gray-400 hover:bg-gray-50'}
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                <HouseIcon size={32} weight={isActive ? "fill" : "bold"} />
                                <span className="sr-only">Home</span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className="flex-1 h-16">
                    <NavLink 
                        to="/wallet" 
                        title="Wallet"
                        className={({ isActive }) => `
                            flex flex-col items-center justify-center h-full rounded-2xl transition-all duration-300
                            ${isActive ? `${shadowInset} text-emerald-500` : 'text-gray-400 hover:bg-gray-50'}
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                <WalletIcon size={32} weight={isActive ? "fill" : "bold"} />
                                <span className="sr-only">Wallet</span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li className="flex-1 h-16">
                    <NavLink 
                        to="/setting" 
                        title="Setting"
                        className={({ isActive }) => `
                            flex flex-col items-center justify-center h-full rounded-2xl transition-all duration-300
                            ${isActive ? `${shadowInset} text-emerald-500` : 'text-gray-400 hover:bg-gray-50'}
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                <GearIcon size={32} weight={isActive ? "fill" : "bold"} />
                                <span className="sr-only">Setting</span>
                            </>
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header;