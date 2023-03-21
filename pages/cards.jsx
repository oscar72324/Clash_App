import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cards(props) {
  const [clashCard, setClashCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClashCards = async () => {
      try {
        const token = process.env.CLASH_ROYALE_API;

        const clashApi = await fetch("https://api.clashroyale.com/v1/cards", {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        });

        const clash = await clashApi.json();

        if (!clash || !clash.items) {
          throw new Error("No items found");
        }

        setClashCard(clash);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch data");
      }
    };

    fetchClashCards();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!clashCard) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-wrap gap-4 p-4 justify-center rounded-lg items-center text-center w-[1000px] bg-white ">
        {clashCard.items.map((card) => (
          <Link
            key={card.id}
            className="flex flex-col h-[150px] font-bold"
            href={`./CardDetail/${card.id}?type=${card.iconUrls.medium}`}
          >
            {card.name}{" "}
            <Image
              className="p-0 h-4/5 w-[100px]"
              height="100"
              width="500"
              src={card.iconUrls.medium}
              alt="images of troops"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}