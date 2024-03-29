import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  console.log("getServerSideProps called"); // Add a log message here

  try {
    const token = process.env.CLASH_ROYALE_API;

    const clashApi = await fetch("https://api.clashroyale.com/v1/cards", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
console.log(clashApi.status); // Output the HTTP status code
const clash = await clashApi.json();
console.log(clash);

    if (!clash || !clash.items) {
      throw new Error("No items found");
    }

    return {
      props: {
        clashCard: clash,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        clashCard: null,
      },
    };
  }
}

export default function Cards(props) {
  if (!props.clashCard) {
    return <div>Error: Failed to fetch data</div>;
  }

  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-wrap gap-4 p-4 justify-center rounded-lg items-center text-center w-[1000px] bg-white ">
        {props.clashCard.items.map((card) => (
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