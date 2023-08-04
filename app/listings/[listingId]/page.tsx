
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservation";

import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import { SafeReservation } from "@/app/types";

import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      
        <EmptyState />
   
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        //@ts-ignore
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;


















// import getCurrentUser from "@/app/actions/getCurrentUser";
// import getListingById from "@/app/actions/getListingById";
// import getReservations from "@/app/actions/getReservation";
// import ClientOnly from "@/app/components/ClientOnly";
// import EmptyState from "@/app/components/EmptyState";
// import { SafeReservation } from "@/app/types";
// import ListingClient from "./ListingClient";

// interface IParams {
//     listingId?: string;
// }
// const ListingPage = async ({params}: {params:IParams}) =>{
//     const listing = await getListingById(params);
//     const currentUser = await getCurrentUser();
//     const reservations:SafeReservation[] = await getReservations(params);

//     if(!listing){
//         return(
//             <EmptyState />
//         )
//     }


//     return (
//         <>
//         <ClientOnly>
//             <ListingClient 
//                 listing={listing}
//                 reservations={reservations}
//                 currentUser= {currentUser}
//             />
//           </ClientOnly>
//         </>
         
//     )
// }

// export default ListingPage;