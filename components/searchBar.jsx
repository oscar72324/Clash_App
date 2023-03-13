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
    return ( 
    <div>
        <div className="h-[50vh] w-full flex flex-col gap-y-20">
            <div className=" h-full">
                <div className="absolute z-10 left-[50%] top-[50%]">
                        
                        {searchType == "players" ? <form onSubmit={formSubmit} className="relative left-[-50%] flex border-4 border-teal-200 rounded-full bg-white">
                            <input
                                placeholder="Enter player id  without #"
                                onChange={inputValue}
                                
                                value={input} 
                                className="text-xl font-bold border-none w-[500px] p-4 grow focus:outline-none rounded-l-full" 
                            />
                            <button className="bg-green-300 rounded-full px-8 font-semibold text-lg">
                                <Link href={input == null ? `../player/${input}` : `../player/2UYU2GJ9`} >Search Player</Link>
                            </button>
                        </form> : 
                        <form onSubmit={formSubmit} className="relative left-[-50%] flex border-4 border-teal-200 rounded-full bg-white">
                            <input
                                placeholder="Enter clan name"
                                onChange={inputValue}
                                
                                value={input} 
                                className="text-xl font-bold border-none w-[500px] p-4 grow focus:outline-none rounded-l-full" 
                            />
                            <button className="bg-green-300 rounded-full px-8 font-semibold text-lg">
                                <Link href={input == null ? `../clans/${input}` : `../clans/c.loe`} >Search Clan</Link>
                            </button>
                        </form>
                        }
                </div>
                <Image className="w-10/12 h-full rounded-3xl m-auto object-fit shadow-2xl blur-sm " src={hero}  alt="hero banner" />
            </div>
            <div className="w-[350px] flex text-center mx-auto items-center justify-center gap-x-8 text-xl font-bold">
                <button className="hover:underline" onClick={() => setSearchType("players")}>Search Players</button>
                <button className="hover:underline" onClick={() => setSearchType("clans")}>Search Clans</button>
            </div>
        </div>
    </div>
     );
}
 
export default SearchBar;