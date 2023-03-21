import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import trophy from "../../../public/trophy.png"
import { useState } from "react";



const ClanResults = ({ clanData, name }) => {

    const [currentPage, setCurrentPage] = useState(0)
    const pages = clanData.items.reduce((acc, cur, i) => {
        const pageIndex = Math.floor(i / 20);
        if(!acc[pageIndex]) {
            acc[pageIndex] = [];
        }
        acc[pageIndex].push(cur);
        return acc;
    }, []);

    const currentPageItems = pages[currentPage] || [];

    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === pages.length - 1;

    // // / // / / // //////////////////////////////////////////////////////////////

    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const clan = router.query.clanName
    const searchClan = clanData.items
    const clanId = searchClan.map(id => id.tag.replace('#', ''))
    // router.push(`/clans/${clanId}`)

    return ( 
        <div className="m-2 p-2 md:m-2 md:p-8 flex flex-col">
            <h1 className="font-light text-3xl md:text-5xl text-left pb-20">Results: <span className="text-lg md:text-2xl font-semibold pl-8">"{name}"</span></h1>


            <table className="w-full mb-8 border-gray-400">
            <thead>
            <tr className=" text-left text-sm md:text-lg">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Clan Score</th>
                <th className="px-4 py-2">Members</th>
                <th className="max-[350px]:hidden px-4 py-2">Location</th>
            </tr>
            </thead>
            <tbody className="">
            {currentPageItems.map((clan) => (
                <tr className=" hover:bg-gray-200 w-full border-gray-300 border-b-2 text-sm md:text-lg" key={clan.name}> 
                    <td className=" px-4 py-2">
                        <Link href={`/clans/${clan.name}/members/${clan.tag.replace("#", "")}`} className="flex flex-col text-xs md:text-lg">
                        <p className="text-cyan-900">{clan.name}</p>
                        </Link>
                    </td>
                    <td className=" px-4 py-2">
                        <p className="flex items-center gap-2">
                            <Image src={trophy} height="100" width="25" alt="Trophy image"/><span>{clan.clanScore}</span>
                        </p>
                    </td>
                    <td className=" px-4 py-2">{clan.members}</td>
                    <td className="max-[350px]:hidden px-4 py-2">{clan.location.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <div className="flex w-full justify-around">
            {!isFirstPage ? <button className="p-4 bg-teal-300 my-4 text-sm rounded-xl font-semibold hover:bg-teal-500 w-[90px] hover:text-white" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button> : ""}
            {!isLastPage ? <button className="p-4 bg-teal-300 my-4 text-sm rounded-xl font-semibold hover:bg-teal-500 w-[90px] hover:text-white" onClick={() => setCurrentPage(currentPage + 1)}>
                Next
            </button> : ""}
            </div>
        </div>
     );
}
 
export default ClanResults;

export async function getServerSideProps({ params }){
    const { clanName } = params

    const token = `${process.env.CLASH_ROYALE_API}`

    const res = await fetch(`https://api.clashroyale.com/v1/clans?name=${clanName}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
    })
    const data = await res.json();

    return {
        props: {
          clanData: data,
          name: clanName      
        }
      }
}