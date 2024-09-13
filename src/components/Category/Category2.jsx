import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";
const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 ml-8">
          <div className="lg:col-span-2 py-10 pt-5 bg-gradient-to-br from-gray-100 to-gray-400 text-white rounded-3xl relative h-[320px] flex items-start">
            <div className="flex flex-row justify-stretch">
              <div className="mb-2 ml-6 pt-10">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Laptop</p>
                <Button text="Browser" className="bg-brandW text-secondary" />
              </div>
              <div>
                <img src={Image1} alt="" className="w-[320px] absolute bottom-0 pl-4" />
              </div>
            </div>
          </div>

         
          <div className="py-10 pt-5 bg-brandG text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="ml-4 mt-8">
                <p className="mb-[2px] text-gray-100">Fun</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">V.R</p>
                <Button text="Browser" className="bg-brandW text-brandG" />
              </div>
              <div>
                <img src={Image2} alt="" className="w-[320px] absolute bottom-0"/>
              </div>
            </div>
          </div>

          {/* Small Box 2 */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandB/70 to-brandB/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4 ml-4">
                <p className="mb-[2px] text-gray-100">Party</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Speakers</p>
                <Button text="Browser" className="bg-brandW text-brandB" />
              </div>
              <div>
                <img src={Image3} alt="" className="w-[320px] absolute right-0 top-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
