# Display During Pomo

Update: Decision updated to also show settings, FAQ in work session, as the FAQ tells the user how the app works and a user may want to change the seconds display.
Relevant ADR [here](./022421-Icons-Vs-Nav-Bar.md).

## Context and Problem Statement

We want to decide on how much information should be accessible to the user during a Pomodoro session.
Which features should be available/visible, and when?

## Considered Options

* Time display
* Timer button(s)
* Current task
* Task list
* Settings
* Statistics

## Decision Outcome

- Time display, "fail task" button, current task will be visible, because:
  - Need to access these to see where you are in Pomodoro cycle
  - These elements will not detract from user focus
- Others will be hidden during a Pomodoro session, visible during breaks/in between cycles, because:
  - Would serve as possible sources of distraction
