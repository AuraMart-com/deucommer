export interface Product {
    id: number;
    title: string;
    price: string;
    image: string;
    description: string;
    category: string;
}

export const products: Product[] = [
    { 
        id: 1, 
        title: "Smartphone X", 
        price: "$599", 
        image: "https://picsum.photos/seed/phone/600/600",
        description: "A high-end smartphone with a stunning display and powerful processor. Perfect for all your mobile needs.",
        category: "Electronics"
    },
    { 
        id: 2, 
        title: "Designer Jacket", 
        price: "$120", 
        image: "https://picsum.photos/seed/jacket/600/600",
        description: "A stylish and comfortable jacket made from premium materials. Ideal for cool weather and fashion-forward looks.",
        category: "Fashion"
    },
    { 
        id: 3, 
        title: "Wireless Earbuds", 
        price: "$80", 
        image: "https://picsum.photos/seed/earbuds/600/600",
        description: "Crystal clear sound with long-lasting battery life. These wireless earbuds are perfect for music lovers on the go.",
        category: "Electronics"
    },
    { 
        id: 4, 
        title: "Coffee Maker", 
        price: "$45", 
        image: "https://picsum.photos/seed/coffee/600/600",
        description: "Brew your favorite coffee at home with ease. This compact coffee maker delivers rich flavor every time.",
        category: "Home"
    },
    { 
        id: 5, 
        title: "Running Shoes", 
        price: "$95", 
        image: "https://picsum.photos/seed/shoes/600/600",
        description: "Lightweight and breathable running shoes designed for maximum comfort and performance.",
        category: "Fashion"
    },
    { 
        id: 6, 
        title: "Smart Watch", 
        price: "$199", 
        image: "https://picsum.photos/seed/watch/600/600",
        description: "Track your fitness, receive notifications, and more with this sleek and feature-packed smart watch.",
        category: "Electronics"
    },
    { 
        id: 7, 
        title: "Gaming Mouse", 
        price: "$60", 
        image: "https://picsum.photos/seed/mouse/600/600",
        description: "High-precision gaming mouse with customizable buttons and RGB lighting for an immersive gaming experience.",
        category: "Electronics"
    },
    { 
        id: 8, 
        title: "Backpack", 
        price: "$50", 
        image: "https://picsum.photos/seed/backpack/600/600",
        description: "Durable and spacious backpack with multiple compartments. Perfect for school, work, or travel.",
        category: "Fashion"
    }
];
