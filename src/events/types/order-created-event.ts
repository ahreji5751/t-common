import { OrderStatus } from './order-status';

export interface OrderCreatedEvent {
  id: string;
  status: OrderStatus;
  userId: string;
  expiresAt: string;
  ticket: {
    id: string;
    price: number;
  }
}