export interface PaymentCreatedEvent {
  id: string;
  orderId: string;
  stripeId: string;
}