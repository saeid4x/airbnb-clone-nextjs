import prisma from '@/app/libs/prismadb';

import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {

    try{
        const currentUser = await getCurrentUser();

        if(!currentUser){
            return []
        }

        const favorites = await prisma.listings.findMany({
            where:{
                id:{
                    in:[...(currentUser.favoriteIds || [])]
                }
            }
        });

        const safeFavorites = favorites.map((favorite) =>({
            ...favorite,
            CreatedAt: favorite.CreateAt.toISOString()
        }))

        return safeFavorites;
        


    } catch(error:any){
        throw new Error(error);
    }
}