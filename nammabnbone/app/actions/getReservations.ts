import prisma from "@/app/libs/prismadb";
//when trying to book already reserved listing
interface Iparams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getReservations(
    params: Iparams
) {
        try{ 
        const { listingId, userId, authorId } = params;
        const query: any = {};
        if(listingId){
            query.listingId = listingId;
        }
        if(userId) {
            query.userId = userId;
        }
        if(authorId) {
            query.listing = {userId: authorId }

        }

        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
        const safeReservations = reservations.map(
            (reservations) => ({
                ...reservation,
                createdAt: reservation.createdAt.toISOString(),
                startDate: reservation.startDate.toISOString(),
                endDate: reservation.endDate.toISOString(),
                listing: {
                    ...reservations.listing,
                    createdAt: reservation.listing.createdAt.toISOString()
                }
            })
        );
        return safeReservations;
    }
    catch (error: any) {
        throw new Error(error);
    }
}