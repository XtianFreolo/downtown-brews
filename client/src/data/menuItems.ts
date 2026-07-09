export type FeaturedMenuItem = {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
};

export const featuredMenuItems: FeaturedMenuItem[] = [
    {
        id: 1,
        title: "Signature Brews Coffee",
        category: "Coffee",
        description: "Rich espresso, iced lattes, and cozy cafe favorites.",
        image: "/images/coffee.jpg",
    },
    {
        id: 2,
        title: "Fresh Ceviches",
        category: "Ceviches",
        description: "Bright citrus, fresh seafood, red onion, cilantro, and Peruvian flavor.",
        image: "/images/ceviche.jpg",
    },
    {
        id: 3,
        title: "Causas",
        category: "Causas",
        description: "Chilled Peruvian potato layers with creamy, savory fillings.",
        image: "/images/causa.jpg",
    },
    {
        id: 4,
        title: "Shareables",
        category: "Shareables",
        description: "Small plates made for friends, drinks, and late cafe nights.",
        image: "/images/shareables.jpg",
    },
];