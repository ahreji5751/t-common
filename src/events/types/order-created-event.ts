import { OrderStatus } from './order-status';

export interface OrderCreatedEvent {
  id: string;
  version: number;
  status: OrderStatus;
  userId: string;
  expiresAt: string;
  ticket: {
    id: string;
    price: number;
  }
}