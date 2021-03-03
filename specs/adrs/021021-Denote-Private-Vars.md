# Denote Private Variables

## Context and Problem Statement

We want to denote "private" instance variables/functions in our code to label anything that should not be used outside of the class scope.
How should we mark such fields/information?

## Considered Options

* Nothing
* Use _
* Use $
* Write "private" at the start/end of private variables

## Decision Outcome

Chosen option: "Use $", because:
- We do want to denote private fields in some manner
- "private" is too clunky
- "_" is commonly for explicitly unused variables in a lot of programming languages -- not the right connotation here
- "$" looks more appealing in code (personal preference of group)