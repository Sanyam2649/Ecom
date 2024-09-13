import { FaCarSide, FaCheckCircle, FaHeadphones, FaWallet } from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
        title: "Free Shipping",
        description: "Free Home Delivery",
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
        title: "Quality Check",
        description: "Quality assurance on each product",
    },
    {
        id: 3,
        icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
        title: "Secure Payment",
        description: "Encrypted transactions & Money back guarantee in 30 days",
    },
    {
        id: 4,
        icon: <FaHeadphones className="text-4xl md:text-5xl text-primary" />,
        title: "24/7 Helpline",
        description: "Customer service available",
    },
];

const Services = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {ServiceData.map((data) => (
                    <div
                        key={data.id}
                        className="flex flex-col items-center text-center p-4 border border-gray-300 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:bg-transparent hover:border-transparent hover:shadow-none hover:-translate-y-2"
                    >
                        {data.icon}
                        <h1 className="mt-4 text-lg font-bold">{data.title}</h1>
                        <p className="mt-2 text-gray-500 text-sm">{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
