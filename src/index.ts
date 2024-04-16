import { userInput } from "./components/ToyRobot";
import * as readlineSync from 'readline-sync';

const initPosition = { x: 0, y: 0, direction: undefined };
// userInput(initPosition);
userInput(readlineSync.prompt, initPosition)