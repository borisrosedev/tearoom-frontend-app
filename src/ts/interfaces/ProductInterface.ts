interface ProductInterface {
  id: number;
  isAvailable: boolean;
  description: string;
  mainCategory: string;
  categories: Array<string>;
  name: string;
  price: number;
  tags: string[];
  photo?: string;
  url?: string;
}

export type CardProductType = ProductInterface & { alt?: string; src?: string } & { buttons?: any[]};

export default ProductInterface; 
