export interface CardModel {
    id: string;
    name: string;
    description: string;
}

export interface ColumnModel {
    id: string;
    name: string;
    cards: CardModel[]
}

export interface BoardModel {
    id: string;
    name: string;
    columns: ColumnModel[];
}
