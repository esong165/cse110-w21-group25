# Auto vs Manual

## Context and Problem Statement

We want to decide on how to handle the end of a timer interval.
Should switching to a break/going through the cycle be manual or automatic?

## Considered Options

* Automatically go to next part of pomodoro cycle 
* User has to click a button to start the next part of the cycle

## Decision Outcome

Chosen option: "Manual", because:
- Forces user to stop their current task (work or break) to move to next part of cycle
- User gets a better sense of where they are in the cycle by interacting with the timer
- User gets a better sense of the time frames when forced to interact with the timer