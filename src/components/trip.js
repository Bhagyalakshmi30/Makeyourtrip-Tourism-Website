import "./trip.css"
import TripData from "./tripdata";
import trip1 from "../assests/1.jpg"
import trip2 from "../assests/2.jpg"
import trip3 from "../assests/heroimage.jpg";
import { Link } from 'react-router-dom';


function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Discover unique destinations</p>
            <Link to="/packagesearch" ><button className="viewallbutton">View All<i className="fa fa-arrow-right" aria-hidden="true"></i></button> </Link>
            <div className="tripcard">
                <TripData
                    image={trip1}
                    heading="Trip in Cochin"
                    text="Popularly known as 'Queen of the Arabian Sea', it is a flourishing port city showcasing a rich blend of mesmerising natural beauty and vibrant culture. Serving as Kerala's commercial, industrial and financial capital, 
                it is the crowning jewel of the state's tourism landscape."
                />
                <TripData
                    image={trip2}
                    heading="Trip in Cochin"
                    text="Popularly known as 'Queen of the Arabian Sea', it is a flourishing port city showcasing a rich blend of mesmerising natural beauty and vibrant culture. Serving as Kerala's commercial, industrial and financial capital, 
                it is the crowning jewel of the state's tourism landscape."
                />

                <TripData
                    image={trip3}
                    heading="Trip in Cochin"
                    text="Popularly known as 'Queen of the Arabian Sea', it is a flourishing port city showcasing a rich blend of mesmerising natural beauty and vibrant culture. Serving as Kerala's commercial, industrial and financial capital, 
                it is the crowning jewel of the state's tourism landscape."
                />
            </div>

        </div>
    );
}

export default Trip;