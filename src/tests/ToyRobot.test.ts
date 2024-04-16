#!/usr/bin/env node
import { beforeEach, describe, it } from "node:test";
import { executeCommand } from "../components/ToyRobot";
import { Direction, Position } from "../interfaces/Position";
import assert from "node:assert";

describe('Toy Robot', () => {
    let initPosition: Position;
    let log: string;

    beforeEach(() => {
        initPosition = { x: 0, y: 0, direction: undefined }
        log = '';
        console.log = (...args: any[]) => {
            log += args.join(' ');
        };
    });

    it('should maintain the current position and direction when not starting with a PLACE command', () => {
        const input = 'REPORT';
        const result = executeCommand(input, initPosition);
        assert.strictEqual(result, initPosition);
    });

    it('should maintain the current position and direction when calling invalid PLACE command', () => {
        const input = 'PLACE ';
        const result = executeCommand(input, initPosition);
        assert.strictEqual(result, initPosition);
    });

    it('should maintain the current position and direction when calling PLACE with an invalid position', () => {
        const input = 'PLACE 5,5,NORT';
        const result = executeCommand(input, initPosition);
        assert.strictEqual(result, initPosition);
    });

    it('should correctly place the robot at the specified position and direction with a valid PLACE command', () => {
        const input = 'PLACE 3,2,NORTH';
        const expected: Position = { x: 3, y: 2, direction: Direction.NORTH };
        const result = executeCommand(input, initPosition);
        assert.deepStrictEqual(result, expected);
    });

    it('should move the robot one unit forward when calling MOVE command', () => {
        const input = 'MOVE';
        const currentPosition: Position = { x: 0, y: 0, direction: Direction.NORTH };
        const expected: Position = { x: 0, y: 1, direction: Direction.NORTH };
        const result = executeCommand(input, currentPosition);
        assert.deepStrictEqual(result, expected);
    });

    it('should prevent the robot from falling off the table when attempting to move', () => {
        const input = 'MOVE';
        const currentPosition: Position = { x: 0, y: 0, direction: Direction.SOUTH };
        const result = executeCommand(input, currentPosition);
        assert.deepStrictEqual(result, currentPosition);
    });

    it('should rotate the robot to the left when calling LEFT command', () => {
        const input = 'LEFT';
        const currentPosition: Position = { x: 1, y: 2, direction: Direction.SOUTH };
        const expected: Position = { x: 1, y: 2, direction: Direction.EAST };
        const result = executeCommand(input, currentPosition);
        assert.deepStrictEqual(result, expected);
    });

    it('should rotate the robot to the right when calling RIGHT command', () => {
        const input = 'RIGHT';
        const currentPosition: Position = { x: 4, y: 4, direction: Direction.WEST };
        const expected: Position = { x: 4, y: 4, direction: Direction.NORTH };
        const result = executeCommand(input, currentPosition);
        assert.deepStrictEqual(result, expected);
    });

    it('should report the current position and direction when calling REPORT command', () => {
        const input = 'REPORT';
        const currentPosition: Position = { x: 4, y: 4, direction: Direction.WEST };
        const expected = 'Output: 4,4,WEST'
        executeCommand(input, currentPosition);
        assert.strictEqual(log, expected);
    });
});

