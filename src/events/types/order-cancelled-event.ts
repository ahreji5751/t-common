export interface OrderCancelledEvent {
  id: string;
  version: number;
  ticket: {
    id: string;
  }
}