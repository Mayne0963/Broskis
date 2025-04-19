export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  infused: boolean;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Jerk Chicken Bowl',
    description: 'Spicy Jamaican-style chicken over rice.',
    price: 12.99,
    category: 'Entrees',
    infused: false,
    image: '/images/jerk-chicken.jpg'
  },
  {
    id: '2',
    name: 'VIP Shrimp Tacos',
    description: 'Crispy shrimp tacos with slaw and spicy aioli.',
    price: 10.99,
    category: 'Entrees',
    infused: false,
    image: '/images/shrimp-tacos.jpg'
  }
];

export function getMenuItems(): MenuItem[] {
  return menuItems;
}

export function getMenuItemById(id: string): MenuItem | undefined {
  return menuItems.find(item => item.id === id);
}

export interface Location {
  id: string;
  name: string;
  type: string;
  address: string;
  hours: string;
}

export const locations: Location[] = [
  {
    id: 'loc1',
    name: 'Broski’s Food Truck',
    type: 'Food Truck',
    address: '123 Main St, Fort Wayne, IN',
    hours: '11:00 AM - 8:00 PM'
  },
  {
    id: 'loc2',
    name: 'Broski’s Ghost Kitchen',
    type: 'Ghost Kitchen',
    address: '456 Elm St, Fort Wayne, IN',
    hours: '12:00 PM - 9:00 PM'
  }
];

export function getLocations(): Location[] {
  return locations;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const events: Event[] = [
  {
    id: 'evt1',
    title: 'Grand Opening Celebration',
    date: '2025-05-01',
    description: 'Join us for the grand opening of our first location with live music and specials!'
  },
  {
    id: 'evt2',
    title: 'Summer BBQ Pop-Up',
    date: '2025-06-15',
    description: 'Enjoy our special BBQ menu at the Summer Fest downtown.'
  }
];

export function getEvents(): Event[] {
  return events;
}

export function getEventById(id: string): Event | undefined {
  return events.find(e => e.id === id);
}

export interface Order {
  id: string;
  date: string;
  items: { name: string; quantity: number; price: number; }[];
  total: number;
}

export const orders: Order[] = [
  {
    id: 'order1',
    date: '2025-04-18',
    items: [
      { name: 'Jerk Chicken Bowl', quantity: 2, price: 12.99 },
      { name: 'VIP Shrimp Tacos', quantity: 1, price: 10.99 },
    ],
    total: 36.97
  }
];

export function getOrders(): Order[] {
  return orders;
}
