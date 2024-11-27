export interface Game {
    id: number;           // Unikalny identyfikator gry
    title: string;        // Tytuł gry
    image: string;        // Ścieżka do obrazka gry
    shortInfo: string;    // Krótki opis gry
    description?: string;  // Szczegółowy opis gry - pole opcjonalne
    routing: string; //ścieżka do podstrony ze szczegółowym opisem gry
    //na razie opcjonalne:
    numberOfPlayers?: string;  //Iloś graczy
    agePlayers?: number; //zalecany minimalny wiek graczy
    gameTime?: string; //czas trwania rozgrywki
    level?: number; //poziom trudności
    rating?: number; //ocena gry
}
