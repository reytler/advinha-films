"use client"
import { Button } from "@/components/ui/button"
import { categories } from "@/mocks/categories"
import { useEffect, useState } from "react"

async function createRoom(category: number):Promise<void>{
  const res = await fetch(`/api/room/${category}`)
  const data = await res.json()
  console.log("DATA: ",data.idRoom)
}

export default function Home() {
  const [category,setCategory] = useState(0)

  useEffect(()=>{
    createRoom(category)
  },[category])

  return (
    <>
      <h1 className="text-center p-5"><b>Acerte o Filme</b></h1>
      <h1 className="text-center p-5">Escolha um tema para jogar</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {categories.map(cat=>(
          <Button key={cat.id} onClick={()=>setCategory(cat.id)}>{cat.name}</Button>
        ))}
      </div>
    </>
  );
}
