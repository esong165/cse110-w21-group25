# Classes

## Context and Problem Statement

We want to implement our web app with a reasonable structure.
To this end, which features should be implemented as classes/web components?

## Considered Options

* Stats
* Tasklist
* Task
* Timer
* Buttons
* Displays
* Storage manager
* Settings handler
* About page
* Notifications

## Decision Outcome

Chosen options: stats, tasklist, timer, task, settings, because:
- These components represent our main website features
- Button class would be somewhat redundant w/ HTML button
- Storage/notifications manager is somewhat unnecessary abstraction
- About page would be static -- doesn't need to be updating/changing