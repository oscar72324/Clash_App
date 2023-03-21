import Navbar from "@/components/Navbar"
import SearchBar from "@/components/searchBar"
import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"
import { useState } from "react"


export default function Home(props) {
  const [playerName, setPlayerName] = useState('')
  const API_KEY = `${process.env.CLASH_ROYALE_API}`
  console.log(API_KEY)

  const handleSubmit = (input) => {
    setPlayerName(input)
  }

  return (
    <SearchBar submit={handleSubmit}/>
  )
}
