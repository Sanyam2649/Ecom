import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ()=> {
    return(
        <div className="container dark:bg-gray-200">
              <div className="flex flex-row justify-between align-text-center pt-20">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-3xl text-secondary dark:text-white">ECOM</h1>
                    <p className="font-semibold sm:text-xl">This is the commercial website!!</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-3xl dark:text-white">Important Links</h1>
                    <div className="flex flex-col gap-2">
                    <a href="#" className=" text-primary text-xl dark:text-gray-100 dark:hover:text-primary hover:text-gray-400">Home</a>
                    <a href="/about"  className="text-primary text-xl dark:text-gray-100 dark:hover:text-primary hover:text-gray-400">About</a>
                    <a href="/contact"  className="text-primary text-xl dark:text-gray-100 dark:hover:text-primary hover:text-gray-400">Contact</a>
                    <a href="/Blog"  className="text-primary text-xl dark:text-gray-100 dark:hover:text-primary hover:text-gray-400">Blogs</a>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold text-left text-xl dark:text-white ">Address</h1>
                    <p >Meerut, Uttar Pradesh</p>
                    <div className="flex flex-row gap-2">
                        <FaInstagram className="h-10 w-10 fill-red-500"/>
                        <FaFacebook className= "h-10 w-10 fill-blue-800"/>
                        <FaLinkedin className="h-10 w-10 fill-blue-400"/>
                    </div>
                </div>
              </div>
        </div>
    )
}

export default Footer;