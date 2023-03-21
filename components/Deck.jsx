import Image from "next/image";

const Deck = ({ playerData }) => {
    const currentDeck = playerData.currentDeck;
    const favoriteCard = playerData.currentFavouriteCard

    return ( 
        <div className="flex flex-col items-center gap-y-8 mb-8 ">
            <h1 className="font-bold text-3xl">Favorite Card</h1>
            <div className="flex gap-8">
                {<Image src={favoriteCard.iconUrls.medium} width="100" height="100" alt="Image of users' favorite card"/>}
            </div>

            <h1 className="font-bold text-3xl">Current Deck</h1>
            <div className="flex gap-8 w-full justify-center flex-wrap">
            {currentDeck.map(deck => (
                    <Image className="w-[100px]" src={deck.iconUrls.medium} width="500" height="100" key={deck.id} alt="Images of Current deck"/>
            ))}
            </div>
        </div>
     );
}
 
export default Deck;