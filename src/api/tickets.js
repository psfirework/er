import ticketsJSON from '../data/tickets';
import {mockRequest} from "./mockRequest";

export const getMockTickets = async () => {
   return  await mockRequest({data: ticketsJSON.tickets});
};
