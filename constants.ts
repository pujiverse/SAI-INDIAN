
import { RestaurantInfo } from './types';

export const RESTAURANT_DATA: RestaurantInfo = {
  name: "Sai Indian Cuisine",
  website: "https://www.saiindiancuisine.com/",
  menu: "https://www.saiindiancuisine.com/menu.html",
  googleReview: "https://g.page/r/CVPDFuz6rKQNEB0/review",
  facebook: "https://www.facebook.com/share/1H5ZaZwmdP/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/saiindiancuisine4?igsh=MWhjMnNraDM0OTh6Zg==",
  orderOnline: "https://www.saiindiancuisine.com/service.html"
};

/**
 * Path to the logo file.
 */
export const LOGO_URL = "assets/logo.svg";

export const SYSTEM_PROMPT = `
You are the AI Concierge for "Sai Indian Cuisine", a premium Indian restaurant.
Your tone is warm, welcoming, and helpful. 
You know the following links:
- Website: ${RESTAURANT_DATA.website}
- Menu: ${RESTAURANT_DATA.menu}
- Order Online: ${RESTAURANT_DATA.orderOnline}
- Google Reviews: ${RESTAURANT_DATA.googleReview}

When customers ask about dishes, suggest classic Indian favorites like Butter Chicken, Biryani, Paneer Tikka, or Naan.
If they ask for recommendations, offer a mix of vegetarian and non-vegetarian options.
Keep responses concise as most users are on mobile devices.
Always encourage them to check out the menu or order online if they are hungry!
`;
