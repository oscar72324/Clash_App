import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import exp from "../../public/expLogo.png"
import Trophies from "@/components/Trophies";
import background from "../../public/playerBackgroundImage.jpg"
import League from "@/components/League";
import Deck from "@/components/Deck";

const PlayerDetail = (props) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const player = router.query.playerId

    const clan = props.playerData.clan

    return ( 
    <div className="h-auto w-full flex flex-col gap-y-28 overflow-hidden relative max-md:items-center">
        <Image className="hidden md:block 2xl:h-1/2 absolute top-[5%] right-[-15%] w-3/4  rounded-3xl h-2/5 lg:h-auto" src={background} alt="background image" width={"auto"} height={"auto"} priority/>

        <div className="shadow-2xl  md:w-1/3 h-auto max-[850px]:p-0 p-4 sm:p-4 mx-8 flex flex-col gap-y-2 max-md:w-3/4  items-left">
          <div className="flex text-left items-center pb-4">
            <h1 className="max-md:text-md  text-2xl px-2 font-extrabold">
              {props.playerData.name}
            </h1>

            <div className="relative inline-block">
            <div className="absolute text-center align-bottom h-full w-full">
                <p className=" inline-block text-white md:text-[15px] font-[beachwood] font-extrabold">
                  {props.playerData.expLevel}
                </p>
              </div>
              <Image className="block max-w-full h-auto w-[30px]" src={exp} width="500" height="auto" alt="Level Icon"/>
            </div>
          </div>

          <h1 className="max-md:text-lg text-2xl font-bold px-2">{clan.name}</h1>
          <h2 className="text-sm font-bold px-2">{props.playerData.role}</h2>
        </div>
        <div className="flex max-md:w-full max-md:items-center flex-col gap-12 justify-evenly items-start">
          <Trophies playerData={props.playerData}/>
          <League playerData={props.playerData}/>
        </div>
        <Deck playerData={props.playerData}/>


    </div>
     );
}

export default PlayerDetail;

export async function getServerSideProps({ params }){
    const { playerId } = params

    const token = `${process.env.CLASH_ROYALE_API}`
    
    const res = await fetch(`https://api.clashroyale.com/v1/players/%23${playerId}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
    })
    const data = await res.json();

    return {
        props: {
          playerData: data      
        }
      }
}