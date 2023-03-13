import Link from "next/link";
import { useRouter } from "next/router";

const ClanResults = ({ clanData }) => {
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const clan = router.query.clanName
    const searchClan = clanData.items
    const clanId = searchClan.map(id => id.tag.replace('#', ''))
    console.log(clanId)
    // router.push(`/clans/${clanId}`)

    return ( 
        <div className="">
            First page for {clan}
            {searchClan.map(clan => (
                <div key={clan.tag} className="flex gap-8 p-8">
                    <p>{clan.name}</p>
                    <p>{clan.clanScore}</p>
                    <p>{clan.members}</p>
                    <p>{clan.location.name}</p>
                </div>
            ))}
            <Link  href={`./${clan}/members/${clanId}`}>
                Details page
            </Link>
        </div>
     );
}
 
export default ClanResults;

export async function getServerSideProps({ params }){
    const { clanName } = params

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVlZmJmMjVmLWNkMmUtNDIxYy1iYzYxLTdkMGVkYWRkYjY4OCIsImlhdCI6MTY3NzAwOTg2NCwic3ViIjoiZGV2ZWxvcGVyL2M2ZDI1ODY1LWY3NjItNzUwNS04YTU3LTE1NTMyZjc2MmFmMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3NS44Mi43OS41MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.-qfhLq8qtK9ArGyhYHdE3Xnpdz2YpYdiA49zuW_oomG7-123gMKo6Q1U64Ds1flQgL4zzemVkYW0cZ52G1bQ5g'

    const res = await fetch(`https://api.clashroyale.com/v1/clans?name=${clanName}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
    })
    const data = await res.json();

    return {
        props: {
          clanData: data      
        }
      }
}