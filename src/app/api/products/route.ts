import { NextResponse } from 'next/server';

const products = [
  {
    id: '1',
    name: 'ត្រសក់ស្រស់ (Fresh Cucumber)',
    price: '¥129.00',
    originalPrice: '¥258.00',
    imageUrl: '/assets/products/1.jpg',
    storeName: 'Fashionista Boutique',
    salesVolume: '3000+ sold',
    href: '/product/1',
    detailImages: ['/assets/products/1.jpg', '/assets/products/2.jpg', '/assets/products/3.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '2',
    name: 'ក្រឡាញ់ស្រស់ (Fresh Morning Glory)',
    price: '¥3899.00',
    imageUrl: '/assets/products/2.jpg',
    storeName: 'Tech World',
    salesVolume: '1500+ sold',
    href: '/product/2',
    detailImages: ['/assets/products/2.jpg', '/assets/products/3.jpg', '/assets/products/4.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '3',
    name: 'ក្រឡាញ់ស្រស់ (Fresh Morning Glory)',
    price: '¥249.00',
    originalPrice: '¥499.00',
    imageUrl: '/assets/products/3.jpg',
    storeName: 'Sporty Goods',
    salesVolume: '5000+ sold',
    href: '/product/3',
    detailImages: ['/assets/products/3.jpg', '/assets/products/4.jpg', '/assets/products/5.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '4',
    name: 'ក្រឡាញ់ស្រស់ (Fresh Morning Glory)',
    price: '¥88.00',
    imageUrl: '/assets/products/6.jpg',
    storeName: 'Healthy Living Store',
    salesVolume: '2000+ sold',
    href: '/product/4',
    detailImages: ['/assets/products/6.jpg', '/assets/products/1.jpg', '/assets/products/2.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '5',
    name: 'ត្រសក់ស្រស់ (Fresh Cucumber)',
    price: '¥499.00',
    originalPrice: '¥799.00',
    imageUrl: '/assets/products/5.jpg',
    storeName: 'AudioPhile Store',
    salesVolume: '2500+ sold',
    href: '/product/5',
    detailImages: ['/assets/products/5.jpg', '/assets/products/6.jpg', '/assets/products/1.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '6',
    name: 'ត្រសក់ស្រស់ (Fresh Cucumber)',
    price: '¥1280.00',
    imageUrl: '/assets/products/4.jpg',
    storeName: 'Chic Accessories',
    salesVolume: '800+ sold',
    href: '/product/6',
    detailImages: ['/assets/products/4.jpg', '/assets/products/5.jpg', '/assets/products/6.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '7',
    name: 'ត្រសក់ស្រស់ (Fresh Cucumber)',
    price: '¥350.00',
    imageUrl: '/assets/products/5.jpg',
    storeName: 'Secure Home Inc.',
    salesVolume: '1200+ sold',
    href: '/product/7',
    detailImages: ['/assets/products/5.jpg', '/assets/products/6.jpg', '/assets/products/1.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '8',
    name: 'Kids Educational Toy Set - Building Blocks',
    price: '¥199.00',
    originalPrice: '¥299.00',
    imageUrl: '/assets/products/6.jpg',
    storeName: 'PlayLearn Toys',
    salesVolume: '4000+ sold',
    href: '/product/8',
    detailImages: ['/assets/products/6.jpg', '/assets/products/1.jpg', '/assets/products/2.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '9',
    name: 'Modern Ergonomic Office Chair - Mesh Back',
    price: '¥899.00',
    imageUrl: '/assets/products/1.jpg',
    storeName: 'Office Comforts',
    salesVolume: '700+ sold',
    href: '/product/9',
    detailImages: ['/assets/products/1.jpg', '/assets/products/2.jpg', '/assets/products/3.jpg'],
    description: `ឈ្មោះផលិតផល៖ ប្រូកូលី (Broccoli)\nប្រភេទ៖ បន្លែស្រស់\nទំហំ៖ ប្រហែល ៥០០ ក្រាម\nតម្លៃ៖ ៤,៥០០ រៀល\n\nអត្ថប្រយោជន៍សុខភាព៖\n- ពេញលេញដោយវីតាមីន C, K និង A\n- មានប្រូតេអ៊ីន និងជាតិចំណីខ្ពស់\n- ជួយបំបាត់សារធាតុពុលក្នុងរាងកាយ\n- ជួយបង្រួមជាតិខ្លាញ់ និងស្ករនៅក្នុងឈាម\n\nរបៀបប្រើប្រាស់៖\n- អាចដាំស្ងោរឬចៀនជាមួយខ្ទឹមស\n- ធ្វើស៊ុប ឬរួមជាមួយម្ហូបផ្សេងៗ\n- ញ៉ាំឆៅជាមួយទឹកជ្រលក់\n\nរបៀបរក្សាទុក៖\n- ទុកក្នុងទូទឹកកកមិនលើស១សប្ដាហ៍\n- រក្សាជៀសវាងជាតិទឹកសើមខ្លាំង\n\nប្រភព៖ ដាំដុះក្នុងប្រទេសកម្ពុជា`
  },
  {
    id: '10',
    name: 'Stainless Steel Cookware Set - 10 Piece',
    price: '¥650.00',
    originalPrice: '¥999.00',
    imageUrl: '/assets/products/4.jpg',
    storeName: 'Kitchen Masters',
    salesVolume: '1800+ sold',
    href: '/product/10',
    description: 'Upgrade your kitchen with this durable 10-piece stainless steel cookware set.'
  },
  {
    id: '11',
    name: 'Portable Blender for Shakes and Smoothies',
    price: '¥159.00',
    imageUrl: '/assets/products/3.jpg',
    storeName: 'FitLife Gadgets',
    salesVolume: '3200+ sold',
    href: '/product/11',
    description: 'Blend your favorite shakes and smoothies anywhere with this compact portable blender.'
  },
  {
    id: '12',
    name: 'Yoga Mat with Carrying Strap - Eco Friendly',
    price: '¥120.00',
    imageUrl: '/assets/products/2.jpg',
    storeName: 'ZenFlow Yoga',
    salesVolume: '2200+ sold',
    href: '/product/12',
    description: 'Practice yoga comfortably on this eco-friendly mat with a convenient carrying strap.'
  },
  {
    id: '13',
    name: 'Hardcover Fiction Bestseller - Mystery Novel',
    price: '¥75.00',
    originalPrice: '¥150.00',
    imageUrl: '/assets/products/6.jpg',
    storeName: 'Readers Corner',
    salesVolume: '6000+ sold',
    href: '/product/13',
    description: 'Dive into a thrilling mystery with this bestselling hardcover fiction novel.'
  },
  {
    id: '14',
    name: 'Professional DSLR Camera - 24MP Sensor',
    price: '¥4500.00',
    imageUrl: '/assets/products/6.jpg',
    storeName: 'Photo Pro Gear',
    salesVolume: '500+ sold',
    href: '/product/14',
    description: 'Capture stunning photos with this professional DSLR camera featuring a high-resolution 24MP sensor.'
  },
  {
    id: '15',
    name: "Men's Classic Leather Wallet - RFID Blocking",
    price: '¥180.00',
    imageUrl: '/assets/products/2.jpg',
    storeName: 'Gents Essentials',
    salesVolume: '1900+ sold',
    href: '/product/15',
    description: 'Keep your cards safe with this classic leather wallet featuring RFID blocking technology.'
  },
  {
    id: '16',
    name: 'Scented Candle Gift Set - Aromatherapy',
    price: '¥99.00',
    imageUrl: '/assets/products/3.jpg',
    storeName: 'Relax & Unwind',
    salesVolume: '2800+ sold',
    href: '/product/16',
    description: 'Create a relaxing atmosphere with this aromatherapy scented candle gift set.'
  },
  {
    id: '17',
    name: 'Electric Toothbrush with Multiple Modes',
    price: '¥299.00',
    originalPrice: '¥450.00',
    imageUrl: '/assets/products/6.jpg',
    storeName: 'BrightSmile Dental',
    salesVolume: '1300+ sold',
    href: '/product/17',
    description: 'Achieve a brighter smile with this electric toothbrush offering multiple cleaning modes.'
  },
  {
    id: '18',
    name: 'Travel Backpack - Water Resistant, Laptop Compartment',
    price: '¥320.00',
    imageUrl: '/assets/products/1.jpg',
    storeName: 'Adventure Gear Co.',
    salesVolume: '1100+ sold',
    href: '/product/18',
    description: 'Travel with ease using this water-resistant backpack featuring a dedicated laptop compartment.'
  }
];

export async function GET() {
  return NextResponse.json(products);
}
    