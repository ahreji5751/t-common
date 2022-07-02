export interface TicketCreatedEvent {
  id: string;
  version: number;
  title: string;
  price: number;
  userId: string;
}