export const house1images = ["assets/house1.jpg", "assets/house1 in.jpg", "assets/house1 room.jpg"]
export const house2images = ["assets/house2 in.jpg", "assets/house2 kit.jpg", "assets/house2.jpg"]
export const house3images = ["assets/house3.jpg", "assets/house3 in.jpg", "assets/house3 bat.jpg"]
export const house4images = ["assets/house4.jpg", "assets/house4 in.jpg", "assets/house4 bed.jpg"]
export const house5images = ["assets/house 5in.jpg", "assets/house 5 bat.jpg", "assets/house 5 bed.jpg"]
export const house6images = ["assets/house 6 bed.jpg", "assets/house 6 in.jpg", "assets/house 6 bath.jpg"]
export const house7images = ["assets/house 7 in.jpg", "assets/house 7 bed.jpg", "assets/house 7 bat.jpg"]
export const house8images = ["assets/house 8 bed.jpg", "assets/house 8 in.jpg", "assets/house 8 bat.jpg"]
export const house9images = ["assets/house 9 in.jpg", "assets/house 9 bath.jpg", "assets/house 9 bed.jpg"]
export const house10images = ["assets/house 10 bed.jpg", "assets/house 10 in.jpg", "assets/house 10 kit.jpg"]
export const house11images = ["assets/house 11 kit.jpg", "assets/house 11 in.jpg", "assets/house 11 bed.jpg"]
export const house12images = ["assets/house 12 bed.jpg", "assets/house 12 in.jpg", "assets/house 12 kit.jpg"]
export const house13images = ["assets/house 13.jpg", "assets/house 13 bed.jpg", "assets/house 13 kit.jpg"]
// export const icons = {
//   "assets/logo.png"
// }
export interface RatingType {
  name: string
  rating: number
}

export interface HouseDataTypes {
  id: number
  name: string
  location: string
  price_per_night: number
  images: string[]
  beds: number
  rooms: number
  guests: number
  baths: number
  average_rating: number
  ratings: RatingType[],
  isFavourite?:boolean
}

export const housesData: HouseDataTypes[] = [
  {
    id: 1,
    name: 'Whitefish Estate',
    location: 'Holmes Run Pky Alexandria, Virginia(VA), 22304',
    price_per_night: 10000,
    images: house1images,
    beds: 8,
    rooms: 8,
    guests: 16,
    baths: 8,
    average_rating: 5, 
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 2,
    name: 'Luxury stay in Weston, Saint James, Barbados',
    location: 'New Castle Rd Lowellville, Ohio(OH), 44436',
    price_per_night: 1500,
    images: house2images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 3,
    name: 'Numero 22 - Lake Como - Design Living & Lake View',
    location: 'Pennhurst Ct Wilmington, North Carolina(NC), 28405',
    price_per_night: 850,
    images: house3images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.8,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 4,
    name: '7,500 sq ft Private Beachfront Estate',
    location: 'Cormorant Rd Delray Beach, Florida(FL), 33444',
    price_per_night: 3500,
    images: house4images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.7,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 5,
    name: 'Palm Springs Bungalow Hideaway',
    location: 'Evergreen CtAdams, Wisconsin(WI), 53910',
    price_per_night: 2600,
    images: house5images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.1,
      },
    ],
  },
  {
    id: 6,
    name: 'Sandy Beachfront Oasis',
    location: 'W El Dorado St West Covina, California(CA), 91790',
    price_per_night: 864,
    images: house6images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 7,
    name: 'The Secret Westside Lounge',
    location: 'Farm Valley Dr Canton, Georgia(GA), 30115',
    price_per_night: 4325,
    images: house7images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.8,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 8,
    name: 'Hawthorne Crown Jewel',
    location: 'S Pittsburg Mountain Rd Sewanee, Tennessee(TN), 37375',
    price_per_night: 3500,
    images: house8images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 9,
    name: 'The Bungalow at 7th Avenue',
    location: 'S Virginia Dare Trl Nags Head, North Carolina(NC),',
    price_per_night: 2250,
    images: house9images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.9,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 10,
    name: 'Downtown Penthouse Oasis',
    location: 'Orient St Boylston, Massachusetts(MA), 01505',
    price_per_night: 1475,
    images: house10images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 11,
    name: 'Sandy Beachfront Oasis',
    location: 'School St Lake Andes, South Dakota(SD), 57356',
    price_per_night: 745,
    images: house11images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.5,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 12,
    name: 'Palm Springs Bungalow Hideaway',
    location: 'Green Castle Dr Goose Creek, South Carolina(SC), 29445',
    price_per_night: 2347,
    images: house12images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.9,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
  {
    id: 13,
    name: 'West Shore Country Hale',
    location: '13th St Westminster, California(CA), 92683',
    price_per_night: 1400,
    images: house13images,
    beds: 5,
    rooms: 4,
    guests: 8,
    baths: 4,
    average_rating: 4.7,
    ratings: [
      {
        name: 'cleanliness',
        rating: 5,
      },
      {
        name: 'accuracy',
        rating: 4.5,
      },
      {
        name: 'communication',
        rating: 4.7,
      },
      {
        name: 'location',
        rating: 5,
      },
      {
        name: 'Check in',
        rating: 4.5,
      },
      {
        name: 'value',
        rating: 4.8,
      },
    ],
  },
]
