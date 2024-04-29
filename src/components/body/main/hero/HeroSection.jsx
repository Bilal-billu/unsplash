/* eslint-disable react/no-unescaped-entities */

import Searchbar from "../Searchbar";

export default function HeroSection() {
    const url='https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const style={
        backgroundImage: `url('${url}')`
    }
    //background can be set to custom now
    return (
        <div className="h-screen grid grid-cols-4 place-content-center text-white relative" style={style}>
            <div className="flex flex-col col-span-2 col-start-2">
                <h1 className="text-6xl font-semibold my-5">Unsplash</h1>
                <p className="text-xl my-1">The internet's source for visuals.</p>
                <p className="text-xl my-1">Powered by creators everywhere.</p>

                <Searchbar classes={"rounded-md bg-white text-black my-2"} />

            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 absolute bottom-0 p-5">
                <div className="col-span-1">
                    Photo by <span className="cursor-pointer hover:underline">John Towner</span>
                </div>
                <div className="col-span-1 md:text-center">
                    Read more about the <span className="capitalize cursor-pointer font-semibold">Unsplash License</span>
                </div>
            </div>
        </div>
    )
}
