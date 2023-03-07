import Image from "next/image";
import { useRouter } from "next/router";
import background from "../../public/CardBackground.png"

const CardDetailPage = (props) => {
    

    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const id = router.query.cardIdentify

    const card = props.cardData.find(p => p.id == id)

    const clashCard = props.clash.items.find(p => p.id == id)
    const image = clashCard.iconUrls.medium
    console.log(clashCard)
    
    
    return ( 
      <div className="flex w-full h-[75vh] justify-center items-center">
        <Image className="absolute top-[30%] right-[5%]" src={background} height="100" width="500"/>
        <div className="w-1/3 h-full flex flex-col justify-around items-center px-10">
          <Image className="" src={image} height="100" width="300" alt="Picture of troop"/>
        </div>

        <div className="w-2/3">
          <div className="w-1/3">
            <ul className="text-lg py-4 h-[300px] flex flex-col">
              <li className="pb-4 flex justify-between">Name: 
                <span className="pl-2 font-bold">{card.name}</span>
              </li>

              <li className="pb-4 flex justify-between">Elixir Cost: 
                <span className="pl-2 font-bold">{card.elixir}</span>
              </li>

              <li className="pb-4 flex justify-between">Rarity: 
                <span className="pl-2 font-bold">{card.rarity}</span>
              </li>

              <li className="pb-4 flex justify-between">Arena Unlock: 
                <span className="pl-2 font-bold">{card.arena}</span>
              </li>

              <li className="pb-4 flex justify-between">Type of Card: 
                <span className="pl-2 font-bold">{card.type}</span>
              </li>
            </ul>
            <p className="text-lg font-semibold w-2/3">
              {card.description}
              </p>
          </div>
        </div>
      </div>
     );
}
 
export default CardDetailPage;

export async function getServerSideProps({ params }) {
    const {cardId } = params
    const res = await fetch(`https://royaleapi.github.io/cr-api-data/json/cards.json`)
    const cardData = await res.json()

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVlZmJmMjVmLWNkMmUtNDIxYy1iYzYxLTdkMGVkYWRkYjY4OCIsImlhdCI6MTY3NzAwOTg2NCwic3ViIjoiZGV2ZWxvcGVyL2M2ZDI1ODY1LWY3NjItNzUwNS04YTU3LTE1NTMyZjc2MmFmMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3NS44Mi43OS41MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.-qfhLq8qtK9ArGyhYHdE3Xnpdz2YpYdiA49zuW_oomG7-123gMKo6Q1U64Ds1flQgL4zzemVkYW0cZ52G1bQ5g'


    const [royaleApi, clashApi] = await Promise.all([
      fetch("https://royaleapi.github.io/cr-api-data/json/cards.json"),
      fetch("https://api.clashroyale.com/v1/cards", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
    })]);
    const [royale, clash] = await Promise.all([
      royaleApi.json(),
      clashApi.json()
    ])



    console.log(clash)

    return {
      props: {
        cardData,
        clash
        // card
      },
    }
  }