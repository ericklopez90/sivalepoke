export interface PokemonInfo {
    name: string;
    types: PokemonTypeInfo[];
    stats: [{
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }];
    sprites: {
      front_default: string;
    };
  }
  
  export interface PokemonTypeInfo {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }