export interface PokemonModal {
    img: string;
    name: string;
    types: string[];
    stats: Stats[];
  }

  export interface Stats {
    base_stat: number;
    name: string;
  }