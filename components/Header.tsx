import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#001D61] flex items-center px-6 py-5 justify-between">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-2xl text-white font-bold hover:tracking-widest duration-300"
        >
          FitControl
        </Link>
      </div>
      <nav className="flex gap-8 text-white">
        <Link
          className="text-lg font-semibold hover:text-white hover:bg-sky-700 px-3 py-1 rounded-md duration-300"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="text-lg font-semibold hover:text-white hover:bg-sky-700 px-3 py-1 rounded-md duration-300"
          href="/alunos"
        >
          Alunos
        </Link>
        <Link
          className="text-lg font-semibold hover:text-white hover:bg-sky-700 px-3 py-1 rounded-md duration-300"
          href="/instrutores"
        >
          Instrutores
        </Link>
        <Link
          className="text-lg font-semibold hover:text-white hover:bg-sky-700 px-3 py-1 rounded-md duration-300"
          href="/treinos"
        >
          Treinos
        </Link>
      </nav>
      <div className="flex items-center">
        <Image
          src="/profile-pic.jpg"
          alt="Foto de perfil"
          className="h-10 w-10 rounded-full border-2 border-white"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
};

export default Header;
