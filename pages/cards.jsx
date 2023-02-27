export async function getStaticProps(){
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

    
    return{
      props: {
        royalCard: royale,
        clashCard: clash
      }
    }
  }

  export default function Cards(props) {
    // let result = props.royalCard.map(card => {
    //   let clashId = props.clashCard.items.find(ele => ele.id === card.id)
    //   // if(clashId.id){
    //   //   card.id = clashId.id
    //   // }
    //   // return card;
    //   let id = clashId.
    //   console.log(id)
    // })
    
      return (
        <div className="flex flex-wrap gap-4 p-4">
        </div>
      )
    }
