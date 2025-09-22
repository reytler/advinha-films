"use client"
import { Button } from "@/components/ui/button"
import { categories } from "@/mocks/categories"
import {ServiceMovies} from "@advinha-films/application"
import { useEffect, useState } from "react"

async function obterFilmes(codigoCategoria: number):Promise<void>{
  const _service = new ServiceMovies("","https://api.themoviedb.org/3/discover/movie")
  const res = await _service.randomizePage(codigoCategoria)
  return console.log("RESULTADO: ", res)
}

export default function Home() {
  const [category,setCategory] = useState(0)

  useEffect(()=>{
    obterFilmes(category)
  },[category])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {categories.map(cat=>(
          <Button key={cat.id} onClick={()=>setCategory(cat.id)}>{cat.name}</Button>
        ))}
      </div>
    </>
  );
}
