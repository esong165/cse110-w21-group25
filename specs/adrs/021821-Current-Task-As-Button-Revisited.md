# Current Task As Button (Revisited)

## Context and Problem Statement

We want to rethink the design choice of using the current task display as a button to open the tasklist.
Should we keep this as a desired feature?

## Considered Options

* Keep current task display as button to open tasklist
* Separate these two elements as different features

## Decision Outcome

Chosen option: "Separate current task/tasklist features", because:
- Tasklist is different in implementation from a simple drop-down menu
  - Not intuitive enough for a user -- would not initially think to click on it
- Design feels somewhat gimmicky -- looks very old-fashioned
- These features are different enough to appear separately