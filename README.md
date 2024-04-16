# Toy Robot

> The application is a simulation of a toy robot moving on a square table top, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.

## Prerequisites

This project requires NodeJS and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
8.19.3
v16.19.0
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
    - [Running the tests](#running-the-tests)
    - [Building a distribution version](#building-a-distribution-version)
  - [Getting Started with the Robot Command](#getting-started-with-the-robot-command)
    - [Step 1: Initiate the "PLACE" Command](#step-1:-initiate-the-"PLACE"-command)
    - [Step 2: Issue Additional Commands](#step-2:-issue-additional-commands)
    - [Step 3: Interact and Navigate](#step-3:-interact-and-navigate)
    - [Step 4: Ending Interaction](#step-4:-ending-interaction)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/Apinya-Charoenchai/toy-robot.git
$ cd PROJECT
```

To install and setup, run:

```sh
$ npm install
```

## Usage

### Serving the app

```sh
$ npm start
```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder

## Getting Started with the Robot Command

### Step 1: Initiate the "PLACE" Command

To begin interacting with the robot, you must start with the "PLACE" command. This command initializes the robot's position on a table (5 units x 5 units). 

```sh
// Valid
PLACE 0,0,NORTH
or
PLACE 3,3,WEST

// Invalid position
PLACE 5,5,WEST
or
PLACE 6,0,WEST
```

### Step 2: Issue Additional Commands

Once the robot has been successfully placed using the "PLACE" command, you can continue interacting with it using other commands or calling "PLACE" command again.

Available Commands:

#### PLACE
Place a robot to a new position and direction.

```sh
PLACE 1,2,EAST
```

#### MOVE
Moves the robot one step forward in the direction it is facing.

```sh
MOVE
```

#### LEFT
Rotates the robot 90 degrees counterclockwise (left).

```sh
LEFT
```

#### RIGHT

Rotates the robot 90 degrees clockwise (right).

```sh
RIGHT
```

#### REPORT
Provides the current position and orientation of the robot.

```sh
REPORT
// Output: 0,0,WEST
```

Example Usage:

```sh
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
// Output: 3,3,NORTH
```

### Step 3: Interact and Navigate
Continue issuing commands to the robot as needed to perform desired actions, such as moving around the grid and obtaining its current position.

### Step 4: Ending Interaction
To end the interaction with the robot, simply "crtl + c" to exit the command.

