import Header from "../components/Header"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();


  return (
    <main className="absolute w-full h-screen flex flex-col justify-start items-center  mx-auto">

      <Header />
      <div className="max-w-[1360px] py-24 flex flex-row items-center justify-start">
        {/* <h1 className="text-8xl  flex-col font-bold text-violet-600">Jarwiz</h1> */}
        <div className="w-3/5 space-y-4">
          <h2 className="text-8xl font-bold  ">
            Make your life easier with Jarwiz
          </h2>
          <p className="pr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat odit soluta nam veniam, doloribus harum reiciendis qui saepe aliquam.</p>
          <p className="mb-8">Working in progress 👷‍♂️🛠️</p>
          <div className="flex flex-row items-center justify-start space-x-4">
            <button onClick={() => {
              navigate('/login')
            }} className="px-8 py-2 rounded-md bg-violet-600 text-white font-semibold hover:cursor-pointer">
              Login
            </button>
            <p className="font-bold ">See more</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

