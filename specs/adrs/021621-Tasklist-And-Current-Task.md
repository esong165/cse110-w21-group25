# Tasklist And Current Task

Update: We have chosen to keep these features separate because the tasklist is too different from a drop-down menu/selector,
and the design looked somewhat gimmicky.
Corresponding ADR [here](./021821-Current-Task-As-Button-Revisited.md).

## Context and Problem Statement

We want to consider the minimum amount of information that must be displayed to the user.
Do the tasklist and current task need to be displayed separately?

## Considered Options

* Keep both separate
* Use current task display as drop-down/modal popup button for tasklist

## Decision Outcome

Chosen option: "Current task as tasklist button", because:
- Tasklist can function as a drop-down menu would
- Not necessary to keep separate -- minimizes information displayed to user