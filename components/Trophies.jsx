import Image from "next/image";
import trophy from "../public/trophy.png"

const Trophies = ({ playerData }) => {
    const trophies = playerData.leagueStatistics
    const wins = playerData.wins;
    const losses = playerData.losses


    return ( 
        <div className="shadow-lg w-1/4 h-auto py-8 mx-8 flex gap-y-2 items-left">
            <div className="flex flex-col w-1/2 gap-10 p-x-4">
                <header className="flex items-center justify-center">
                    <h1 className="font-bold text-lg">Trophies</h1>
                    <Image src={trophy} height="25" width="30" alt="Image of trophy"/>
                </header>

                <div className="flex flex-col gap-y-4 justify-between items-center">
                    <p>Current Trophies:<span className="font-semibold text-lg"> {trophies.currentSeason.trophies}</span></p>
                    <p>Best Trophies:<span className="font-semibold text-lg"> {trophies.bestSeason.trophies}</span></p>
                </div>
            </div>

            <div className="flex flex-col w-1/2 gap-y-10">
                <header className="flex items-center justify-center">
                    <h1 className="font-bold text-lg">Win/Loss</h1>
                </header>

                <div className="flex flex-col gap-y-4 justify-between items-center">
                    <p>Wins:<span className="font-semibold text-lg"> {wins}</span></p>
                    <p>Losses:<span className="font-semibold text-lg"> {losses}</span></p>
                    <p>W/L Ratio:<span className="font-semibold text-lg"> {Math.round(wins/losses * 100)/ 100}</span></p>

                </div>
            </div>

        </div>
     );
}
 
export default Trophies;