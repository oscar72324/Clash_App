import Image from "next/image";
import league from "../public/league.png"

const League = ({ playerData }) => {
    const trophies = playerData.leagueStatistics;
    // const trophiesTrue =
    // if (trophies){
    //     if(trophies.bestSeason){
    //         <span className="font-semibold text-lg">{trophies.currentSeason.trophies}</span>
    //     }else{
    //         'N/A'
    //     }
    // }else{
    //     'N/A'
    // }


// FIX TROPHIES BEING UNDEFINED // 

    return ( 
        <div className="shadow-md max-md:w-3/4 w-1/2  md:w-1/3 h-auto mx-8 flex flex-col gap-y-2 items-center justify-center">
            <div className="flex flex-row w-full gap-2 p-x-4 items-end justify-center">
                    <h1 className="max-md:text-lg font-bold text-sm lg:text-lg">League</h1>
                    <Image className="w-[40px] lg:w-[50px]" src={league} width="500" alt="Pekka background" height={"auto"}/>
            </div>

            <div className="flex flex-col gap-y-4 justify-between items-center w-full h-full">
                <ul className="w-full px-6 py-6 gap-4 flex flex-col justify-evenly h-full">
                    {trophies ? <li className="flex  justify-between"> <p className=" text-sm lg:text-md">Best Season</p>
                        {trophies.bestSeason ? 
                            <span className="font-semibold  text-sm lg:text-md"> 
                                {trophies.bestSeason.id}
                            </span> : 'N/A'}
                        </li> : <li className="flex  justify-between"> 
                        <p>Best Season</p>
                        <span className="font-semibold text-lg"> N/A</span>
                        </li>}

                    {trophies ? <li className="flex  justify-between">
                        <p className=" text-sm lg:text-md">Current Season Trophies</p>
                        {trophies.currentSeason ? <span className="font-semibold  text-sm lg:text-md">{trophies.currentSeason.trophies}</span> : 'N/A' }
                    </li> : <li className="flex  justify-between">
                    <p>Current Season Trophies</p>
                    <span className="font-semibold  text-sm lg:text-md">N/A</span>
                        </li>}

                    {trophies ? <li className="flex  justify-between">
                        <p className=" text-sm lg:text-md">Previous Season Trophies</p>

                        {trophies.previousSeason ? <span className="font-semibold  text-sm lg:text-md">{trophies.previousSeason.trophies}</span>: 'N/A'}
                    </li> : <li className="flex  justify-between">
                    <p>Previous Season Trophies</p>
                    <span className="font-semibold  text-sm lg:text-md">N/A</span>
                        </li>}

                   </ul>
            </div>

        </div>
     );
}
 
export default League;