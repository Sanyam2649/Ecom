
import Img1 from "../../assets/blog/blog-1.jpg"
import Img2 from "../../assets/blog/blog-2.jpg"
import Img3 from "../../assets/blog/blog-3.jpg"
import Heading from "../Shared/Heading"


const BlogData = [
    {
        title: "How to choose perfect Watch",
        subtitle:"Smart gadgets such as watches are the basic necessity of today's generation. Choosing a smart device ....",
        published: "Jan 20, 2024 by Sompal",
        image:Img1,
    },
    {
        title: "How to choose perfect Gadgets",
        subtitle:"Smart gadgets such as smart phone and touch-watch are the basic necessity of today's generation. Choosing a smart device ....",
        published: "feb 25, 2024 by Sneha Shegal",
        image:Img2,
    },
    {
        title: "How to choose perfect VR set",
        subtitle:"Smart gadgets such as VR set are the basic necessity of today's generation. Choosing a smart device ....",
        published: "March 10, 2024 by Shruti kumara",
        image:Img3,
    },
]

const Blogs = () => {
    return (
        
        <div className="my-12">
             <Heading title="Recent News" subtitle="Explore all Our Blogs"
            className="text-center mb-4" 
            titleClassName="text-4xl font-bold text-gray-900 dark:text-primary" 
            subtitleClassName="text-xl/2 text-gray-600" />
            <div className="container">
           
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {
                        BlogData.map((data)=> (
                            <div key={data.title} className="bg-white">
                                <div className="overflow-hidden rounded-4xl mb-2">
                                    <img src={data.image}
                                    alt=""
                                    className="w-full h-[220px] object-cover rounded-2"/>
                                </div> 
                                <div className="space-y-2 gap-4 align-text-center">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{data.published}</p>
                                    <p className="font-bold line-clamp-1 dark:text-primary">{data.title}</p>
                                    <p className="line-clamp-2 text-sm text-gray-600">{data.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs