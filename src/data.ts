export type Region = 'Jakarta Pusat' | 'Jakarta Selatan' | 'Jakarta Barat' | 'Jakarta Timur' | 'Jakarta Utara';
export type Category = 'Attraction' | 'Food & Beverage' | 'Education';
export type PriceRange = 'Free' | 'Under 100k' | 'Up to 100k';

export interface Place {
  id: string;
  name: string;
  region: Region;
  category: Category;
  priceRange: PriceRange;
  address: string;
  mapsUrl: string;
  socialMedia: string;
  description: string;
  image: string;
}

export interface TransportStation {
  name: string;
  isInterchange?: boolean;
}

export interface TransportRoute {
  id: string;
  name: string;
  type: 'MRT' | 'LRT' | 'TJ';
  color: string;
  fare: string;
  stations: TransportStation[];
}

export const TRANSPORT_PAYMENT_METHODS = [
  { name: 'Kartu Uang Elektronik (e-money)', providers: ['Bank Mandiri (e-money)', 'BCA (Flazz)', 'BNI (TapCash)', 'BRI (Brizzi)', 'Bank DKI (JakCard)'] },
  { name: 'Aplikasi Digital / QRIS', providers: ['Aplikasi MRT Jakarta (Blu, AstraPay, i.Saku)', 'Aplikasi JakLingko', 'Gopay/OVO/Dana (via JakLingko)'] },
  { name: 'Kartu Multi Trip (KMT)', providers: ['Khusus KRL & MRT (dalam pengembangan)'] }
];

export type HotelStar = 1 | 2 | 3 | 4 | 5;

export interface Hotel {
  id: string;
  name: string;
  stars: HotelStar;
  region: Region;
  address: string;
  mapsUrl: string;
  socialMedia: string;
  website: string;
  description: string;
  image: string;
}

export const HOTELS: Hotel[] = [
  // --- 5 STAR ---
  {
    id: 'h-5-1',
    name: 'The Ritz-Carlton Jakarta, Mega Kuningan',
    stars: 5,
    region: 'Jakarta Selatan',
    address: 'Jl. DR. Ide Anak Agung Gde Agung Kav.E.1.1 No.1, Kuningan, Jakarta Selatan',
    mapsUrl: 'https://maps.app.goo.gl/ RitzCarltonMegaKuningan',
    socialMedia: 'https://instagram.com/ritzcarltonjakarta',
    website: 'https://www.ritzcarlton.com/en/hotels/jkarz-the-ritz-carlton-jakarta-mega-kuningan/overview/',
    description: 'Hotel mewah bintang 5 dengan fasilitas kelas dunia di jantung kawasan bisnis Mega Kuningan.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-2',
    name: 'Hotel Indonesia Kempinski Jakarta',
    stars: 5,
    region: 'Jakarta Pusat',
    address: 'Jl. MH Thamrin No.1, Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/KempinskiJakarta',
    socialMedia: 'https://instagram.com/hotelindonesia_kempinski',
    website: 'https://www.kempinski.com/en/hotel-indonesia',
    description: 'Hotel bersejarah yang ikonik di Bundaran HI, menawarkan kemewahan Eropa dengan sentuhan Indonesia.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-3',
    name: 'The Langham, Jakarta',
    stars: 5,
    region: 'Jakarta Selatan',
    address: 'Sudirman Central Business District 8, Senayan, Jakarta Selatan',
    mapsUrl: 'https://maps.app.goo.gl/LanghamJakarta',
    socialMedia: 'https://instagram.com/langham_jakarta',
    website: 'https://www.langhamhotels.com/en/the-langham/jakarta/',
    description: 'Kemewahan kontemporer di kawasan SCBD dengan pemandangan kota yang menakjubkan.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-4',
    name: 'Raffles Jakarta',
    stars: 5,
    region: 'Jakarta Selatan',
    address: 'Ciputra World 1, Jl. Prof. DR. Satrio No.Kav 3 5, Kuningan, Jakarta Selatan',
    mapsUrl: 'https://maps.app.goo.gl/RafflesJakarta',
    socialMedia: 'https://instagram.com/rafflesjakarta',
    website: 'https://www.raffles.com/jakarta/',
    description: 'Hotel mewah yang memadukan seni Hendra Gunawan dengan kemewahan modern.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-6',
    name: 'JW Marriott Hotel Jakarta',
    stars: 5,
    region: 'Jakarta Selatan',
    address: 'Jl. DR Ide Anak Agung Gde Agung Kav E.1.2 No 1 & 2, Mega Kuningan',
    mapsUrl: 'https://maps.app.goo.gl/JWMarriottJakarta',
    socialMedia: 'https://instagram.com/jwmarriottjkt',
    website: 'https://www.marriott.com/hotels/travel/jktjw-jw-marriott-hotel-jakarta/',
    description: 'Hotel mewah dengan layanan prima di kawasan bisnis Mega Kuningan.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-7',
    name: 'The Ritz-Carlton Jakarta, Pacific Place',
    stars: 5,
    region: 'Jakarta Selatan',
    address: 'Sudirman Central Business District (SCBD), Jl. Jend. Sudirman Kav. 52-53',
    mapsUrl: 'https://maps.app.goo.gl/RitzCarltonPP',
    socialMedia: 'https://instagram.com/ritzcarltonjakarta',
    website: 'https://www.ritzcarlton.com/en/hotels/jkarz-the-ritz-carlton-jakarta-pacific-place/overview/',
    description: 'Luxury top dengan panorama kota di pusat bisnis SCBD.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-8',
    name: 'Grand Hyatt Jakarta',
    stars: 5,
    region: 'Jakarta Pusat',
    address: 'Jl. M.H. Thamrin No.Kav. 28-30, Gondangdia, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/GrandHyattJakarta',
    socialMedia: 'https://instagram.com/grandhyattjakarta',
    website: 'https://www.hyatt.com/en-US/hotel/indonesia/grand-hyatt-jakarta/jakgh',
    description: 'Hotel besar berkelas di Thamrin dengan akses langsung ke Plaza Indonesia.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-9',
    name: 'Fairmont Jakarta',
    stars: 5,
    region: 'Jakarta Pusat',
    address: 'Jl. Asia Afrika No.8, Gelora, Tanah Abang',
    mapsUrl: 'https://maps.app.goo.gl/FairmontJakarta',
    socialMedia: 'https://instagram.com/fairmontjakarta',
    website: 'https://www.fairmont.com/jakarta/',
    description: 'Fasilitas lengkap & fine dining di kawasan Senayan.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-10',
    name: 'Mandarin Oriental, Jakarta',
    stars: 5,
    region: 'Jakarta Pusat',
    address: 'Jl. M.H. Thamrin, Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/MandarinOrientalJakarta',
    socialMedia: 'https://instagram.com/mo_jakarta',
    website: 'https://www.mandarinoriental.com/jakarta/',
    description: 'Klasik dan terkenal di Menteng dengan view Bundaran HI.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-5-11',
    name: 'Shangri-La Jakarta',
    stars: 5,
    region: 'Jakarta Pusat',
    address: 'Kota BNI, Jl. Jend. Sudirman Kav. 1, Karet Tengsin',
    mapsUrl: 'https://maps.app.goo.gl/ShangriLaJakarta',
    socialMedia: 'https://instagram.com/shangrilajkt',
    website: 'https://www.shangri-la.com/jakarta/shangrila/',
    description: 'Tetap premium & nyaman dengan taman yang luas di tengah kota.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  },
  // --- 4 STAR ---
  {
    id: 'h-4-1',
    name: 'Novotel Jakarta Gajah Mada',
    stars: 4,
    region: 'Jakarta Barat',
    address: 'Jl. Gajah Mada No.188, Glodok, Jakarta Barat',
    mapsUrl: 'https://maps.app.goo.gl/NovotelGajahMada',
    socialMedia: 'https://instagram.com/novoteljktgajahmada',
    website: 'https://all.accor.com/hotel/5704/index.en.shtml',
    description: 'Hotel modern yang strategis di kawasan bisnis dan sejarah Jakarta Barat.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-4-2',
    name: 'Harris Hotel & Conventions Kelapa Gading',
    stars: 4,
    region: 'Jakarta Utara',
    address: 'Jl. Boulevard Barat Raya, Kelapa Gading, Jakarta Utara',
    mapsUrl: 'https://maps.app.goo.gl/HarrisKelapaGading',
    socialMedia: 'https://instagram.com/harrisklpgading',
    website: 'https://www.discoverasr.com/en/harris/indonesia/harris-hotel-conventions-kelapa-gading-jakarta',
    description: 'Terhubung langsung dengan Mal Kelapa Gading, cocok untuk bisnis dan keluarga.',
    image: 'https://images.unsplash.com/photo-1551882547-ff43c63fe78d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-4-3',
    name: 'Mercure Jakarta Kota',
    stars: 4,
    region: 'Jakarta Barat',
    address: 'Jl. Hayam Wuruk No.123, Jakarta Barat',
    mapsUrl: 'https://maps.app.goo.gl/MercureJakartaKota',
    socialMedia: 'https://instagram.com/mercurejakartakota',
    website: 'https://all.accor.com/hotel/2013/index.en.shtml',
    description: 'Hotel dengan sentuhan budaya Tionghoa yang kental di kawasan Glodok.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-4-4',
    name: 'Holiday Inn Jakarta Kemayoran',
    stars: 4,
    region: 'Jakarta Pusat',
    address: 'Jl. Griya Utama No.1, Kemayoran, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/HolidayInnKemayoran',
    socialMedia: 'https://instagram.com/holidayinnjakartakemayoran',
    website: 'https://www.ihg.com/holidayinn/hotels/us/en/jakarta/jktky/hoteldetail',
    description: 'Pilihan tepat untuk pengunjung JIExpo Kemayoran dengan fasilitas lengkap.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-4-5',
    name: 'Pullman Jakarta Indonesia Thamrin CBD',
    stars: 4,
    region: 'Jakarta Pusat',
    address: 'Jl. M.H. Thamrin No.59, Gondangdia, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/PullmanThamrin',
    socialMedia: 'https://instagram.com/pullmanjakartaindo',
    website: 'https://all.accor.com/hotel/7531/index.en.shtml',
    description: 'Cozy & contemporary di pusat bisnis Thamrin.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-4-6',
    name: 'Aryaduta Menteng',
    stars: 4,
    region: 'Jakarta Pusat',
    address: 'Jl. Prajurit KKO Usman dan Harun No.44-48, Gambir',
    mapsUrl: 'https://maps.app.goo.gl/AryadutaMenteng',
    socialMedia: 'https://instagram.com/aryadutamenteng',
    website: 'https://www.aryaduta.com/aryaduta-menteng-in-jakarta/',
    description: 'Nyaman & dekat pusat pemerintahan dan sejarah.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-4-7',
    name: 'DoubleTree by Hilton Hotel Jakarta - Diponegoro',
    stars: 4,
    region: 'Jakarta Pusat',
    address: 'Jl. Pegangsaan Timur No.17, Cikini, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/DoubleTreeDiponegoro',
    socialMedia: 'https://instagram.com/doubletreejkt',
    website: 'https://www.hilton.com/en/hotels/jktdidi-doubletree-jakarta-diponegoro/',
    description: 'Canggih & instagrammable dengan kolam renang laguna yang luas.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-4-8',
    name: 'The Sultan Hotel & Residence Jakarta',
    stars: 4,
    region: 'Jakarta Pusat',
    address: 'Jl. Gatot Subroto, Gelora, Tanah Abang',
    mapsUrl: 'https://maps.app.goo.gl/SultanHotelJakarta',
    socialMedia: 'https://instagram.com/thesultanjakarta',
    website: 'https://sultanjakarta.com/',
    description: 'Great value & lokasi prima di kawasan Senayan.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
  },
  // --- 3 STAR ---
  {
    id: 'h-3-1',
    name: 'Ibis Styles Jakarta Tanah Abang',
    stars: 3,
    region: 'Jakarta Pusat',
    address: 'Jl. Fachrudin No.22, Tanah Abang, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/IbisTanahAbang',
    socialMedia: 'https://instagram.com/ibisstylesjakarta_tanahabang',
    website: 'https://all.accor.com/hotel/A0G1/index.en.shtml',
    description: 'Hotel dengan desain unik dan ceria di dekat pusat grosir Tanah Abang.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-3-2',
    name: 'Yello Hotel Manggarai',
    stars: 3,
    region: 'Jakarta Selatan',
    address: 'Jl. Minangkabau Timur No.9, Manggarai, Jakarta Selatan',
    mapsUrl: 'https://maps.app.goo.gl/YelloManggarai',
    socialMedia: 'https://instagram.com/yellomanggarai',
    website: 'https://www.discoverasr.com/en/yello/indonesia/yello-hotel-manggarai-jakarta',
    description: 'Hotel bergaya urban dengan konsep seni jalanan yang dinamis.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-3-3',
    name: 'The Jayakarta SP Jakarta Hotel & Spa',
    stars: 3,
    region: 'Jakarta Barat',
    address: 'Jl. Hayam Wuruk No.126, Jakarta Barat',
    mapsUrl: 'https://maps.app.goo.gl/JayakartaHotel',
    socialMedia: 'https://instagram.com/jayakartahotels',
    website: 'https://jayakartahotelsresorts.com/en/hotels/jakarta',
    description: 'Budget friendly dekat Kota Tua dengan fasilitas spa.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-3-4',
    name: 'Merlynn Park Hotel Jakarta',
    stars: 3,
    region: 'Jakarta Pusat',
    address: 'Jl. KH. Hasyim Ashari No.29-31, Petojo Utara, Gambir',
    mapsUrl: 'https://maps.app.goo.gl/MerlynnPark',
    socialMedia: 'https://instagram.com/merlynnparkhotel',
    website: 'https://www.merlynnparkhotel.com/',
    description: 'Strategis & nyaman dengan desain modern.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-3-5',
    name: 'Royal Kuningan Hotel',
    stars: 3,
    region: 'Jakarta Selatan',
    address: 'Jl. Kuningan Persada Kav. 2, Setiabudi',
    mapsUrl: 'https://maps.app.goo.gl/RoyalKuningan',
    socialMedia: 'https://instagram.com/royalkuningan',
    website: 'https://royalkuningan.com/',
    description: 'Mid-range comfortable di kawasan bisnis Kuningan.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-3-6',
    name: 'Hibiscus Inn Jakarta',
    stars: 3,
    region: 'Jakarta Selatan',
    address: 'Jl. Kebon Sirih No.40, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/HibiscusInn',
    socialMedia: '',
    website: '',
    description: 'Budget desk & lokasi strategis di pusat kota.',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-3-7',
    name: 'RedDoorz near Sudirman',
    stars: 3,
    region: 'Jakarta Pusat',
    address: 'Jl. Blora No.34, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/RedDoorzSudirman',
    socialMedia: '',
    website: 'https://www.reddoorz.com/',
    description: 'Murah & bersih di dekat kawasan bisnis Sudirman.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80'
  },
  // --- 2 STAR ---
  {
    id: 'h-2-1',
    name: 'POP! Hotel Tebet Jakarta',
    stars: 2,
    region: 'Jakarta Selatan',
    address: 'Jl. Prof. Dr. Soepomo No.29, Tebet, Jakarta Selatan',
    mapsUrl: 'https://maps.app.goo.gl/PopHotelTebet',
    socialMedia: 'https://instagram.com/pophotels',
    website: 'https://www.discoverasr.com/en/pop/indonesia/pop-hotel-tebet-jakarta',
    description: 'Hotel budget yang ramah lingkungan dan modern di kawasan Tebet yang strategis.',
    image: 'https://images.unsplash.com/photo-1512918766674-ed62b9039c05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-2',
    name: 'Amaris Hotel Juanda',
    stars: 2,
    region: 'Jakarta Pusat',
    address: 'Jl. Ir. H. Juanda No.3, Gambir, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/AmarisJuanda',
    socialMedia: 'https://instagram.com/amarishotel',
    website: 'https://mysantika.com/indonesia/jakarta/amaris-hotel-juanda',
    description: 'Pilihan akomodasi terjangkau di dekat Stasiun Juanda dan Masjid Istiqlal.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-3',
    name: 'RedDoorz Plus near Mangga Besar',
    stars: 2,
    region: 'Jakarta Barat',
    address: 'Jl. Mangga Besar Raya No.1, Jakarta Barat',
    mapsUrl: 'https://maps.app.goo.gl/RedDoorzManggaBesar',
    socialMedia: '',
    website: 'https://www.reddoorz.com/',
    description: 'Hemat & dekat makanan kaki lima di kawasan Mangga Besar.',
    image: 'https://images.unsplash.com/photo-1512918766674-ed62b9039c05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-4',
    name: 'Favehotel LTC Glodok',
    stars: 2,
    region: 'Jakarta Barat',
    address: 'LTC Glodok, Jl. Hayam Wuruk No.127',
    mapsUrl: 'https://maps.app.goo.gl/FavehotelGlodok',
    socialMedia: 'https://instagram.com/favehotels',
    website: 'https://www.favehotels.com/en/hotel/view/42/favehotel-ltc-glodok---jakarta',
    description: 'Budget bersih & location dekat wisata sejarah Kota Tua.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-5',
    name: 'Whiz Prime Hotel Kemayoran',
    stars: 2,
    region: 'Jakarta Pusat',
    address: 'Jl. Pasar Baru Timur No.21, Kemayoran',
    mapsUrl: 'https://maps.app.goo.gl/WhizPrimeKemayoran',
    socialMedia: 'https://instagram.com/whizprimekemayoran',
    website: 'https://www.whizprime.com/kemayoran-jakarta/',
    description: 'Simple stay dekat JIExpo Kemayoran.',
    image: 'https://images.unsplash.com/photo-1512918766674-ed62b9039c05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-6',
    name: 'Amaris Hotel Mangga Dua',
    stars: 2,
    region: 'Jakarta Utara',
    address: 'Jl. Gunung Sahari Raya No.1, Pademangan',
    mapsUrl: 'https://maps.app.goo.gl/AmarisManggaDua',
    socialMedia: 'https://instagram.com/amarishotel',
    website: 'https://mysantika.com/indonesia/jakarta/amaris-hotel-mangga-dua-square',
    description: 'Hemat pilihan traveler di dekat pusat belanja Mangga Dua.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-7',
    name: 'Hotel 88 Mangga Besar',
    stars: 2,
    region: 'Jakarta Barat',
    address: 'Jl. Mangga Besar Raya No.120',
    mapsUrl: 'https://maps.app.goo.gl/Hotel88ManggaBesar',
    socialMedia: 'https://instagram.com/hotel88manggabesar',
    website: 'https://www.hotel88.co.id/mangga-besar-120/',
    description: 'Cozy murah & dekat transportasi umum.',
    image: 'https://images.unsplash.com/photo-1512918766674-ed62b9039c05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-8',
    name: 'Capsule Hotel Jakarta',
    stars: 2,
    region: 'Jakarta Pusat',
    address: 'Jl. KH. Wahid Hasyim No.131, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/CapsuleHotelJakarta',
    socialMedia: '',
    website: '',
    description: 'Budget capsul modern di pusat kota.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-9',
    name: 'Zest Hotel Airport Jakarta',
    stars: 2,
    region: 'Jakarta Barat',
    address: 'Jl. Hussein Sastranegara No.Kav. 1, Kalideres',
    mapsUrl: 'https://maps.app.goo.gl/ZestHotelAirport',
    socialMedia: 'https://instagram.com/zesthotels',
    website: 'https://www.zesthotel.com/en-gb/zest-hotel-airport-jakarta',
    description: 'Budget nyaman dekat bandara Soekarno-Hatta.',
    image: 'https://images.unsplash.com/photo-1512918766674-ed62b9039c05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-10',
    name: 'Ibis Budget Jakarta Grogol',
    stars: 2,
    region: 'Jakarta Barat',
    address: 'Jl. Daan Mogot No.45, Grogol',
    mapsUrl: 'https://maps.app.goo.gl/IbisBudgetGrogol',
    socialMedia: 'https://instagram.com/ibisbudgetjakartagrogol',
    website: 'https://all.accor.com/hotel/9222/index.en.shtml',
    description: 'Murah & efektif untuk traveler yang dinamis.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-11',
    name: 'OYO Life Suites Jakarta',
    stars: 2,
    region: 'Jakarta Selatan',
    address: 'Jl. Kebon Sirih No.10, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/OYOLifeSuites',
    socialMedia: '',
    website: 'https://www.oyorooms.com/',
    description: 'Extended stay hemat di pusat kota.',
    image: 'https://images.unsplash.com/photo-1512918766674-ed62b9039c05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-12',
    name: 'Maison At Cikini',
    stars: 2,
    region: 'Jakarta Pusat',
    address: 'Jl. Cikini Raya No.64, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/MaisonAtCikini',
    socialMedia: 'https://instagram.com/maisonatcikini',
    website: '',
    description: 'Boutique stay dengan nuansa klasik di Cikini.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-13',
    name: 'Artotel Gelora Senayan',
    stars: 2,
    region: 'Jakarta Pusat',
    address: 'Jl. Pintu Satu Senayan, Gelora',
    mapsUrl: 'https://maps.app.goo.gl/ArtotelGeloraSenayan',
    socialMedia: 'https://instagram.com/artotelgelorasenayan',
    website: 'https://artotelgroup.com/hotels/artotel/gelora-senayan-jakarta',
    description: 'Stylish hotel dengan galeri seni di kawasan GBK.',
    image: 'https://images.unsplash.com/photo-1512918766674-ed62b9039c05?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-14',
    name: 'Hotel Monopoli Jakarta',
    stars: 2,
    region: 'Jakarta Selatan',
    address: 'Jl. Kemang Raya No.7, Bangka, Mampang Prapatan',
    mapsUrl: 'https://maps.app.goo.gl/HotelMonopoli',
    socialMedia: 'https://instagram.com/hotelmonopoli',
    website: 'https://www.hotelmonopoli.com/',
    description: 'Hip & budget hotel di kawasan Kemang yang trendi.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-2-15',
    name: 'Harris Suites FX Sudirman',
    stars: 2,
    region: 'Jakarta Pusat',
    address: 'Jl. Jend. Sudirman, Gelora, Tanah Abang',
    mapsUrl: 'https://maps.app.goo.gl/HarrisFXSudirman',
    socialMedia: 'https://instagram.com/harrisfxsudirman',
    website: 'https://www.discoverasr.com/en/harris/indonesia/harris-suites-fx-sudirman-jakarta',
    description: 'Great location di atas mal FX Sudirman.',
    image: 'https://images.unsplash.com/photo-1512918766674-ed62b9039c05?auto=format&fit=crop&w=800&q=80'
  },
  // --- 1 STAR ---
  {
    id: 'h-1-1',
    name: 'Bobobox Pods Kota Tua',
    stars: 1,
    region: 'Jakarta Barat',
    address: 'Jl. Taman Fatahillah No.3, Pinangsia, Jakarta Barat',
    mapsUrl: 'https://maps.app.goo.gl/BoboboxKotaTua',
    socialMedia: 'https://instagram.com/bobobox_id',
    website: 'https://bobobox.com/',
    description: 'Hotel kapsul modern berbasis teknologi di kawasan bersejarah Kota Tua.',
    image: 'https://images.unsplash.com/photo-1555854816-802f188095e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'h-1-2',
    name: 'Whiz Capsule Hotel Thamrin',
    stars: 1,
    region: 'Jakarta Pusat',
    address: 'Jl. Teluk Betung No.43, Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/WhizCapsuleThamrin',
    socialMedia: 'https://instagram.com/whizcapsule',
    website: 'https://www.whizcapsule.com/thamrin-jakarta/',
    description: 'Akomodasi kapsul yang efisien dan bersih di pusat kota Jakarta.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRANSPORT_ROUTES: TransportRoute[] = [
  {
    id: 'mrt-ns',
    name: 'MRT North-South Line',
    type: 'MRT',
    color: '#0055A4',
    fare: 'Rp 3.000 - Rp 14.000',
    stations: [
      { name: 'Lebak Bulus Grab' },
      { name: 'Fatmawati Indomaret' },
      { name: 'Cipete Raya' },
      { name: 'Haji Nawi' },
      { name: 'Blok A' },
      { name: 'Blok M BCA' },
      { name: 'ASEAN', isInterchange: true },
      { name: 'Senayan Mastercard' },
      { name: 'Istora Mandiri' },
      { name: 'Bendungan Hilir' },
      { name: 'Setiabudi Astra' },
      { name: 'Dukuh Atas BNI', isInterchange: true },
      { name: 'Bundaran HI Bank DKI' }
    ]
  },
  {
    id: 'lrt-jkt',
    name: 'LRT Jakarta (Phase 1)',
    type: 'LRT',
    color: '#E31E24',
    fare: 'Flat Rp 5.000',
    stations: [
      { name: 'Pegangsaan Dua' },
      { name: 'Boulevard Utara' },
      { name: 'Boulevard Selatan' },
      { name: 'Pulomas' },
      { name: 'Equestrian' },
      { name: 'Velodrome', isInterchange: true }
    ]
  },
  {
    id: 'lrt-jb-cb',
    name: 'LRT Jabodebek (Cibubur Line)',
    type: 'LRT',
    color: '#00A19D',
    fare: 'Rp 5.000 - Rp 20.000',
    stations: [
      { name: 'Dukuh Atas', isInterchange: true },
      { name: 'Setiabudi' },
      { name: 'Rasuna Said' },
      { name: 'Kuningan' },
      { name: 'Pancoran' },
      { name: 'Cikoko', isInterchange: true },
      { name: 'Ciliwung' },
      { name: 'Cawang', isInterchange: true },
      { name: 'TMII' },
      { name: 'Kampung Rambutan' },
      { name: 'Ciracas' },
      { name: 'Harjamukti' }
    ]
  },
  {
    id: 'lrt-jb-bk',
    name: 'LRT Jabodebek (Bekasi Line)',
    type: 'LRT',
    color: '#F9A825',
    fare: 'Rp 5.000 - Rp 20.000',
    stations: [
      { name: 'Dukuh Atas', isInterchange: true },
      { name: 'Setiabudi' },
      { name: 'Rasuna Said' },
      { name: 'Kuningan' },
      { name: 'Pancoran' },
      { name: 'Cikoko', isInterchange: true },
      { name: 'Ciliwung' },
      { name: 'Cawang', isInterchange: true },
      { name: 'Halim', isInterchange: true },
      { name: 'Jatibening Baru' },
      { name: 'Cikunir 1' },
      { name: 'Cikunir 2' },
      { name: 'Bekasi Barat' },
      { name: 'Jatimulya' }
    ]
  },
  {
    id: 'tj-c1',
    name: 'TransJakarta Koridor 1 (Blok M - Kota)',
    type: 'TJ',
    color: '#ED1C24',
    fare: 'Rp 3.500 (Flat)',
    stations: [
      { name: 'Blok M' },
      { name: 'Masjid Agung' },
      { name: 'Bundaran Senayan' },
      { name: 'Gelora Bung Karno' },
      { name: 'Polda Metro Jaya' },
      { name: 'Bendungan Hilir' },
      { name: 'Karet Sudirman' },
      { name: 'Dukuh Atas 1' },
      { name: 'Tosari' },
      { name: 'Bundaran HI' },
      { name: 'Sarinah' },
      { name: 'Bank Indonesia' },
      { name: 'Monas' },
      { name: 'Harmoni Central' },
      { name: 'Sawah Besar' },
      { name: 'Mangga Besar' },
      { name: 'Olimpimo' },
      { name: 'Glodok' },
      { name: 'Kota' }
    ]
  },
  {
    id: 'tj-c2',
    name: 'TransJakarta Koridor 2 (Pulo Gadung - Harmoni)',
    type: 'TJ',
    color: '#00AEEF',
    fare: 'Rp 3.500 (Flat)',
    stations: [
      { name: 'Pulo Gadung 1' },
      { name: 'Bermis' },
      { name: 'Pulomas' },
      { name: 'ASMI' },
      { name: 'Pedongkelan' },
      { name: 'Cempaka Timur' },
      { name: 'RS Islam' },
      { name: 'Galur' },
      { name: 'Senen' },
      { name: 'Atrium' },
      { name: 'RSPAD' },
      { name: 'Deplu' },
      { name: 'Gambir 1' },
      { name: 'Istiqlal' },
      { name: 'Juanda' },
      { name: 'Pecenongan' },
      { name: 'Harmoni Central' }
    ]
  },
  {
    id: 'tj-c9',
    name: 'TransJakarta Koridor 9 (Pinang Ranti - Pluit)',
    type: 'TJ',
    color: '#FBB040',
    fare: 'Rp 3.500 (Flat)',
    stations: [
      { name: 'Pinang Ranti' },
      { name: 'Tamini Square' },
      { name: 'Cawang UKI' },
      { name: 'BNN' },
      { name: 'Cawang Ciliwung' },
      { name: 'Tebet BKPM' },
      { name: 'Pancoran Tugu' },
      { name: 'Kuningan Barat' },
      { name: 'Gatot Subroto LIPI' },
      { name: 'Semanggi' },
      { name: 'Senayan JCC' },
      { name: 'Slipi Petamburan' },
      { name: 'Kemanggisan' },
      { name: 'RS Harapan Kita' },
      { name: 'Grogol 2' },
      { name: 'Jelambar' },
      { name: 'Indosiar' },
      { name: 'Latumeten' },
      { name: 'Jembatan Besi' },
      { name: 'Bandengan' },
      { name: 'Penjaringan' },
      { name: 'Pluit' }
    ]
  }
];

export const JAKARTA_PLACES: Place[] = [
  // --- JAKARTA PUSAT - ATTRACTION ---
  {
    id: 'jp-a-1',
    name: 'Hutan Kota GBK',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Jenderal Sudirman No.1, Gelora, Tanah Abang, Jakarta Pusat 10270',
    mapsUrl: 'https://maps.google.com/?q=Hutan+Kota+GBK',
    socialMedia: 'https://instagram.com/hutankotabykai',
    description: 'Hutan Kota GBK merupakan ruang terbuka hijau modern di tengah kawasan bisnis Jakarta yang menawarkan suasana alam dengan latar gedung pencakar langit.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-2',
    name: 'Taman Ismail Marzuki (TIM)',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Cikini Raya No.73, Menteng, Jakarta Pusat 10330',
    mapsUrl: 'https://maps.google.com/?q=Taman+Ismail+Marzuki',
    socialMedia: 'https://instagram.com/timjakarta',
    description: 'Taman Ismail Marzuki adalah pusat seni dan budaya terbesar di Jakarta yang menjadi rumah bagi pertunjukan teater, konser musik, pameran seni, serta Planetarium Jakarta.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-3',
    name: 'Monumen Nasional (Monas)',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Medan Merdeka Barat, Gambir, Jakarta Pusat 10110',
    mapsUrl: 'https://maps.google.com/?q=Monumen+Nasional',
    socialMedia: 'https://instagram.com/monumen.nasional',
    description: 'Monumen Nasional merupakan ikon utama Indonesia yang dibangun untuk mengenang perjuangan kemerdekaan.',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-4',
    name: 'Lapangan Banteng',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Lapangan Banteng Barat, Pasar Baru, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Lapangan+Banteng',
    socialMedia: '',
    description: 'Lapangan Banteng adalah taman kota bersejarah yang kini telah direvitalisasi menjadi ruang publik modern.',
    image: 'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-5',
    name: 'Galeri Nasional Indonesia',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Medan Merdeka Timur No.14, Gambir, Jakarta Pusat 10110',
    mapsUrl: 'https://maps.google.com/?q=Galeri+Nasional+Indonesia',
    socialMedia: 'https://instagram.com/galerinasional',
    description: 'Galeri Nasional Indonesia merupakan pusat pameran seni rupa nasional.',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-6',
    name: 'Perpustakaan Nasional RI',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Medan Merdeka Selatan No.11, Gambir, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Perpustakaan+Nasional+RI',
    socialMedia: 'https://instagram.com/perpusnas.go.id',
    description: 'Perpustakaan Nasional RI adalah salah satu gedung perpustakaan tertinggi di dunia.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-7',
    name: 'Taman Menteng',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. HOS Cokroaminoto, Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Taman+Menteng',
    socialMedia: '',
    description: 'Taman Menteng merupakan taman kota modern dengan konsep ruang hijau terbuka dan rumah kaca ikonik.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-8',
    name: 'Museum Nasional Indonesia',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Museum+Nasional+Indonesia',
    socialMedia: 'https://instagram.com/museumnasionalindonesia',
    description: 'Museum Nasional atau Museum Gajah menyimpan ribuan koleksi sejarah Indonesia.',
    image: 'https://images.unsplash.com/photo-1518998053574-53f1f61f90ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-9',
    name: 'Sarinah Skydeck',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Gedung Sarinah, Jl. MH Thamrin No.11, Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Sarinah+Skydeck',
    socialMedia: 'https://instagram.com/sarinahindonesia',
    description: 'Skydeck Sarinah menawarkan area rooftop publik dengan view langsung pusat bisnis Jakarta.',
    image: 'https://images.unsplash.com/photo-1523464862212-d6631d073194?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-10',
    name: 'Pasar Baru Jakarta',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Pasar Baru, Sawah Besar, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Pasar+Baru+Jakarta',
    socialMedia: 'https://instagram.com/pasarbarujakarta',
    description: 'Pasar Baru adalah kawasan belanja legendaris sejak era kolonial Belanda.',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-11',
    name: 'Masjid Istiqlal',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Taman Wijaya Kusuma, Pasar Baru, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Masjid+Istiqlal',
    socialMedia: 'https://instagram.com/masjidistiqlal.official',
    description: 'Masjid terbesar di Asia Tenggara dan ikon toleransi beragama di Indonesia.',
    image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-12',
    name: 'Gereja Katedral Jakarta',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Katedral No.7, Pasar Baru, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Gereja+Katedral+Jakarta',
    socialMedia: 'https://instagram.com/katedraljakarta',
    description: 'Gereja Katolik dengan arsitektur neo-gotik yang megah, berhadapan dengan Masjid Istiqlal.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-4',
    name: 'Giyanti Coffee Roastery',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Jl. Surabaya No.20, Menteng',
    mapsUrl: 'https://maps.google.com/?q=Giyanti+Coffee',
    socialMedia: 'https://instagram.com/giyanticoffee',
    description: 'Specialty coffee shop terkenal di Menteng.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-5',
    name: 'Bakoel Koffie',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Jl. Cikini Raya No.25',
    mapsUrl: 'https://maps.google.com/?q=Bakoel+Koffie',
    socialMedia: 'https://instagram.com/bakoelkoffie',
    description: 'Kedai kopi legendaris sejak 1878.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80'
  },

  // --- JAKARTA PUSAT - FOOD & BEVERAGE ---
  {
    id: 'jp-fb-1',
    name: 'HOMS Jakarta',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Jl. Tanah Abang III No.13, Petojo Selatan, Gambir, Jakarta Pusat 10160',
    mapsUrl: 'https://maps.google.com/?q=HOMS+Jakarta',
    socialMedia: 'https://instagram.com/homsjakarta',
    description: 'HOMS Jakarta dikenal sebagai hidden gem comfort food di pusat kota.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-2',
    name: 'Kopikina Cikini',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Jl. Cikini Raya No.66, Menteng, Jakarta Pusat 10330',
    mapsUrl: 'https://maps.google.com/?q=Kopikina+Cikini',
    socialMedia: 'https://instagram.com/kopikina.id',
    description: 'Kopikina merupakan coffee shop aesthetic favorit di area Cikini.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-3',
    name: 'Ragusa Es Italia',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Jl. Veteran I No.10, Gambir, Jakarta Pusat 10110',
    mapsUrl: 'https://maps.google.com/?q=Ragusa+Es+Italia',
    socialMedia: 'https://instagram.com/ragusa.jkt',
    description: 'Ragusa Es Italia adalah toko es krim legendaris sejak tahun 1932.',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-10',
    name: 'Ayam Goreng Suharti Menteng',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Jl. Menteng Raya No.58, Kebon Sirih, Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com/?q=Ayam+Goreng+Suharti+Menteng',
    socialMedia: 'https://instagram.com/ayamgorengsuharti',
    description: 'Ayam Goreng Suharti dikenal sebagai restoran ayam goreng kremes premium.',
    image: 'https://images.unsplash.com/photo-1562601519-1b4bb05072b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-13',
    name: 'Bundaran HI',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/PW6S4t6tww9EGKdQ9',
    socialMedia: '',
    description: 'Landmark modern di pusat kota, sering jadi spot foto & event.',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-14',
    name: 'Suropati Park',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/VEbz6ZiTvVqf1ikr5',
    socialMedia: '',
    description: 'Taman kota Instagram-able & sering ada live musik.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-15',
    name: 'Museum Taman Prasasti',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Gambir, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/tKF2jwTHsakmEARk8',
    socialMedia: '',
    description: 'Museum nisan & sejarah seni pemakaman kolonial.',
    image: 'https://images.unsplash.com/photo-1518998053574-53f1f61f90ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-16',
    name: 'Taman Kodok Menteng',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/nVrQd5CWkH7i2XnE8',
    socialMedia: '',
    description: 'Spot taman kecil yang aesthetic & santai.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-17',
    name: 'Arjuna Wijaya Statue',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/2YJpku7GF6Xc2B7a6',
    socialMedia: '',
    description: 'Patung bersejarah di area pusat bisnis Jakarta.',
    image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-a-18',
    name: 'Jakarta Art Building',
    region: 'Jakarta Pusat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Pasar Baru, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/Qq1n9x64q2Y2UE3G9',
    socialMedia: '',
    description: 'Gedung seni klasik & teater bersejarah.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-12',
    name: 'SEMAJA Menteng',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/DvnNT58Xmvdd5vTBA',
    socialMedia: 'https://instagram.com/semaja.id',
    description: 'Dining classy dengan konsep modern Indonesia.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-13',
    name: 'Plataran Menteng',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/j5ht7yb9jpBeUnYx5',
    socialMedia: 'https://instagram.com/plataranresorts',
    description: 'Royal dining dengan suasana taman klasik.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-14',
    name: 'Amanaia Menteng',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Senen, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/1n1Dz8SN7ixW2Utj8',
    socialMedia: 'https://instagram.com/amanaia.id',
    description: 'Fine dining dan inovasi kuliner Indonesia.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-15',
    name: 'Kaum Jakarta',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/6PtE3x3WGP1cnTHx8',
    socialMedia: 'https://instagram.com/kaumrestaurant',
    description: 'Masakan Indonesia dari berbagai daerah, populer di ICS.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-16',
    name: 'Seribu Rasa Menteng',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/G3KYBhd7om4RTpFH7',
    socialMedia: 'https://instagram.com/seriburasa_id',
    description: 'Nikmati ragam makanan Nusantara favorit.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-17',
    name: 'Cloud Lounge Jakarta',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/1Y5xeG5eR9bHnXrA6',
    socialMedia: '',
    description: 'Rooftop bar & lounge dengan view menawan.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-18',
    name: 'Relish Bistro',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/V1u5j2NPDjCQvWig9',
    socialMedia: 'https://instagram.com/relishbistrojakarta',
    description: 'Bistro hits untuk brunch & hangout.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-19',
    name: 'Lara Djonggrang',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/KA3zg8nQGvQ2QNVy8',
    socialMedia: 'https://instagram.com/laradjonggrang',
    description: 'Fine dining tema budaya Indonesia klasik.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-20',
    name: 'Kawisari Cafe & Eatery',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/KVt96YXuF2pAaZ7b8',
    socialMedia: 'https://instagram.com/kawisaricafe',
    description: 'Cafe aesthetic kopi & makanan brunch.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jp-fb-21',
    name: 'Kopi Nako Monas',
    region: 'Jakarta Pusat',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Gambir, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/yF9rYb4PQmg9xNqc8',
    socialMedia: 'https://instagram.com/kopinako.id',
    description: 'Kopi kekinian dekat Monumen Nasional.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },

  // --- JAKARTA SELATAN - ATTRACTION ---
  {
    id: 'js-a-1',
    name: 'M Bloc Space',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Panglima Polim No.37, Melawai, Kebayoran Baru, Jakarta Selatan 12160',
    mapsUrl: 'https://maps.google.com/?q=M+Bloc+Space',
    socialMedia: 'https://instagram.com/mblocspace',
    description: 'M Bloc Space merupakan kawasan kreatif urban hasil revitalisasi bangunan Peruri lama.',
    image: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-2',
    name: 'Ashta District 8',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Senopati No.8, SCBD, Kebayoran Baru, Jakarta Selatan 12190',
    mapsUrl: 'https://maps.google.com/?q=Ashta+District+8',
    socialMedia: 'https://instagram.com/ashtadistrict8',
    description: 'Ashta District 8 adalah lifestyle complex modern di kawasan SCBD.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-3',
    name: 'Tebet Eco Park',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Tebet Barat Raya, Tebet, Jakarta Selatan 12820',
    mapsUrl: 'https://maps.google.com/?q=Tebet+Eco+Park',
    socialMedia: 'https://instagram.com/tebetecopark',
    description: 'Tebet Eco Park merupakan taman kota ramah lingkungan.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-4',
    name: 'Taman Ayodya',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Lamandau III, Kebayoran Baru',
    mapsUrl: 'https://maps.google.com/?q=Taman+Ayodya',
    socialMedia: '',
    description: 'Taman kota dengan danau kecil di tengah Kebayoran Baru.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-5',
    name: 'Senayan Park (SPARK)',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Gerbang Pemuda No.3',
    mapsUrl: 'https://maps.google.com/?q=Senayan+Park',
    socialMedia: 'https://instagram.com/senayan.park',
    description: 'Lifestyle mall dengan area outdoor dan view danau.',
    image: 'https://images.unsplash.com/photo-1523464862212-d6631d073194?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-6',
    name: 'Setu Babakan',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Srengseng Sawah, Jagakarsa, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Setu+Babakan',
    socialMedia: 'https://instagram.com/setubabakan',
    description: 'Pusat Perkampungan Budaya Betawi untuk mengenal sejarah dan tradisi asli Jakarta.',
    image: 'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-7',
    name: 'Taman Margasatwa Ragunan',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Harsono RM No.1, Ragunan, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Ragunan+Zoo',
    socialMedia: 'https://instagram.com/ragunanzoo',
    description: 'Kebun binatang tertua di Indonesia dengan koleksi flora dan fauna yang sangat lengkap.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-8',
    name: 'Museum Tengah Kebun',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Kemang, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Museum+Tengah+Kebun',
    socialMedia: '',
    description: 'Museum pribadi unik dengan koleksi seni di tengah taman asri.',
    image: 'https://images.unsplash.com/photo-1518998053574-53f1f61f90ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-9',
    name: 'KidZania Jakarta',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Up to 100k',
    address: 'Pacific Place Mall, SCBD',
    mapsUrl: 'https://maps.google.com/?q=KidZania+Jakarta',
    socialMedia: 'https://instagram.com/kidzaniajakarta',
    description: 'Taman bermain edukatif bertema profesi untuk anak-anak.',
    image: 'https://images.unsplash.com/photo-1513889959010-65a4ec810edd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-10',
    name: 'Schmutzer Primate Center',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Ragunan, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Pusat+Primat+Schmutzer',
    socialMedia: '',
    description: 'Pusat pelestarian primata kelas dunia di dalam kawasan Ragunan.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-11',
    name: 'Como Park',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Kemang Timur, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Como+Park+Kemang',
    socialMedia: 'https://instagram.com/comoparkjkt',
    description: 'Community space pet-friendly dengan taman anjing dan berbagai tenant F&B.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-12',
    name: 'Urban Forest Cipete',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. RS. Fatmawati Raya No.45, Cipete',
    mapsUrl: 'https://maps.google.com/?q=Urban+Forest+Cipete',
    socialMedia: 'https://instagram.com/urbanforest.cipete',
    description: 'Ruang terbuka hijau modern dengan berbagai pilihan cafe hits.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-a-13',
    name: 'Pondok Indah Water Park',
    region: 'Jakarta Selatan',
    category: 'Attraction',
    priceRange: 'Up to 100k',
    address: 'Pondok Indah Mall, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Pondok+Indah+Water+Park',
    socialMedia: 'https://instagram.com/piwaterpark',
    description: 'Taman bermain air premium dengan fasilitas lengkap.',
    image: 'https://images.unsplash.com/photo-1513889959010-65a4ec810edd?auto=format&fit=crop&w=800&q=80'
  },

  // --- JAKARTA SELATAN - FOOD & BEVERAGE ---
  {
    id: 'js-fb-1',
    name: 'Taman Literasi Blok M',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Free',
    address: 'Jl. Sisingamangaraja, Melawai, Kebayoran Baru, Jakarta Selatan',
    mapsUrl: 'https://maps.app.goo.gl/VmQYxTz6jM2L9V6R9',
    socialMedia: 'https://instagram.com/tamanliterasi',
    description: 'Taman Literasi Blok M menjadi salah satu ruang publik modern paling hidup.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-2',
    name: 'Futago Ya! Ramen',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Jl. Panglima Polim V No.38, Melawai, Kebayoran Baru, Jakarta Selatan',
    mapsUrl: 'https://maps.app.goo.gl/JR5m1xq9yBZL9bbR8',
    socialMedia: 'https://instagram.com/futagoya',
    description: 'Hidden gem ramen shop di area Blok M yang terkenal dengan rasa autentik Jepang.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-3',
    name: 'Scarlett\'s Cafe Senopati',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Senopati, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Scarlett\'s+Cafe+Senopati',
    socialMedia: 'https://instagram.com/scarletts__cafe',
    description: 'Cafe viral dengan dessert dan kue-kue cantik.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-4',
    name: 'Monsieur Spoon Senopati',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Senopati, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Monsieur+Spoon+Senopati',
    socialMedia: 'https://instagram.com/monsieurspoon',
    description: 'Bakery dan cafe asal Bali yang terkenal dengan croissant-nya.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-5',
    name: 'Sophie Authentique',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Cipete, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Sophie+Authentique+Cipete',
    socialMedia: 'https://instagram.com/sophieauthentique',
    description: 'Bakery Prancis otentik dengan suasana yang homey.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-6',
    name: 'Anomali Coffee',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Senopati, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Anomali+Coffee+Senopati',
    socialMedia: 'https://instagram.com/anomalicoffee',
    description: 'Kopi spesialti Indonesia dengan biji kopi lokal pilihan.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-7',
    name: 'Bakmi Berdikari',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Jl. Tebet Timur Dalam Raya No.37',
    mapsUrl: 'https://maps.google.com/?q=Bakmi+Berdikari+Tebet',
    socialMedia: 'https://instagram.com/bakmiberdikari',
    description: 'Bakmi legendaris dengan berbagai pilihan menu oriental.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-8',
    name: 'Sate Khas Senayan',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Pakubuwono, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Sate+Khas+Senayan+Pakubuwono',
    socialMedia: 'https://instagram.com/satekhassenayan',
    description: 'Restoran keluarga yang menyajikan masakan Indonesia klasik.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-9',
    name: 'Legend of Noodle',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Senopati, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Legend+of+Noodle+Senopati',
    socialMedia: 'https://instagram.com/legendofnoodle',
    description: 'Restoran mie Korea yang terkenal dengan porsi besar.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-10',
    name: 'Lawless Burgerbar',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Kemang, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Lawless+Burgerbar+Kemang',
    socialMedia: 'https://instagram.com/lawless.burgerbar',
    description: 'Burger bar bertema heavy metal dengan porsi burger yang masif.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'js-fb-11',
    name: 'Woodpecker Coffee',
    region: 'Jakarta Selatan',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Panglima Polim, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Woodpecker+Coffee+Panglima+Polim',
    socialMedia: 'https://instagram.com/woodpeckerjkt',
    description: 'Coffee shop minimalis yang nyaman untuk bekerja.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },

  // --- JAKARTA BARAT - ATTRACTION ---
  {
    id: 'jb-a-1',
    name: 'Museum MACAN',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'AKR Tower Level M, Jl. Panjang No.5, Kebon Jeruk, Jakarta Barat 11530',
    mapsUrl: 'https://maps.google.com/?q=Museum+MACAN',
    socialMedia: 'https://instagram.com/museummacan',
    description: 'Museum seni modern bertaraf internasional.',
    image: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-2',
    name: 'Kota Tua Jakarta',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Taman Fatahillah, Pinangsia, Jakarta Barat',
    mapsUrl: 'https://maps.google.com/?q=Kota+Tua+Jakarta',
    socialMedia: 'https://instagram.com/kotatua.jkt',
    description: 'Kawasan heritage peninggalan Batavia dengan bangunan kolonial klasik.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-3',
    name: 'Tribeca Park',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Central Park Mall',
    mapsUrl: 'https://maps.google.com/?q=Tribeca+Park',
    socialMedia: '',
    description: 'Taman outdoor populer di kawasan Central Park.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-4',
    name: 'Museum Fatahillah',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Taman Fatahillah No.1, Pinangsia, Jakarta Barat',
    mapsUrl: 'https://maps.google.com/?q=Museum+Fatahillah',
    socialMedia: 'https://instagram.com/museumsejarahjakarta',
    description: 'Museum Sejarah Jakarta yang terletak di gedung balai kota lama Batavia.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-5',
    name: 'Skywalk Senayan Park',
    region: 'Jakarta Pusat', // Wait, SPARK is usually considered Pusat/Selatan border, let's stick to existing
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Senayan Park Mall',
    mapsUrl: 'https://maps.google.com/?q=Skywalk+Senayan+Park',
    socialMedia: 'https://instagram.com/senayan.park',
    description: 'Jembatan layang ikonik dengan lantai kaca dan pemandangan gedung tinggi Jakarta.',
    image: 'https://images.unsplash.com/photo-1523464862212-d6631d073194?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-6',
    name: 'Hutan Kota Srengseng',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. H. Kelik, Srengseng, Kembangan, Jakarta Barat',
    mapsUrl: 'https://maps.google.com/?q=Hutan+Kota+Srengseng',
    socialMedia: '',
    description: 'Hutan kota yang asri dengan danau dan jalur jogging di Jakarta Barat.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-7',
    name: 'Museum Wayang',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Pintu Besar Utara No.27, Kota Tua',
    mapsUrl: 'https://maps.google.com/?q=Museum+Wayang',
    socialMedia: 'https://instagram.com/museumwayang',
    description: 'Museum yang mendedikasikan koleksinya untuk berbagai jenis wayang dari seluruh Indonesia.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-8',
    name: 'Museum Seni Rupa dan Keramik',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Pos Kota No.2, Pinangsia',
    mapsUrl: 'https://maps.google.com/?q=Museum+Seni+Rupa+dan+Keramik',
    socialMedia: '',
    description: 'Museum yang memamerkan kerajinan keramik tradisional dan lukisan seni rupa Indonesia.',
    image: 'https://images.unsplash.com/photo-1518998053574-53f1f61f90ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-9',
    name: 'Museum Bank Indonesia',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Pintu Besar Utara No.3, Pinangsia',
    mapsUrl: 'https://maps.google.com/?q=Museum+Bank+Indonesia',
    socialMedia: '',
    description: 'Museum modern yang menyajikan sejarah perbankan dan ekonomi Indonesia secara interaktif.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-10',
    name: 'Museum Mandiri',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Lapangan Stasiun No.1, Pinangsia',
    mapsUrl: 'https://maps.google.com/?q=Museum+Mandiri',
    socialMedia: '',
    description: 'Museum perbankan dengan arsitektur kolonial yang megah dan koleksi peralatan bank tempo dulu.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-11',
    name: 'Toko Merah',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Kali Besar Barat No.11, Pinangsia',
    mapsUrl: 'https://maps.google.com/?q=Toko+Merah',
    socialMedia: '',
    description: 'Bangunan ikonik berwarna merah peninggalan zaman VOC yang sering menjadi spot foto.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-12',
    name: 'Jembatan Kota Intan',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Ancol No.1, Pinangsia',
    mapsUrl: 'https://maps.google.com/?q=Jembatan+Kota+Intan',
    socialMedia: '',
    description: 'Jembatan gantung tertua di Indonesia yang dibangun pada masa kolonial Belanda.',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-13',
    name: 'Magic Art 3D Museum',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Kali Besar Timur No.9, Pinangsia',
    mapsUrl: 'https://maps.google.com/?q=Magic+Art+3D+Museum+Jakarta',
    socialMedia: 'https://instagram.com/magicartmuseum.jakarta',
    description: 'Museum seni 3D interaktif dengan berbagai zona ilusi yang menarik.',
    image: 'https://images.unsplash.com/photo-1518998053574-53f1f61f90ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-14',
    name: 'Central Park Mall',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Letjen S. Parman No.28, Grogol Petamburan',
    mapsUrl: 'https://maps.google.com/?q=Central+Park+Mall',
    socialMedia: 'https://instagram.com/centralparkmall',
    description: 'Salah satu pusat perbelanjaan terbesar dengan taman outdoor Tribeca yang asri.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-15',
    name: 'Lippo Mall Puri',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Puri Indah Raya, Kembangan',
    mapsUrl: 'https://maps.google.com/?q=Lippo+Mall+Puri',
    socialMedia: 'https://instagram.com/lippomallpuri',
    description: 'Pusat perbelanjaan modern dan lengkap di kawasan Jakarta Barat.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jb-a-16',
    name: 'Puri Indah Mall',
    region: 'Jakarta Barat',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Puri Indah Raya, Kembangan',
    mapsUrl: 'https://maps.google.com/?q=Puri+Indah+Mall',
    socialMedia: 'https://instagram.com/puriindahmall',
    description: 'Mall keluarga yang nyaman dengan berbagai pilihan tenant menarik.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },

  // --- JAKARTA TIMUR - ATTRACTION ---
  {
    id: 'jt-a-1',
    name: 'J-Sky Ferris Wheel',
    region: 'Jakarta Timur',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'AEON Mall Jakarta Garden City, Cakung',
    mapsUrl: 'https://maps.google.com/?q=J+Sky+Ferris+Wheel+AEON+JGC',
    socialMedia: 'https://instagram.com/aeonjgc',
    description: 'J-Sky merupakan bianglala raksasa pertama di Jakarta Timur.',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jt-a-2',
    name: 'Taman Mini Indonesia Indah (TMII)',
    region: 'Jakarta Timur',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Taman Mini Indonesia Indah, Cipayung',
    mapsUrl: 'https://maps.google.com/?q=TMII',
    socialMedia: 'https://instagram.com/tmiiofficial',
    description: 'TMII adalah taman wisata budaya terbesar di Indonesia.',
    image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jt-a-3',
    name: 'Taman Ria Rio',
    region: 'Jakarta Timur',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Pulogadung',
    mapsUrl: 'https://maps.google.com/?q=Taman+Ria+Rio',
    socialMedia: '',
    description: 'Taman kota dengan danau besar dan jalur pedestrian.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jt-a-4',
    name: 'Museum Transportasi TMII',
    region: 'Jakarta Timur',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'TMII, Jakarta Timur',
    mapsUrl: 'https://maps.google.com/?q=Museum+Transportasi+TMII',
    socialMedia: '',
    description: 'Museum yang memamerkan berbagai moda transportasi bersejarah di Indonesia.',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jt-a-5',
    name: 'Taman Bambu',
    region: 'Jakarta Timur',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Rawa Binong, Cipayung, Jakarta Timur',
    mapsUrl: 'https://maps.google.com/?q=Taman+Bambu+Cipayung',
    socialMedia: '',
    description: 'Taman kota yang tenang dengan banyak pohon bambu dan area bermain anak.',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jt-a-6',
    name: 'SnowBay Waterpark',
    region: 'Jakarta Timur',
    category: 'Attraction',
    priceRange: 'Up to 100k',
    address: 'TMII, Jakarta Timur',
    mapsUrl: 'https://maps.google.com/?q=SnowBay+Waterpark',
    socialMedia: 'https://instagram.com/snowbaywaterpark',
    description: 'Taman bermain air bertema pegunungan salju di dalam kawasan TMII.',
    image: 'https://images.unsplash.com/photo-1513889959010-65a4ec810edd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'jt-fb-1',
    name: 'Kedai Locale',
    region: 'Jakarta Timur',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Rawamangun',
    mapsUrl: 'https://maps.google.com/?q=Kedai+Locale',
    socialMedia: 'https://instagram.com/kedailocale',
    description: 'Cafe modern favorit di Jakarta Timur.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
  },

  // --- JAKARTA UTARA - ATTRACTION ---
  {
    id: 'ju-a-1',
    name: 'Aloha PIK 2',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Marina Indah Raya, Kamal Muara',
    mapsUrl: 'https://maps.google.com/?q=Aloha+PIK+2',
    socialMedia: 'https://instagram.com/alohapik',
    description: 'Aloha PIK 2 menghadirkan konsep pantai tropis modern.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-2',
    name: 'Pantjoran PIK',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Pantai Indah Kapuk, Penjaringan',
    mapsUrl: 'https://maps.google.com/?q=Pantjoran+PIK',
    socialMedia: 'https://instagram.com/pantjoranpik',
    description: 'Pantjoran PIK mengusung konsep Chinatown modern.',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-3',
    name: 'Pantai Maju (PIK 2)',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Pantai Maju, PIK 2',
    mapsUrl: 'https://maps.google.com/?q=Pantai+Maju+PIK',
    socialMedia: '',
    description: 'Pantai reklamasi modern dengan promenade panjang.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-4',
    name: 'Jakarta Aquarium',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Up to 100k',
    address: 'Neo Soho Mall',
    mapsUrl: 'https://maps.google.com/?q=Jakarta+Aquarium',
    socialMedia: 'https://instagram.com/jakartaaquarium',
    description: 'Akuarium indoor terbesar di Indonesia.',
    image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-5',
    name: 'Dunia Fantasi (Dufan)',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Up to 100k',
    address: 'Taman Impian Jaya Ancol',
    mapsUrl: 'https://maps.google.com/?q=Dufan+Ancol',
    socialMedia: 'https://instagram.com/infodufan',
    description: 'Dufan merupakan taman hiburan terbesar di Indonesia.',
    image: 'https://images.unsplash.com/photo-1513889959010-65a4ec810edd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-6',
    name: 'Sea World Ancol',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Up to 100k',
    address: 'Taman Impian Jaya Ancol',
    mapsUrl: 'https://maps.google.com/?q=Sea+World+Ancol',
    socialMedia: 'https://instagram.com/seaworldancol',
    description: 'Akuarium raksasa dengan terowongan bawah air yang menakjubkan.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-7',
    name: 'Allianz Ecopark',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Ancol, Jakarta Utara',
    mapsUrl: 'https://maps.google.com/?q=Allianz+Ecopark',
    socialMedia: '',
    description: 'Ruang terbuka hijau luas di kawasan Ancol untuk olahraga dan rekreasi keluarga.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-8',
    name: 'Taman Impian Jaya Ancol',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Lodan Timur No.7, Ancol, Pademangan',
    mapsUrl: 'https://maps.google.com/?q=Taman+Impian+Jaya+Ancol',
    socialMedia: 'https://instagram.com/ancoltamanimpian',
    description: 'Kompleks wisata terbesar di Jakarta — pantai, taman bermain, resort, konser & event besar.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-9',
    name: 'Atlantis Water Adventures',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Up to 100k',
    address: 'Ancol, Pademangan',
    mapsUrl: 'https://maps.google.com/?q=Atlantis+Ancol',
    socialMedia: 'https://instagram.com/atlantiswateradventures',
    description: 'Waterpark viral untuk liburan keluarga.',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-10',
    name: 'Hutan Mangrove PIK',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Under 100k',
    address: 'Jl. Garden House, Kamal Muara',
    mapsUrl: 'https://maps.google.com/?q=Hutan+Mangrove+PIK',
    socialMedia: 'https://instagram.com/mangrovepik',
    description: 'Wisata alam & boardwalk kayu di tengah kota.',
    image: 'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-11',
    name: 'Pelabuhan Sunda Kelapa',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Jl. Maritim No.8, Penjaringan',
    mapsUrl: 'https://maps.google.com/?q=Pelabuhan+Sunda+Kelapa',
    socialMedia: '',
    description: 'Pelabuhan bersejarah dengan kapal pinisi — spot foto klasik Jakarta.',
    image: 'https://images.unsplash.com/photo-1559468550-2ae6d38791e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-12',
    name: 'Jakarta International Stadium',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Free',
    address: 'Papanggo, Tanjung Priok',
    mapsUrl: 'https://maps.google.com/?q=Jakarta+International+Stadium',
    socialMedia: 'https://instagram.com/jakintstadium',
    description: 'Stadion futuristik & venue konser internasional.',
    image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-a-13',
    name: 'Pulau Bidadari',
    region: 'Jakarta Utara',
    category: 'Attraction',
    priceRange: 'Up to 100k',
    address: 'Kepulauan Seribu (akses dari Marina Ancol)',
    mapsUrl: 'https://maps.google.com/?q=Pulau+Bidadari',
    socialMedia: '',
    description: 'Island escape dekat Jakarta untuk staycation & snorkeling.',
    image: 'https://images.unsplash.com/photo-1506929194757-81d939795a94?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-1',
    name: 'A Hwa',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Pantjoran PIK',
    mapsUrl: 'https://maps.google.com/?q=ahwa.pik',
    socialMedia: 'https://instagram.com/ahwa.pik',
    description: 'Chinese seafood viral & antre panjang.',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-2',
    name: 'Santhai',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'PIK Avenue',
    mapsUrl: 'https://maps.google.com/?q=Santhai+PIK',
    socialMedia: 'https://instagram.com/santhai.id',
    description: 'Thai food autentik & aesthetic plating.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-3',
    name: 'The Garden PIK',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Pantai Indah Kapuk',
    mapsUrl: 'https://maps.google.com/?q=The+Garden+PIK',
    socialMedia: 'https://instagram.com/thegardenpik',
    description: 'Cafe garden super Instagramable.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-4',
    name: 'Bebek Tepi Sawah PIK',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'Golf Island PIK',
    mapsUrl: 'https://maps.google.com/?q=Bebek+Tepi+Sawah+PIK',
    socialMedia: 'https://instagram.com/bebektepisawahid',
    description: 'Nuansa Bali di tepi danau.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-5',
    name: 'Gold Dragon Kelapa Gading',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'Kelapa Gading',
    mapsUrl: 'https://maps.google.com/?q=Gold+Dragon+Kelapa+Gading',
    socialMedia: 'https://instagram.com/golddragon.bar',
    description: 'Party spot & live music viral (sebelumnya Holywings).',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-6',
    name: 'KFC Naughty by Nature',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'PIK',
    mapsUrl: 'https://maps.google.com/?q=KFC+Naughty+by+Nature+PIK',
    socialMedia: 'https://instagram.com/kfcindonesia',
    description: 'Konsep store unik & menu berbeda.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-7',
    name: 'Urban Farm PIK',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'PIK',
    mapsUrl: 'https://maps.google.com/?q=Urban+Farm+PIK',
    socialMedia: 'https://instagram.com/urbanfarmpik',
    description: 'Cafe sehat & pet-friendly.',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-8',
    name: 'Sushi Hiro PIK',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Under 100k',
    address: 'PIK Avenue',
    mapsUrl: 'https://maps.google.com/?q=Sushi+Hiro+PIK',
    socialMedia: 'https://instagram.com/sushihiro_id',
    description: 'Sushi aesthetic dengan plating unik.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-9',
    name: 'Kintan Buffet',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'PIK Avenue',
    mapsUrl: 'https://maps.google.com/?q=Kintan+Buffet+PIK',
    socialMedia: 'https://instagram.com/kintanbuffet',
    description: 'All-you-can-eat Jepang favorit TikTok.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ju-fb-10',
    name: 'Talassa',
    region: 'Jakarta Utara',
    category: 'Food & Beverage',
    priceRange: 'Up to 100k',
    address: 'PIK',
    mapsUrl: 'https://maps.google.com/?q=Talassa+PIK',
    socialMedia: 'https://instagram.com/talassa.jkt',
    description: 'Konsep beach club Mediterranean vibes.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-ju-4',
    name: 'Museum Bahari',
    region: 'Jakarta Utara',
    category: 'Education',
    priceRange: 'Under 100k',
    address: 'Jl. Pasar Ikan No.1',
    mapsUrl: 'https://maps.app.goo.gl/MuseumBahari',
    socialMedia: '',
    description: 'Museum sejarah maritim Indonesia.',
    image: 'https://images.unsplash.com/photo-1566121735510-726487056641?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-ju-7',
    name: 'Alive Museum Ancol',
    region: 'Jakarta Utara',
    category: 'Education',
    priceRange: 'Under 100k',
    address: 'Ancol',
    mapsUrl: 'https://maps.app.goo.gl/AliveMuseum',
    socialMedia: 'https://instagram.com/alivemuseumancol',
    description: 'Museum ilusi 3D & spot foto edukatif.',
    image: 'https://images.unsplash.com/photo-1518998053574-53f1f61f90ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-ju-10',
    name: 'Ocean Dream Samudra',
    region: 'Jakarta Utara',
    category: 'Education',
    priceRange: 'Up to 100k',
    address: 'Ancol',
    mapsUrl: 'https://maps.app.goo.gl/OceanDream',
    socialMedia: '',
    description: 'Edukasi satwa laut & pertunjukan interaktif.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
  },

  // --- EDUCATION
  {
    id: 'edu-1',
    name: '@america',
    region: 'Jakarta Selatan',
    category: 'Education',
    priceRange: 'Free',
    address: 'Pacific Place Mall Lt.3, SCBD',
    mapsUrl: 'https://maps.google.com/?q=@america+Pacific+Place',
    socialMedia: 'https://instagram.com/atamerica',
    description: '@america merupakan pusat kebudayaan dan edukasi resmi Kedutaan Besar Amerika Serikat.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-2',
    name: 'Goethe-Institut Jakarta',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Jl. Sam Ratulangi No.9-15, Menteng',
    mapsUrl: 'https://maps.google.com/?q=Goethe+Institut+Jakarta',
    socialMedia: 'https://instagram.com/goetheinstitut_jakarta',
    description: 'Goethe-Institut adalah pusat bahasa dan kebudayaan Jerman.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-lib-1',
    name: 'Perpusnas RI',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Jl. Medan Merdeka Selatan No.11',
    mapsUrl: 'https://maps.google.com/?q=Perpusnas+RI',
    socialMedia: 'https://instagram.com/perpusnas.go.id',
    description: 'Perpusnas RI merupakan perpustakaan nasional tertinggi di Indonesia.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-jp-3',
    name: 'P4 Jakarta Pusat',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Sawah Besar, Jakarta Pusat',
    mapsUrl: 'https://maps.app.goo.gl/KvwuRzU3xMVXPmHy7',
    socialMedia: '',
    description: 'Tempat edukasi & workshop lokal.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-jp-4',
    name: 'Galeri Nasional Indonesia',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Jl. Medan Merdeka Timur No.14, Gambir',
    mapsUrl: 'https://maps.app.goo.gl/GaleriNasional',
    socialMedia: 'https://instagram.com/galerinasional',
    description: 'Lembaga budaya negara yang berfungsi sebagai museum seni rupa modern dan kontemporer.',
    image: 'https://images.unsplash.com/photo-1518998053574-53f1f61f90ee?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-jp-5',
    name: 'Planetarium Jakarta',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Under 100k',
    address: 'Jl. Cikini Raya No.73, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/PlanetariumJakarta',
    socialMedia: '',
    description: 'Wahana simulasi langit dan edukasi astronomi tertua di Indonesia.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-jp-6',
    name: 'Taman Ismail Marzuki',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Jl. Cikini Raya No.73, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/TIMJakarta',
    socialMedia: 'https://instagram.com/tamanismailmarzuki',
    description: 'Pusat kesenian dan kebudayaan yang legendaris dengan perpustakaan modern.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-jp-7',
    name: 'Erasmus Huis',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Jl. H.R. Rasuna Said Kav. S-3, Kuningan',
    mapsUrl: 'https://maps.app.goo.gl/ErasmusHuis',
    socialMedia: 'https://instagram.com/erasmushuis_jakarta',
    description: 'Pusat kebudayaan Belanda dengan perpustakaan yang nyaman dan berbagai event seni.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-jp-8',
    name: 'Institut Français Indonesia (IFI)',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Jl. M.H. Thamrin No.20, Menteng',
    mapsUrl: 'https://maps.app.goo.gl/IFIJakarta',
    socialMedia: 'https://instagram.com/ifi_indonesia',
    description: 'Pusat kebudayaan Prancis yang menawarkan kursus bahasa dan perpustakaan.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-jp-9',
    name: 'British Council Indonesia',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Office 80, Senopati',
    mapsUrl: 'https://maps.app.goo.gl/BritishCouncil',
    socialMedia: 'https://instagram.com/idbritish',
    description: 'Organisasi internasional asal Inggris untuk hubungan budaya dan peluang pendidikan.',
    image: 'https://images.unsplash.com/photo-1523050335456-adaba834597c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edu-jp-10',
    name: 'Japan Foundation Jakarta',
    region: 'Jakarta Pusat',
    category: 'Education',
    priceRange: 'Free',
    address: 'Summitmas I, Jl. Jend. Sudirman',
    mapsUrl: 'https://maps.app.goo.gl/JapanFoundation',
    socialMedia: 'https://instagram.com/jf_jakarta',
    description: 'Pusat kebudayaan Jepang dengan perpustakaan dan berbagai program pertukaran budaya.',
    image: 'https://images.unsplash.com/photo-1523050335456-adaba834597c?auto=format&fit=crop&w=800&q=80'
  },
];

export const JAKARTA_CINEMAS = [
  {
    id: 'cinema-1',
    name: 'Plaza Indonesia XXI',
    chain: 'XXI',
    region: 'Jakarta Pusat',
    address: 'Plaza Indonesia Lt. 6, Jl. M.H. Thamrin',
    mapsUrl: 'https://maps.google.com/?q=Plaza+Indonesia+XXI',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-2',
    name: 'Senayan City XXI',
    chain: 'XXI',
    region: 'Jakarta Pusat',
    address: 'Senayan City Lt. 6, Jl. Asia Afrika',
    mapsUrl: 'https://maps.google.com/?q=Senayan+City+XXI',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-3',
    name: 'Grand Indonesia CGV',
    chain: 'CGV',
    region: 'Jakarta Pusat',
    address: 'Grand Indonesia West Mall Lt. 8, Jl. M.H. Thamrin',
    mapsUrl: 'https://maps.google.com/?q=CGV+Grand+Indonesia',
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-4',
    name: 'Pacific Place CGV',
    chain: 'CGV',
    region: 'Jakarta Selatan',
    address: 'Pacific Place Lt. 6, SCBD',
    mapsUrl: 'https://maps.google.com/?q=CGV+Pacific+Place',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-5',
    name: 'Gandaria City XXI',
    chain: 'XXI',
    region: 'Jakarta Selatan',
    address: 'Gandaria City Lt. 2, Jl. Sultan Iskandar Muda',
    mapsUrl: 'https://maps.google.com/?q=Gandaria+City+XXI',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-6',
    name: 'Kota Kasablanka XXI',
    chain: 'XXI',
    region: 'Jakarta Selatan',
    address: 'Kota Kasablanka Lt. 2, Jl. Casablanca',
    mapsUrl: 'https://maps.google.com/?q=Kota+Kasablanka+XXI',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-7',
    name: 'Central Park CGV',
    chain: 'CGV',
    region: 'Jakarta Barat',
    address: 'Central Park Mall Lt. 8, Jl. Letjen S. Parman',
    mapsUrl: 'https://maps.google.com/?q=CGV+Central+Park',
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-8',
    name: 'St. Moritz XXI',
    chain: 'XXI',
    region: 'Jakarta Barat',
    address: 'Lippo Mall Puri Lt. 1, Jl. Puri Indah Boulevard',
    mapsUrl: 'https://maps.google.com/?q=St+Moritz+XXI',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-9',
    name: 'Kelapa Gading XXI',
    chain: 'XXI',
    region: 'Jakarta Utara',
    address: 'Mal Kelapa Gading 3 Lt. 3, Jl. Boulevard Raya',
    mapsUrl: 'https://maps.google.com/?q=Kelapa+Gading+XXI',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-10',
    name: 'Sunter Mall CGV',
    chain: 'CGV',
    region: 'Jakarta Utara',
    address: 'Sunter Mall Lt. 3, Jl. Danau Sunter Utara',
    mapsUrl: 'https://maps.google.com/?q=CGV+Sunter+Mall',
    image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-11',
    name: 'Aeon Mall JGC CGV',
    chain: 'CGV',
    region: 'Jakarta Timur',
    address: 'Aeon Mall Jakarta Garden City Lt. 3, Cakung',
    mapsUrl: 'https://maps.google.com/?q=CGV+Aeon+Mall+JGC',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cinema-12',
    name: 'Metropole XXI',
    chain: 'XXI',
    region: 'Jakarta Pusat',
    address: 'Gedung Metropole, Jl. Pegangsaan Timur No. 21',
    mapsUrl: 'https://maps.google.com/?q=Metropole+XXI',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  }
];
