import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image
          src="https://img.freepik.com/free-photo/3d-render-camera-icon_460848-6898.jpg"
          width={150}
          height={150}
          alt="logo"
        />
      </Link>

      <div className="flex items-center space-x-2.5 text-sm ">
        <button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">
          Log In
        </button>
        <button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
