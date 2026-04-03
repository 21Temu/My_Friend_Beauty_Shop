export interface Product {
  id: string;
  name: string;
  category: 'Perfume' | 'Hair' | 'Skin' | 'Cloth';
  price: number;
  description: string;
  image: string;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Perfume',
    category: 'Perfume',
    price: 120.00,
    description: 'A luxurious blend of vanilla, jasmine, and warm amber. Perfect for evening wear.',
    image: '/products/perfume.png',
    isFeatured: true,
  }
  ,
  {
    id: '2',
    name: ' Hair Serum',
    category: 'Hair',
    price: 45.00,
    description: 'Enriched with argan oil and silk proteins to tame frizz and add a luminous shine.',
    image: '/products/hair.png',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Rose Cream',
    category: 'Skin',
    price: 85.00,
    description: 'A rich, anti-aging night cream infused with real rose extract and 24k gold flakes.',
    image: '/products/skin.png',
    isFeatured: true,
  }
  // ,
  // {
  //   id: '4',
  //   name: 'Midnight Bloom Body Mist',
  //   category: 'Perfume',
  //   price: 35.00,
  //   description: 'A light, refreshing mist with notes of dark orchid and sandalwood.',
  //   image: '/products/4.jpg',
  // },
  // {
  //   id: '5',
  //   name: 'Velvet Matte Lipstick - Ruby',
  //   category: 'Skin',
  //   price: 28.00,
  //   description: 'Long-lasting, highly pigmented matte lipstick in a classic ruby red.',
  //   image: '/products/5.jpg',
  // },
  // {
  //   id: '6',
  //   name: 'Botanical Repair Shampoo',
  //   category: 'Hair',
  //   price: 32.00,
  //   description: 'Sulfate-free shampoo that gently cleanses while repairing damaged hair bonds.',
  //   image: '/products/6.jpg',
  // },
  // {
  //   id: '7',
  //   name: 'Glow Enhancing Primer',
  //   category: 'Skin',
  //   price: 42.00,
  //   description: 'Creates a flawless canvas for makeup while imparting a subtle, healthy glow.',
  //   image: '/products/7.jpg',
  // },
  // {
  //   id: '8',
  //   name: 'Oud Noir Intense',
  //   category: 'Perfume',
  //   price: 150.00,
  //   description: 'A deep, mysterious fragrance featuring rare oud wood, spices, and leather.',
  //   image: '/products/8.jpg',
  //   isFeatured: true,
  // }
];
