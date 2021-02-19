# Unit Tests

## Context and Problem Statement

We want to write unit tests for our code.
What should we use/how should these be run?

## Considered Options

* Jest
* Tape
* Ava
* Run tests locally
* Run tests via Actions

## Decision Outcome

Chosen option: "Jest" and "Run tests via Actions", because:
- Jest was recommended by Sim
- Running tests locally should be part of the process, but we want to make sure tests are passing when pushing code
