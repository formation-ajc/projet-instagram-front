import { ReactNode } from "react";

export interface TicketGet {
   id: string;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   category: { id: string; name: string };
   address: { id: string; name: string; zipcode: string };
   userId: string;
   email: string;
   firstName: string;
   lastName: string
   purchaseUserEmail: string
}

export interface SportTicketPost {
   id: string;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   addressName: string;
   addressZipcode: string;
   sportcategoryId: string;
   userEmail: string;
}
export interface SpectacleTicketPost {
   id: string;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   addressName: string;
   addressZipcode: string;
   spectaclecategoryId: string;
   userEmail: string;
}

export interface TicketCategoriesGet {
   id: string;
   name: string;
}