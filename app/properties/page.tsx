import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";


const PropertiesPage = async () =>{
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return (<EmptyState title="Unauthorized" subtitle="Please Login"/>)
    }

    const listings = await getListings({userId: currentUser.id});

    if(listings.length === 0){
        return (<EmptyState title="No properties Found" subtitle="Looks like you have not properties"/>)
    }

    return (
        <PropertiesClient
          listings={listings} 
          currentUser={currentUser}
          
        />
    )

}

export default PropertiesPage