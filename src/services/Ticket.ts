import { SportTicketPost, SpectacleTicketPost } from '../models/TicketModel';
import api from './Api';


export class TicketService {
   getAllSportTickets = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sports');
      } catch (error) {
         console.error(error);
      }
   };

   getAllSportTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sportsByForsaleUser');
      } catch (error) {
         console.error(error);
      }
   };


   getOneSportTicket = (id: string | undefined) => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sports/' + id);
      } catch (error) {
         console.error(error);
      }
   };

   postSportTicket = (data: SportTicketPost) => {
      try {
         return api.post(process.env.REACT_APP_API_URL + '/sports', data);
      } catch (error) {
         console.error(error);
      }
   };
   updateSportTicket = (id: string | undefined, data: SportTicketPost) => {
      try {
         return api.put(process.env.REACT_APP_API_URL + '/sports/' + id, data);
      } catch (error) {
         console.error(error);
      }
   };

   deleteSportTicket = (id: string | undefined) => {
      try {
         return api.delete(process.env.REACT_APP_API_URL + '/sports/' + id);
      } catch (error) {
         console.error(error);
      }
   };

   getAllSpectacleTickets = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacles');
      } catch (error) {
         console.error(error);
      }
   };

   getAllSpectacleTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectaclesByForsaleUser');
      } catch (error) {
         console.error(error);
      }
   };

   getOneSpectacleTicket = (id: string | undefined) => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacles/' + id);
      } catch (error) {
         console.error(error);
      }
   };
   postSpectacleTicket = (data: SpectacleTicketPost) => {
      try {
         return api.post(process.env.REACT_APP_API_URL + '/spectacles', data);
      } catch (error) {
         console.error(error);
      }
   };

   updateSpectacleTicket = (id: string | undefined, data: SpectacleTicketPost) => {
      try {
         return api.put(
            process.env.REACT_APP_API_URL + '/spectacles/' + id,
            data
         );
      } catch (error) {
         console.error(error);
      }
   };
   deleteSpectacleTicket = (id: string | undefined) => {
      try {
         return api.delete(process.env.REACT_APP_API_URL + '/spectacles/' + id);
      } catch (error) {
         console.error(error);
      }
   };

   getAllSportCategories = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sport/categories');
      } catch (error) {
         console.error(error);
      }
   };
   getAllSpectacleCategories = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacle/categories');
      } catch (error) {
         console.error(error);
      }
   };
}
