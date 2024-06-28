export interface MovieInterface {
  title: string;
  image: string;
  desc: string;
  certificate: string;
  runtime: number;
  genre: string[];
  director: string[];
  cast: string[];
  shows?: string[];
  price?: number;
}
