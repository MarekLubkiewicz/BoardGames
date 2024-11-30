export interface Event {
    date: string;
    details: string;
    free_slots: number;
    games: {
      game1: string;
      game2: string;
      game3: string;
    };
    owner: string;
    place: string;
    time: string;
  }