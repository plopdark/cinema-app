import { CertificateEnum } from '../enums/certificate.enum';
import { GenreEnum } from '../enums/genre.enum';
import { HallEnum } from '../enums/hall.enum';
import { PeopleEnum } from '../enums/people.enum';
import { QualityEnum } from '../enums/quality.enum';
import { SeatsEnum } from '../enums/seats.enum';

export interface MovieInterface {
  title: string;
  image: string;
  trailer: string;
  quality: QualityEnum;
  desc: string;
  certificate: CertificateEnum;
  runtime: number;
  genre: GenreEnum[];
  director: PeopleEnum[];
  writer: PeopleEnum[];
  cast: PeopleEnum[];
  shows?: string[];
  price?: number;
  seats?: SeatsEnum;
  hall?: HallEnum;
}
