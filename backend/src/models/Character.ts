import { uuid } from 'uuidv4';

class Character {
  id: string;

  name: string;

  description_short: string;

  description_full: string;

  url_image: string;

  constructor({
    name,
    description_short,
    description_full,
    url_image,
  }: Omit<Character, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.description_short = description_short;
    this.description_full = description_full;
    this.url_image = url_image;
  }
}

export default Character;
