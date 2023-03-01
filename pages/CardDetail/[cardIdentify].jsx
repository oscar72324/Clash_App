import { useRouter } from "next/router";

export 

const CardDetailPage = () => {
    const router = useRouter();
    const id = router.query.cardIdentify

    return ( 
        <div>This is the details page for {id}</div>
     );
}
 
export default CardDetailPage;

