import Image from "next/image";
import league from "../public/league.png"

const League = ({ playerData }) => {
    const trophies = playerData.leagueStatistics;

    return ( 
        <div className="shadow-md w-1/4 h-auto py-8 mx-8 flex flex-col gap-y-2 items-center">
            <div className="flex flex-row w-full gap-2 p-x-4 items-end justify-center">
                    <h1 className="font-bold text-lg">League</h1>
                    <Image src={league} width="50" alt="Pekka background" height={"auto"}/>
            </div>

            <div className="flex flex-col gap-y-4 justify-between items-center w-full h-full">
                <ul className="w-full px-6 py-6 gap-4 flex flex-col justify-evenly h-full">
                    <li className="flex  justify-between">
                        <p>Best Season</p>
                        {trophies.bestSeason ?  <span className="font-semibold text-lg">{trophies.bestSeason.id}</span> : 'N/A'}
                    </li>
                    <li className="flex  justify-between">
                        <p>Current Season Trophies</p>
                        {trophies.currentSeason ? <span className="font-semibold text-lg">{trophies.currentSeason.trophies}</span> : 'N/A' }
                    </li>
                    <li className="flex  justify-between">
                        <p>Previous Season Trophies</p>
                        {trophies.previousSeason ? <span className="font-semibold text-lg">{trophies.previousSeason.trophies}</span>: 'N/A'}
                    </li>
                   </ul>
            </div>

        </div>
     );
}
 
export default League;