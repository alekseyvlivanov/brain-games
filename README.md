# Brain Games

## Overview

This is a set of five simple math console games.

[![Node CI](https://github.com/alekseyvlivanov/brain-games/workflows/Node%20CI/badge.svg)](https://github.com/alekseyvlivanov/brain-games/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/6b9a2b800de74e822b86/maintainability)](https://codeclimate.com/github/alekseyvlivanov/brain-games/maintainability)

## Features

- local install as npm package
- using [Makefile](https://makefile.site) for better command management
- package includes:
  - **brain-even** - guess if the number is even
  - **brain-calc** - guess the result of the expression
  - **brain-gcd** - guess the greatest common divisor of given numbers
  - **brain-progression** - guess what number is missing in the progression
  - **brain-prime** - guess if the given number is prime
- to win every game you have to answer correctly 3 times in a row

## Dependencies

- [chalk](https://github.com/chalk/chalk) for terminal string styling
- [readline-sync](https://github.com/anseki/readline-sync) for interactive conversation with the user via a console(TTY)

## Install

```
$ git clone ...
$ cd brain-games
$ make install
$ make publish
$ npm link
```

## Usage

#### Package install and Brain Even demo

<a href="https://asciinema.org/a/D5QGjE8teZWvCHscRBg0Cig9J" target="_blank"><img src="https://asciinema.org/a/D5QGjE8teZWvCHscRBg0Cig9J.svg" width="400px" /></a>

#### Brain Calc demo

<a href="https://asciinema.org/a/U76XJox0zwUfjil4ygXc3L4oV" target="_blank"><img src="https://asciinema.org/a/U76XJox0zwUfjil4ygXc3L4oV.svg" width="400px" /></a>

#### Brain GCD demo

<a href="https://asciinema.org/a/SlNg9zwdbHhzPcKT5HpF071qV" target="_blank"><img src="https://asciinema.org/a/SlNg9zwdbHhzPcKT5HpF071qV.svg" width="400px" /></a>

#### Brain Progression demo

<a href="https://asciinema.org/a/Z7TkJHYG4O6qW9K3lAcPzu6kD" target="_blank"><img src="https://asciinema.org/a/Z7TkJHYG4O6qW9K3lAcPzu6kD.svg" width="400px" /></a>

#### Brain Prime demo

<a href="https://asciinema.org/a/BuTiseBhz5f34rg2SXfiFbSKe" target="_blank"><img src="https://asciinema.org/a/BuTiseBhz5f34rg2SXfiFbSKe.svg" width="400px" /></a>
