import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();


  return (
    <div className="sticky w-full top-0 z-10 mx-auto ">
      <header className="flex justify-center border-b-[0.1px] border-black/10 py-4 ">
        <div className="w-full max-w-[1360px] px-4  flex justify-between">
          <div className="flex items-center justify-center">
            <h1 className="text-xl  flex-col font-bold text-violet-600">Jarwiz</h1>
            {/* <span></span> */}
          </div>
          <div className="flex md:flex-row flex-row-reverse space-x-3  items-center justify-center">
            
            <ul className="hidden md:flex space-x-3 leading-snug font-medium">
              <a href="/#experience">
                <li className="hover:text-violet-600 hover:cursor-pointer">Services</li>
              </a>
              <a href="/#projects">
                <li className="hover:text-violet-600 hover:cursor-pointer">About Us</li>
              </a>
              <a href="/blog">
                <li className="hover:text-violet-600 hover:cursor-pointer">Blog</li>
              </a>
            </ul>
            <span className="h-[60%] border-none md:border  border-white/10 border-l-white/10 "></span>
          </div>
          <div>
            <button onClick={() => {
              navigate('/login')
            }} className="px-8 py-2 rounded-md bg-violet-600 text-white font-semibold hover:cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}
