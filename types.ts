
export interface RestaurantInfo {
  name: string;
  website: string;
  menu: string;
  googleReview: string;
  facebook: string;
  instagram: string;
  orderOnline: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
