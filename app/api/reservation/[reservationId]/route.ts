import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";


interface IParams {
    reservationId?: string
}

export async function DELETE (request:Request,{params}:{params:IParams}){
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return NextResponse.error();
    }
    const {reservationId} = params;
    if(!reservationId || typeof reservationId !== 'string'){
        throw new Error('Invalid ID')
    }

    /*
    only people delete reservation is either 
    created an reervation or created listing that reservation is on({userId: currentUser.id},) &&
      enable owner of house to cancel reservation( {listing:{userId:currentUser.id}}).    
    */   
    const reservation = await prisma.reservation.deleteMany({
        where:{
            id:reservationId,
            OR:[
                {userId: currentUser.id},
                {listing:{userId:currentUser.id}}
            ]
        }
    });

    return NextResponse.json(reservation);
    
}
