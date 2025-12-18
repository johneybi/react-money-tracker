import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white border-b-2 border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight transition-transform hover:scale-105">
                    <Link to="/" className="text-blue-600">로고</Link>
                </h1>
                <nav>
                    <ul className="flex items-center gap-10">
                        <li>
                            <Link to="/html" className="font-semibold text-gray-600 hover:text-blue-600 hover:scale-105 transition-all inline-block">Html</Link>
                        </li>
                        <li>
                            <Link to="/css" className="font-semibold text-gray-600 hover:text-blue-600 hover:scale-105 transition-all inline-block">Css</Link>
                        </li>
                        <li>
                            <Link to="/javascript" className="font-semibold text-gray-600 hover:text-blue-600 hover:scale-105 transition-all inline-block">Javascript</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;