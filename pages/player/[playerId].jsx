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
    <div className="h-auto w-full flex flex-col gap-y-28 overflow-hidden relative">
        <Image className="absolute top-[5%] right-[-15%] w-3/4  rounded-3xl " src={background} alt="background image" width={"auto"} height={"auto"} priority/>

        <div className="shadow-2xl w-1/4 h-auto p-8 mx-8 flex flex-col gap-y-2 items-left">
          <div className="flex text-center items-center pb-4">
            <h1 className="text-3xl px-2 font-extrabold">
              {props.playerData.name}
            </h1>

            <div className="relative inline-block">
            <div className="absolute text-center align-bottom h-full w-full">
                <p className=" inline-block text-white text-[15px] font-[beachwood] font-extrabold">
                  {props.playerData.expLevel}
                </p>
              </div>
              <Image className="block max-w-full h-auto" src={exp} width="30" height="auto" alt="Level Icon"/>
            </div>
          </div>

          <h1 className="text-2xl font-bold px-2">{clan.name}</h1>
          <h2 className="text-sm font-bold px-2">{props.playerData.role}</h2>
        </div>
        <Trophies playerData={props.playerData}/>
        <League playerData={props.playerData}/>
        <Deck playerData={props.playerData}/>


    </div>
     );
}

export default PlayerDetail;

export async function getServerSideProps({ params }){
    const { playerId } = params

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVlZmJmMjVmLWNkMmUtNDIxYy1iYzYxLTdkMGVkYWRkYjY4OCIsImlhdCI6MTY3NzAwOTg2NCwic3ViIjoiZGV2ZWxvcGVyL2M2ZDI1ODY1LWY3NjItNzUwNS04YTU3LTE1NTMyZjc2MmFmMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3NS44Mi43OS41MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.-qfhLq8qtK9ArGyhYHdE3Xnpdz2YpYdiA49zuW_oomG7-123gMKo6Q1U64Ds1flQgL4zzemVkYW0cZ52G1bQ5g'

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