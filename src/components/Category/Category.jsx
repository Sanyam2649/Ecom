import Image1 from "../../assets/category/earphone.png"
import Image2 from "../../assets/category/watch.png"
import Image3 from "../../assets/category/laptop new.png"
import Button from "../Shared/Button";
const Category = ()=>{
  return(
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ml-8">
          <div className="py-10 pt-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px]
          flex items-end">
            <div>
              <div className="mb-4 ml-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
               <Button text="Browser" className="bg-primary text-brandW"/>
              </div>
              <div>
                <img src={Image1} alt="" className="w-[320px] absolute bottom-0"/>
              </div>
            </div>
          </div>

          <div className="py-10 pt-5 bg-yellow-400 text-white rounded-3xl relative h-[320px]
          flex items-end">
            <div>
              <div className="mb-4 ml-4">
                <p className="mb-[2px] text-gray-100">Make Life</p>
                <p className="text-2xl font-semibold mb-[2px]">ease with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Gadgets</p>
               <Button text="Browser" className="bg-brandW text-brandY" />
              </div>
              <div>
                <img src={Image2} alt="" className="w-[320px] absolute top-8"/>
              </div>
            </div>
          </div>

          <div className="py-10 pt-5 bg-primary text-white rounded-3xl relative h-[320px]
          flex items-end w-[520px]">
            <div className="flex flex-row justify-between">
              <div className="mb-4 ml-4">
                <p className="mb-[2px] text-gray-100">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Laptop</p>
               <Button text="Browser" className="bg-brandW text-primary"/>
              </div>
              <div>
                <img src={Image3} alt="" className="w-[320px] absolute right-0 top-5"/>
              </div>
            </div>
          </div>

        </div>
      </div> 
    </div>
  )
};

export default Category;
