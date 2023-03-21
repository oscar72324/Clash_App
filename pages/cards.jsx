import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps(){
  const token = `${process.env.CLASH_ROYALE_API}`

  const clashApi = await fetch("https://api.clashroyale.com/v1/cards", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
  });
  const clash = await clashApi.json()
  
    
    return {
      props: {
        clashCard: clash      
      }
    }
  }
  export default function Cards(props) { 
    return (
      <div className="flex justify-center py-20">
        <div className="flex flex-wrap gap-4 p-4 justify-center rounded-lg items-center text-center w-[1000px] bg-white ">
          {props.clashCard.items ? props.clashCard.items.map(card => (
            <Link key={card.id} className="flex flex-col h-[150px] font-bold" href={`./CardDetail/${card.id}?type=${card.iconUrls.medium}`}>
              {card.name} <Image className="p-0 h-4/5 w-[100px]" height="100" width="500" src={card.iconUrls.medium} alt="images of troops"/>
            </Link>
          )) : null}
        </div>
      </div>
    )
  }