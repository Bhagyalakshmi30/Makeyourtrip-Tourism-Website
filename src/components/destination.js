import homepage from "../assests/homepage1.jpg"
import homepage2 from "../assests/homepage2.jpg"
import { Link } from "react-router-dom";
import "./destination.css"
import DestinationData from "./destinationdata";

const Destination = () => {
    return (
        <div className="destination">
            <h1>
                Popular Destination
            </h1>
            <h4>View packages by destination</h4>

            <Link to="/destinationlist" ><button className="viewallbutton">View All<i className="fa fa-arrow-right" aria-hidden="true"></i></button> </Link>
            
            <p>
                Tours give you the opportunity to see a lot ,within a time frame.
            </p>
            <DestinationData
                className="first-des"
                heading="Yercaud"
                text="Set in Yercaud, Chill Breeze Resort offers 2-star accommodation with private balconies. With free WiFi,
            this 2-star resort offers room service and a 24-hour front desk."
                img1={homepage}
                img2={homepage2}
            />
            <DestinationData
            className="first-des-reverse"
                heading="Yercaud"
                text="Set in Yercaud, Chill Breeze Resort offers 2-star accommodation with private balconies. With free WiFi,
            this 2-star resort offers room service and a 24-hour front desk."
                img1={homepage}
                img2={homepage2}
            />


        </div>

    )
}
export default Destination;