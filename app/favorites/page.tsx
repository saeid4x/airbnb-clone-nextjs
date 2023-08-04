import EmptyState from "../components/EmptyState";
import getFavoriteListings  from "../actions/getFavoriteListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavoritesClient from "./favoritesClient";
import ClientOnly from "../components/ClientOnly";

const ListingPage = async () =>{

    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if(listings.length === 0){
        return (
            <EmptyState
              title="No favorites found"
              subtitle="Looks like you have no favorite listings"
            />
        )
    }

    return (
         
       
            <FavoritesClient
            // @ts-ignore 
            listings={listings}
            currentUser={currentUser}
            
            />
        
    )

}

export default ListingPage