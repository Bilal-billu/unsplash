import GalleryCard from "./GalleryCard";

var imageList=[{
    src: "https://images.unsplash.com/flagged/photo-1558113118-e42e558b352a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A mosque",
    styling: ""
},
{
    src: "https://images.unsplash.com/photo-1575921900760-9063dc794e0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Bride with a groom",
    styling: "md:row-span-2"
},
{
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Biryani plate",
    styling: "md:row-span-2"
},
{
    src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tokyo",
    styling: "md:row-span-2"
},
{
    src: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A Torii",
    styling: "md:row-span-2"
},
{
    src: "https://images.unsplash.com/photo-1611825400934-49caa8097faf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Railway Station",
    styling: ""
},
{
    src: "https://images.unsplash.com/photo-1600367639022-c602b26cfc77?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Gate of a shrine",
    styling: "md:row-span-2"
},
{
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "A lake",
    styling: ""
},
{
    src: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "View from sky",
    styling: ""
},
{
    src: "https://images.unsplash.com/photo-1709996904826-4d32b347bdfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hazy Neon",
    styling: "md:row-span-2"
},
{
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Interior",
    styling: ""
},
{
    src: "https://images.unsplash.com/photo-1610057099443-64836ddec508?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chicken Wing",
    styling: ""
}]


export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full p-10">
        {
            imageList.map((item,index)=>{
                return <GalleryCard item={item} key={item.alt+index}/>
            })
        }
    </div>
  )
}
