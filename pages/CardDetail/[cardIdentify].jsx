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
    
    
    return ( 
      <div className="flex w-full h-[75vh] justify-center items-center">
        <Image className="max-xl:right-[-10%] max-lg:top-[50%] max-md:hidden absolute top-[35%] right-[0%] w-[250px] lg:w-[500px]" src={background} height="100" width="1000" alt="image of card"/>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-around items-center">
          <Image className="max-md:w-full w-1/2 " src={image} height="100" width="1000" alt="Picture of troop"/>
        </div>

        <div className="max-md:w-full w-2/3 pl-8">
          <div className="max-md:w-full w-1/2 lg:w-1/3 max-sm:flex-col flex max-md:justify-between md:flex-col max-md:items-center">
            <ul className="text-sm lg:text-lg py-4 h-[300px] flex flex-col  max-md:justify-center">
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
            <p className="text-sm font-semibold w-full max-md:px-4 text-center">
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

    const token = `${process.env.CLASH_ROYALE_API}`


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