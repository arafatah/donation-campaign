import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);

    return (
        <div className="container mx-auto">
            <div className="md:px-10 py-7">
                
            
            <div className="relative flex justify-center items-center">
                <img className="w-10 md:w-[1320px] md:h-[700px] object-cover" src={card.details_tab_img} alt="" />   
                <div className="lg:w-[1320px] lg:h-[130px] lg:top-[570px] lg:rounded-b lg:absolute lg:inset-0 lg:bg-black lg:opacity-40 lg:left-[108px]"></div>

                    
            </div>
            <button className="px-6 py-4 rounded-sm text-white font-medium text-lg absolute top-[733px] left-[328px] bg-[#FF444A]">Donate {card.price}</button>
            <div className="lg:ml-28 lg:mt-10 md:mt-5">
                <p className="font-bold text-4xl mb-4">{card.title}</p>
                <p className="font-normal text-base text-justify lg:w-[1320px]">{card.description}</p>
            </div>

            </div>

        </div>
    );
};

export default CardDetails;