export default function Navbar() {
    return (
        <nav className="bg-black text-white p-5 shadow-md w-screen ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-xl font-bold">Kelvin Ferrell Tjoe</span>
                </div>
                <ul className="flex space-x-4 text-lg font-semibold">
                    <li><a href="#home" className="hover:text-gray-400 cursor-pointer">Home</a></li>
                    <li><a href="#sbd" className="hover:text-gray-400 cursor-pointer">Profile</a></li>
                    <li><a href="#dmj" className="hover:text-gray-400 cursor-pointer">Contact</a></li>
                    <li><a href="#os" className="hover:text-gray-400 cursor-pointer">About</a></li>
                </ul>
            </div>
        </nav>
    );
}