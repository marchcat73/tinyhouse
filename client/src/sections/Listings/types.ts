interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  raiting: number;
}

export interface ListingsData {
  listing: Listing[];
}
