export interface Event {
  eventID: number; // Optional if the ID is generated by the database
  eventName: string;
  description?: string;
  eventType?: string;
  date: Date;
  maxAttendees?: number;
  createdAt?: Date;
  organizerId?: number;
  location?: string;
  category?: string;
  requiresTicket?: boolean;
}
