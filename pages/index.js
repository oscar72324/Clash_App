import Navbar from "@/components/Navbar"
import SearchBar from "@/components/searchBar"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"
import { useState } from "react"

export async function getStaticProps(){
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImVlZmJmMjVmLWNkMmUtNDIxYy1iYzYxLTdkMGVkYWRkYjY4OCIsImlhdCI6MTY3NzAwOTg2NCwic3ViIjoiZGV2ZWxvcGVyL2M2ZDI1ODY1LWY3NjItNzUwNS04YTU3LTE1NTMyZjc2MmFmMCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3NS44Mi43OS41MCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.-qfhLq8qtK9ArGyhYHdE3Xnpdz2YpYdiA49zuW_oomG7-123gMKo6Q1U64Ds1flQgL4zzemVkYW0cZ52G1bQ5g'

  const res = await fetch('https://api.clashroyale.com/v1/cards', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  const data = await res.json()
  
  return{
    props: {
      clashData: data
    }
  }
}

export default function Home(props) {
  const [playerName, setPlayerName] = useState('')

  const handleSubmit = (input) => {
    setPlayerName(input)
  }

  console.log(playerName)

console.log(props.clashData)

  return (
    <SearchBar submit={handleSubmit}/>
  )
}
