export interface Position {
    x: number;
    y: number;
    direction?: Direction;
}

export enum Direction {
    NORTH = 'NORTH',
    SOUTH = 'SOUTH',
    EAST = 'EAST',
    WEST = 'WEST'
}

