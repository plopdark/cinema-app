export interface MovieInterface {
  title: string;
  image: string;
  trailer?: string;
  quality?: string;
  desc: string;
  certificate: string;
  runtime: number;
  genre: string[];
  director: string[];
  cast: string[];
  shows?: string[];
  price?: number;
}
