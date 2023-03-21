import Image from "next/image";

const Challenges = ({ challenges }) => {

    const mappedChal = challenges.map(chal => chal.challenges)
    const test = mappedChal.map(chal => chal.map(id => id))
    return ( 
    <div className="h-auto w-full">
        <div className="flex basis-1 items-center max-lg:flex-col lg:flex-wrap w-full h-full justify-around ">
            {mappedChal.map(chall => chall.map(data => 
            (<div key={data.id} className="w-5/6 lg:w-2/5 flex flex-col m-4 p-4 h-auto shadow-lg gap-4">
                    <Image src={data.iconUrl} className="max-sm:h-[150px] w-full h-full" width="500" height="100" alt="image of challenge" />

                    <header className="flex justify-between py-4 pr-4 text-left items-center">
                        <p className="font-bold text-sm sm:text-lg">{data.name}</p>
                         <ul className="font-semibold">
                            <li className="text-sm sm:text-lg">Max wins: <span className="text-sm font-light">{data.maxWins}</span></li>
                            <li className="text-sm sm:text-lg">Max Losses: <span className="text-sm font-light">{data.maxLosses}</span></li>
                         </ul>
                    </header>
                    <p className="py-4 text-sm font-light">{data.description}</p>
                    <div className="flex flex-col  gap-4 text-xs text-center flex-wrap justify-around font-light items-center">
                        <h1 className="font-bold text-sm sm:text-lg w-1/2 border-gray-300 border-b-2">Prizes</h1>
                        <table className="w-full ">
                            <thead>
                                <tr className=" text-center">
                                    <th className="max-sm:text-[10px] px-4 py-2">Type</th>
                                    <th className="max-sm:text-[10px] max-[325px]:hidden px-4 py-2">Amount</th>
                                    <th className="max-sm:text-[10px] px-4 py-2">Award</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.prizes.map(prize => (
                                    <tr className="w-full" key={Math.random()}>
                                        <td className="max-sm:text-[10px] px-4 py-2">{prize.type}</td>
                                        <td className="max-sm:text-[10px] max-[325px]:hidden px-4 py-2">{prize.amount ? prize.amount : "1"}</td>
                                        <td className="max-sm:text-[10px] px-4 py-2">{prize.resource ? prize.resource : 
                                            prize.consumableName ? prize.consumableName:
                                            prize.rarity ? prize.rarity : 
                                            prize.chest ? prize.chest : "none"}
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                </div>)
            )
            )}
        </div>
    </div> 
    );
}
 
export default Challenges;

export async function getServerSideProps(){
    const token = `${process.env.CLASH_ROYALE_API}`

    const res = await fetch("https://api.clashroyale.com/v1/challenges", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });

    const data = await res.json()
    
    return{
        props: {
            challenges: data,
        }
    }
}