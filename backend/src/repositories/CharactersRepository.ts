import Character from '../models/Character';

class CharactersRepository {
  private characters: Character[];

  constructor() {
    this.characters = [];
  }

  public all(): Character[] {
    return this.characters;
  }

  public create(
    name: string,
    description_short: string,
    description_full: string,
    url_image: string,
  ): Character {
    const character = new Character(
      name,
      description_short,
      description_full,
      url_image,
    );

    this.characters.push(character);

    return character;
  }
}

export default CharactersRepository;
