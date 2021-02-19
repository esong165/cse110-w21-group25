# Tasklist Prototype

## Context and Problem Statement

We want to create tasklist functionality for sprint 1.
What should our tasklist include?

## Considered Options

* Use API for tasklist
* Use web component for tasklist
* Select current task
* Add/remove tasks
* Mark tasks as finished
* Estimate number of pomodoros for a task

## Decision Outcome

Chosen option: all but API for tasklist, because:
- Web component helps with organization and good code practices
- Estimating number of pomodoros will be necessary for stats tracking
- Other chosen features were essential to end user of task list
- API seemed like a dependency we did not need, would have to consider user credentials for the app
