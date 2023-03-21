import Image from "next/image";
import trophy from "../public/trophy.png"

const Trophies = ({ playerData }) => {
    const trophies = playerData.leagueStatistics
    const wins = playerData.wins;
    const losses = playerData.losses


    return ( 
        <div className="shadow-lg max-md:w-3/4 md:w-1/3 h-auto py-8 mx-8 flex gap-y-2 items-left  px-6  gap-4h-full text-sm">
            <div className="flex flex-col w-1/2 gap-10 p-x-4">
                <header className="flex items-center justify-center">
                    <h1 className="max-md:text-lg font-bold text-sm lg:text-lg">Trophies</h1>
                    <Image className="w-[20px] lg:w-[30px]" src={trophy} height="25" width="500" alt="Image of trophy"/>
                </header>

                <div className="flex flex-col gap-y-4 justify-between items-start px-2">

                    {trophies ? <p>Current Trophies:
                        {trophies.currentSeason.trophies ? <span className="font-semibold text-sm lg:text-md"> {trophies.currentSeason.trophies}</span> : <span className="font-semibold text-lg">N/A</span>}
                    </p> :  
                        <p>Current Trophies:
                            <span className="font-semibold text-lg"> N/A</span>
                        </p>}

                    {trophies ? <p>Best Trophies:
                        {trophies.bestSeason.trophies ? <span className="font-semibold text-sm lg:text-md "> {trophies.bestSeason.trophies}</span> : <span>N/A</span>}
                    </p> : 
                    <p>Best Trophies:
                        <span className="font-semibold text-lg"> N/A</span>
                    </p>}

                </div>
            </div>

            <div className="flex flex-col w-1/2 gap-y-10 px-2">
                <header className="flex items-center justify-center">
                    <h1 className="font-bold text-sm lg:text-lg">Win/Loss</h1>
                </header>

                <div className="flex flex-col gap-y-4 justify-between items-end">
                    <p>Wins:<span className="font-semibold text-sm lg:text-md"> {wins}</span></p>
                    <p>Losses:<span className="font-semibold text-sm lg:text-md"> {losses}</span></p>
                    <p>W/L Ratio:<span className="font-semibold text-sm lg:text-md"> {Math.round(wins/losses * 100)/ 100}</span></p>

                </div>
            </div>

        </div>
     );
}
 
export default Trophies;