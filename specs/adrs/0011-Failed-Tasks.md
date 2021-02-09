# Failed Tasks

## Context and Problem Statement

We want to decide what to do when a user fails a task.
Should the task be thrown away or kept in the list?

## Considered Options

* Discard the task
* Keep the task in the tasklist

## Decision Outcome

Chosen option: "Keep", because:
- User may want to restart the task after completion
- Number of failed attempts at a task may be useful information to track
- Knowing original predicted number of pomodoro cycles could help with time management
