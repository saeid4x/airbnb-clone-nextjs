import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import TripsClient from "./TripsClient";


const TripsPage = async () =>{
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return (<EmptyState title="Unauthorized" subtitle="Please Login"/>)
    }

    const reservations = await getReservations({userId: currentUser.id});

    if(reservations.length === 0){
        return (<EmptyState title="No Trips Found" subtitle="Looks like you have not reserved any trips"/>)
    }

    return (
        <TripsClient
          reservations={reservations}
          currentUser={currentUser}
          
        />
    )

}

export default TripsPage