"use client"
import { Button } from "@/components/ui/button"
import { categories } from "@/mocks/categories"
import { useState } from "react"

export default function Home() {
  const [category,setCategory] = useState(0)

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
