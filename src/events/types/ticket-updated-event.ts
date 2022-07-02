export interface TicketUpdatedEvent {
  id: string;
  version: number;
  title: string;
  price: number;
  userId: string;
}