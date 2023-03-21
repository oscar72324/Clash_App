import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export async function getStaticProps(){
    const token = `${process.env.CLASH_ROYALE_API}`
    const res = await fetch("https://api.clashroyale.com/v1/locations/57000001/rankings/clans", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });

    const data = await res.json()


    return{
        props: {
            rankings: data,
        }
    }
}

const Rankings = ({ rankings }) => {
    const [currentPage, setCurrentPage] = useState(0)

    const pages = rankings.items.reduce((acc, cur, i) => {
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
    return ( 
        <div className="m-2 p-2 md:m-2 md:p-8 flex flex-col">
        <header className="font-semibold text-5xl text-center pb-20">
            <h1>
                Top Clans
            </h1>
        </header>
        <table className="w-full mb-8 border-gray-400">
            <thead>
            <tr className=" text-left">
                <th className="max-sm:text-sm px-4 py-4 text-left">Rank</th>
                <th className="max-sm:text-sm px-4 py-2">Name</th>
                <th className="max-sm:text-sm px-4 py-2">Clan Score</th>
                <th className="max-sm:text-sm px-4 py-2">Members</th>
                <th className="max-sm:text-sm max-[450px]:hidden px-4 py-2">Location</th>
            </tr>
            </thead>
            <tbody className="">
            {currentPageItems.map((clan) => (
                <tr className=" hover:bg-gray-200 w-full border-gray-300 border-b-2" key={clan.name}> 
                <td className="max-sm:text-[10px] px-4 py-2">{clan.rank} </td>
                <td className="max-sm:text-sm px-4 py-2">
                    <Link href={`/clans/${clan.name}/members/${clan.tag.replace("#", "")}`} className="max-sm:text-sm flex flex-col text-xl">
                    <p className="text-cyan-900">{clan.name}</p>
                    </Link>
                </td>
                <td className="max-sm:text-sm px-4 py-2">{clan.clanScore}</td>
                <td className="max-sm:text-sm px-4 py-2">{clan.members}</td>
                <td className="max-[450px]:hidden  px-4 py-2">{clan.location.name}</td>
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

export default Rankings;

