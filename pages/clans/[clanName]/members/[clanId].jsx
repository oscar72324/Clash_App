import Link from "next/link";
import { useRouter } from "next/router";
import trophy from "public/trophy.png"
import Image from "next/image";


const ClanDetails = ({ clanData }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const { clanId, clanName } = router.query;
    return ( 
        <div className="m-2 p-2 md:m-8 md:p-8">

          <header className="font-light text-5xl text-center pb-20">
            <h1>{clanName}</h1>
          </header>

          <table className=" w-full  border-gray-400">
            <thead>
              <tr className=" text-left text-sm md:text-lg">
                <th className="px-4 py-4 text-left">Rank</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Level</th>
                <th className="px-4 py-2">Trophies</th>
                <th className="max-[400px]:hidden px-4 py-2">Arena</th>
                <th className="max-md:hidden  md:w-[100px] md:px-4 md:py-2">Donations</th>
              </tr>
            </thead>
            <tbody className="">
              {clanData.items.map((player) => (
                <tr className=" hover:bg-gray-200 w-full border-gray-300 border-b-2  text-sm md:text-lg" key={player.tag}> 
                  <td className=" px-4 py-2">{player.clanRank} </td>
                  <td className=" px-4 py-2">
                    <Link href={`/player/${player.tag.replace('#', '')}`} className="flex flex-col text-xs md:text-lg">
                      <p className="text-cyan-900">{player.name}</p>
                      <span className="text-xs first-letter:uppercase">{player.role}</span>
                    </Link>
                  </td>
                  <td className=" px-4 py-2">{player.expLevel}</td>
                  <td className=" px-4 py-2">
                    <p className="flex items-center gap-2">
                        <Image className="" src={trophy} height="100" width="25" alt="Trophy image"/><span>{player.trophies}</span>
                    </p>
                  </td>
                  <td className="max-[400px]:hidden px-4 py-2">{player.arena.name}</td>
                  <td className="hidden md:block md:px-4 md:py-2 ">{player.donations}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
     );
}
 
export default ClanDetails;

export async function getServerSideProps({ params }){
    const { clanId } = params

    const token = `${process.env.CLASH_ROYALE_API}`

    const res = await fetch(`https://api.clashroyale.com/v1/clans/%23${clanId}/members`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
    })
    const data = await res.json();
    return {
        props: {
          clanData: data,     
        }
      }
}