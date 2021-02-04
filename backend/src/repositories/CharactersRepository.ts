import Character from '../models/Character';

interface CreateCharacterDTO {
  name: string;
  description_short: string;
  description_full: string;
  url_image: string;
}

class CharactersRepository {
  private characters: Character[];

  constructor() {
    this.characters = [];
  }

  public all(): Character[] {
    return this.characters;
  }

  public create({
    name,
    description_short,
    description_full,
    url_image,
  }: CreateCharacterDTO): Character {
    const character = new Character({
      name,
      description_short,
      description_full,
      url_image,
    });

    this.characters.push(character);

    return character;
  }
}

export default CharactersRepository;
