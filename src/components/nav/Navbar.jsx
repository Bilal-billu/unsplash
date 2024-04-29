import { Icon } from '@iconify/react';
import Searchbar from '../body/main/Searchbar';

var links_1 = [{
    name: "Explore",
    func: () => { }
},
{
    name: "Advertise",
    func: () => { }
},
{
    name: "Unplash+",
    func: () => { },
    style: true
}]

var links_2=[{
    name: "Log in",
    func: ()=>{}
},
{
    name: "Submit a photo",
    func: ()=>{},
    style: true
},
{
    name: <Icon icon="iconamoon:menu-burger-horizontal-fill" />,
    func: ()=>{}
},
]

export default function Navbar() {
    //logo
    //searchbar
    //3 links
    //3 links
    return (
        <div className=" grid grid-cols-12 row-span-1 pt-2">
            <div className=" col-span-1 bg-transparent text-2xl flex justify-center items-center">
                <Icon icon="flat-color-icons:wi-fi-logo" />
            </div>
            <Searchbar classes={"md:col-span-3 lg:col-span-5 bg-stone-200 rounded-full"}/>
            <div className="col-span-4 lg:col-span-3 text-md bg-transparent flex justify-evenly items-center border-r-2 border-black">
                {
                    links_1.map(item=>{
                        return <h1 key={item.name} onClick={item.func}
                         className={`${item.style?
                            "bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent":
                            "text-black"} hover:cursor-pointer`}>{item.name}</h1>
                    })
                }
            </div>
            <div className="col-span-4 lg:col-span-3 text-md bg-transparent flex justify-evenly items-center xl:px-2">
                {
                    links_2.map(item=>{
                        return <h1 key={item.name} onClick={item.func}
                         className={`${item.style?
                            "border-2 rounded-md":
                            "text-black"}  px-1 lg:px-3 py-2 xl:mx-3 hover:cursor-pointer`}>{item.name}</h1>
                    })
                }

            </div>
        </div>
    )
}
