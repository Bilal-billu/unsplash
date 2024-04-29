import { useState } from "react"

export default function Topbar() {
  var [selectedLink, seSelectedLink] = useState("Editorial")
  function changeLink(name) {
    seSelectedLink(name)
  }
  var links_1 = [{
    name: "Editorial",
    func: changeLink,
    selected: selectedLink === "Editorial"
  },
  {
    name: "Unsplash+",
    func: changeLink,
    selected: selectedLink === "Unsplash+"
  }
  ]

  var links_2 = [{

    name: "Monochromatic",
    func: changeLink,
    selected: selectedLink === "Monochromatic",
    featured: true
  },
  {

    name: "Wallpapers",
    func: changeLink,
    selected: selectedLink === "Wallpapers",
    featured: false
  },
  {

    name: "3D Renders",
    func: changeLink,
    selected: selectedLink === "3D Renders",
    featured: false
  },
  {

    name: "Nature",
    func: changeLink,
    selected: selectedLink === "Nature",
    featured: false
  },
  {

    name: "Textures & Patterns",
    func: changeLink,
    selected: selectedLink === "Textures & Patterns",
    featured: false
  },
  {

    name: "Architecture & Interiors",
    func: changeLink,
    selected: selectedLink === "Architecture & Interiors",
    featured: false
  },
  {

    name: "Film",
    func: changeLink,
    selected: selectedLink === "Film",
    featured: false
  },
  {

    name: "Street Photography",
    func: changeLink,
    selected: selectedLink === "Street Photography",
    featured: false
  },
  {

    name: "Experimental",
    func: changeLink,
    selected: selectedLink === "Experimental",
    featured: false
  }/*
  ,
  {

    name: "Animals",
    func: changeLink,
    selected: selectedLink==="Animals",
    featured: false
  },
  {

    name: "Fashion & Beauty",
    func: changeLink,
    selected: selectedLink==="Fashion & Beauty",
    featured: false
  },
  {

    name: "Business & Work",
    func: changeLink,
    selected: selectedLink==="Business & Work",
    featured: false
  },
  {

    name: "Food & Drink",
    func: changeLink,
    selected: selectedLink==="Food & Drink",
    featured: false
  },
    {
    
      name: "Travel",
      func: changeLink,
      selected: selectedLink==="Travel",
      featured: false
    },
    {
    
      name: "People",
      func: changeLink,
      selected: selectedLink==="People",
      featured: false
    },
    {
    
      name: "Spirituality",
      func: changeLink,
      selected: selectedLink==="Spirituality",
      featured: false
    },
    {
    
      name: "Athletics",
      func: changeLink,
      selected: selectedLink==="Athletics",
      featured: false
    },
    {
    
      name: "Health & Wellness",
      func: changeLink,
      selected: selectedLink==="Health & Wellness",
      featured: false
    },
    {
    
      name: "Current Events",
      func: changeLink,
      selected: selectedLink==="Current Events",
      featured: false
    },
    {
    
      name: "Arts & Culture",
      func: changeLink,
      selected: selectedLink==="Arts & Culture",
      featured: false
    }*/
  ]
  return (
    <div className="grid grid-cols-12 mb-2">
      <div className="col-span-3 lg:col-span-2 flex justify-start mx-2 border-e-2 border-gray-400 text-md">
        {links_1.map(item => {
          return <h1 key={item.name}
            className={`ms-auto cursor-pointer px-2 py-4 border-b-2 
            ${item.selected ? 'border-black text-black' : 'border-transparent text-gray-400'}`} 
            onClick={() => { item.func(item.name) }}
          >
            {item.name}
          </h1>
        })}
      </div>
      <div className="col-span-9 lg:col-span-10 flex justify-start xl:m-2 overflow-x-scroll lg:overflow-x-hidden">
        {links_2.map(item => {
          return <div key={item.name}
            className={`ms-auto cursor-pointer border-b-2 relative text-nowrap
            ${item.selected ? 'border-black text-black' : 'border-transparent text-gray-400'}`}
             onClick={() => { item.func(item.name) }}
          >
            {item.featured&&
            <span className="block text-xs absolute mx-2">Featured</span>
            }
            <h1 className="p-2 py-4">{item.name}</h1>
          </div>
        })}
      </div>
    </div>
  )
}
