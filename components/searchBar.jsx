import Link from "next/link";
import hero from "../public/Hero.jpg"
import Image from "next/image";
import { useState } from "react";


const SearchBar = (props) => {
    const [input, setInput] = useState('')
    const [searchType, setSearchType] = useState('players')

    const inputValue = (e) => {
        setInput(e.target.value)
    }

    const formSubmit = e => {
        e.preventDefault()
    } 
    console.log(process.env.CLASH_ROYALE_API)
    return ( 
    <div>
        <div className="h-[50vh] w-full flex flex-col gap-y-20 ">
            <div className=" h-full relative ">
                <div className="relative z-20 top-[50%]">
                        
                        {searchType == "players" ? 
                        <form onSubmit={formSubmit} className="relative  flex border-4 border-teal-200 rounded-full bg-white w-4/6 md:max-w-lg mx-auto">
                            <input
                                placeholder="Enter player id  without #"
                                onChange={inputValue}
                                
                                value={input} 
                                className="text-sm md:text-lg font-bold border-none w-1/2 md:w-full p-4 grow focus:outline-none rounded-l-full overflow-hidden" 
                            /><Link href={!input == null ? `../player/${input}` : `../player/2UYU2GJ9`} >
                            <button className="bg-green-300 rounded-full px-4 md:px-8 font-semibold text-sm h-full">
                                Search
                            </button></Link>
                        </form> : 
                        <form onSubmit={formSubmit} className="relative  flex border-4 border-teal-200 rounded-full bg-white w-5/6 md:max-w-lg mx-auto">
                            <input
                                placeholder="Enter clan name"
                                onChange={inputValue}
                                
                                value={input} 
                                className="text-sm md:text-lg font-bold border-none md:w-[500px] p-4 grow focus:outline-none rounded-l-full overflow-hidden" 
                            /> <Link href={!input == null ? `../clans/${input}` : `../clans/c.loe`} >
                            <button className="bg-green-300 rounded-full px-4 md:px-8 font-semibold text-xs md:text-sm h-full">
                               Search
                            </button></Link>
                        </form>
                        }
                </div>
                
                <Image className="w-10/12 h-[250px] md:w-10/12 md:h-full rounded-3xl m-auto object-fit shadow-2xl blur-sm " src={hero}  alt="hero banner" />
            </div>
            <div className=" max-[375px]:w-[150px] w-[350px] flex max-[375px]:flex-col  max-[375px]:gap-4 text-center mx-auto items-center justify-center gap-x-8 text-xl font-bold">
                <button className="hover:underline" onClick={() => setSearchType("players")}>Search Players</button>
                <button className="hover:underline" onClick={() => setSearchType("clans")}>Search Clans</button>
            </div>
        </div>
    </div>
     );
}
 
export default SearchBar;