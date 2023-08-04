import { Listings, Reservation, Users } from "@prisma/client";

// export type SafeListing = Omit<Listings, "createdAt"> & {
//   createdAt: string;
// };

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  Users,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeListing = Omit<Listings,"CreateAt"> & {
  CreateAt: string
}










