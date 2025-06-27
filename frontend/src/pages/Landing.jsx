import { Link } from "react-router-dom"
const Landing = () => {
  return (
    <div className="relative w-full h-screen">
        <img className="w-full h-full object-cover" src="https://sustainabilitynook.com/wp-content/uploads/2022/06/Photo-by-oceancleanupgroup-on-Unsplash.jpg" alt="" />
    
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 px-4 w-full h-screen">
         <h1 className="text-white font-extrabold text-5xl md:text-6xl">EcoCatalyst</h1>
         <p className="text-white text-xl md:text-2xl mb-8">Clean Beaches, Brighter Future</p>
         <div className="flex gap-4">
            <Link to="/volunteer">
                <button className="bg-green-500 hover:bg-green-700 cursor-pointer shadow-xl rounded-3xl px-6 py-3 text-1xl text-white font-semibold transition duration-300">
                    Volunteer
                </button>
            </Link>
            <Link to="/Organizer">
                <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer shadow-lg rounded-3xl px-6 py-3 text-1xl text-white font-semibold transition duration-300">
                    Organizer
                </button>
            </Link>
         </div>
        </div>
    </div>
  )
}

export default Landing
