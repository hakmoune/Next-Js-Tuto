type TUser = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
};

interface IUsers {
  products: TUser[];
}

type TPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: [];
  reactions: number;
};

interface IPosts {
  posts: TPost[];
}
