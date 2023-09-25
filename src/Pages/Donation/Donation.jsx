import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationStoredAmount } from "../../Components/Utility/LocalStorage";
import TotalDonation from "../TotalDonaion/TotalDonation";

const Donation = () => {
    const cards = useLoaderData();
    const [totalDonation, setTotalDonation] = useState([]);

    useEffect(() => {
        const storedCardsIds = getDonationStoredAmount();
        if (cards.length > 0) {
            const totalDonation = cards.filter(card => storedCardsIds.includes(card.id));
            setTotalDonation(totalDonation);
            console.log(totalDonation);
        }

    }, [cards])
    return (
        <div>
            {
                totalDonation.length
            }
            <div className="grid grid-cols-2 gap-5 container mx-auto">
                {
                    totalDonation.map(card => <TotalDonation key={totalDonation.id} card={card}></TotalDonation>)
                }
            </div>
        </div>
    );
};

export default Donation;