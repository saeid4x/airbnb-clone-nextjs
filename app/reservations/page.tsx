import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import ReservationsClient from "./ReservationsClient";

const ReservationPage = async () =>{
    const currentUser= await getCurrentUser();

    if(!currentUser){
        return(
            <EmptyState title="Unauthorized" subtitle="Please Login"/> 
        )
    }

    const reservations = await  getReservations({
        authorId:currentUser.id
    });

    if(reservations.length === 0){
        return(
            <EmptyState
              title="No reservation found"
              subtitle="Looks like you have no reservations on your properties"
            />
        )
    }

    return (
            <ReservationsClient
            // @ts-ignore
              reservations={reservations}
              currentUser={currentUser}
            />
    )
}

export default ReservationPage;