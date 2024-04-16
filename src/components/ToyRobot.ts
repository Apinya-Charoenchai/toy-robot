
import { Direction, Position } from '../interfaces/Position';

const TABLE_SIZE = 5;

export function userInput(promptFunction: () => string, currentPosition: Position) {
    while (true) {
        const input = promptFunction();
        currentPosition = executeCommand(input, currentPosition);
    }
}

export function executeCommand(input: string, currentPosition: Position): Position {
    const [command, position] = input.split(' ');
    switch (command) {
        case 'PLACE':
            return place(currentPosition, position);
        case 'MOVE':
            return move(currentPosition);
        case 'LEFT':
            return rotate(currentPosition, -90);
        case 'RIGHT':
            return rotate(currentPosition, 90);
        case 'REPORT':
            return report(currentPosition);
        default:
            return currentPosition;
    }
}

function place(position: Position, inputPosition: string): Position {
    try {
        const [inputX, inputY, inputDirection] = inputPosition.split(',');
        if (!position.direction && !inputDirection) return position;

        if (inputX && inputY && inputDirection && isValidPosition(+inputX, +inputY) && isDirection(inputDirection as Direction)) {
            position = { x: +inputX, y: +inputY, direction: inputDirection as Direction };
        }
    } finally {
        return position;
    }
}

function move(position: Position): Position {
    if (!position.direction) return position;

    switch (position.direction) {
        case Direction.NORTH:
            if (isValidPosition(position.x, position.y + 1)) position.y++;
            break;
        case Direction.SOUTH:
            if (isValidPosition(position.x, position.y - 1)) position.y--;
            break;
        case Direction.EAST:
            if (isValidPosition(position.x + 1, position.y)) position.x++;
            break;
        case Direction.WEST:
            if (isValidPosition(position.x - 1, position.y)) position.x--;
            break;
    }

    return position;
}

function rotate(position: Position, angle: number): Position {
    if (!position.direction) return position;

    const directions = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
    const currentIndex = directions.indexOf(position.direction);
    const newIndex = (currentIndex + angle / 90 + directions.length) % directions.length;

    position.direction = directions[newIndex];

    return position;
}

function report(position: Position): Position {
    if (position && position.direction) {
        console.log(`Output: ${position.x},${position.y},${position.direction}`);
    }
    return position;
}

function isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < TABLE_SIZE && y >= 0 && y < TABLE_SIZE;
}

function isDirection(input: Direction) {
    return Object.values(Direction).includes(input);
}



