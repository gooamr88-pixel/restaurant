export type HeroSlide = {
  image: string;
  subtitle: string;
  title: [string, string];
  text: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero-slider-1.jpg",
    subtitle: "Tradational & Hygine",
    title: ["For the love of", "delicious food"],
    text: "Come with family & feel the joy of mouthwatering food",
  },
  {
    image: "/images/hero-slider-2.jpg",
    subtitle: "delightful experience",
    title: ["Flavors Inspired by", "the Seasons"],
    text: "Come with family & feel the joy of mouthwatering food",
  },
  {
    image: "/images/hero-slider-3.jpg",
    subtitle: "amazing & delicious",
    title: ["Where every flavor", "tells a story"],
    text: "Come with family & feel the joy of mouthwatering food",
  },
];

export const services = [
  { title: "Breakfast", image: "/images/service-1.jpg" },
  { title: "Appetizers", image: "/images/service-2.jpg" },
  { title: "Drinks", image: "/images/service-3.jpg" },
];

export type MenuItem = {
  name: string;
  image: string;
  price: string;
  description: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Greek Salad",
    image: "/images/menu-1.png",
    price: "$25.50",
    badge: "Seasonal",
    description: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
  },
  {
    name: "Lasagne",
    image: "/images/menu-2.png",
    price: "$40.00",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
  },
  {
    name: "Butternut Pumpkin",
    image: "/images/menu-3.png",
    price: "$10.00",
    description: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
  },
  {
    name: "Tokusen Wagyu",
    image: "/images/menu-4.png",
    price: "$39.00",
    badge: "New",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
  },
  {
    name: "Olivas Rellenas",
    image: "/images/menu-5.png",
    price: "$25.00",
    description: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
  },
  {
    name: "Opu Fish",
    image: "/images/menu-6.png",
    price: "$49.00",
    description: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
  },
];

export const specialDish = {
  name: "Lobster Tortellini",
  oldPrice: "$40.00",
  price: "$20.00",
  description:
    "Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.",
};

export const testimonial = {
  text: "I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.",
  name: "Sam Jhonson",
  avatar: "/images/testi-avatar.jpg",
};

export const features = [
  { title: "Hygienic Food", icon: "/images/features-icon-1.png" },
  { title: "Fresh Environment", icon: "/images/features-icon-2.png" },
  { title: "Skilled Chefs", icon: "/images/features-icon-3.png" },
  { title: "Event & Party", icon: "/images/features-icon-4.png" },
].map((feature) => ({ ...feature, text: "Lorem Ipsum is simply dummy printing and typesetting." }));

export const events = [
  {
    image: "/images/event-1.jpg",
    date: "2022-09-15",
    category: "Food, Flavour",
    title: "Flavour so good you’ll try to eat with your eyes.",
  },
  {
    image: "/images/event-2.jpg",
    date: "2022-09-08",
    category: "Healthy Food",
    title: "Flavour so good you’ll try to eat with your eyes.",
  },
  {
    image: "/images/event-3.jpg",
    date: "2022-09-03",
    category: "Recipie",
    title: "Flavour so good you’ll try to eat with your eyes.",
  },
];

export const reservationOptions = {
  persons: Array.from({ length: 7 }, (_, i) => ({
    value: `${i + 1}-person`,
    label: `${i + 1} Person`,
  })),
  times: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((hour) => {
    const h12 = hour > 12 ? hour - 12 : hour;
    const suffix = hour >= 12 ? "pm" : "am";
    const hh = String(h12).padStart(2, "0");
    return { value: `${String(hour).padStart(2, "0")}:00`, label: `${hh} : 00 ${suffix}` };
  }),
};
