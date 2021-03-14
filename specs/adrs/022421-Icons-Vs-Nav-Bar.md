# Icons Vs. Navigation Bar

## Context and Problem Statement

We want to rethink how we are presenting the buttons used to navigate through our app.
Where should they be placed, and which should be visible during a work session?

## Considered Options

* Icons spread around timer
* Icons grouped in navigation bar at top of page
* Icons grouped in navigation bar at bottom of page
* Show/hide timer page
* Show/hide tasklist page
* Show/hide stats page
* Show/hide FAQ page
* Show/hide settings page

## Decision Outcome

Chosen option: "Navigation bar at top of page" with "show timer, FAQ, settings", because:
- This lets us organize the page with a more intuitive and clean interface
- Prefer design with navigation bar at the top because it looks more natural (to us)
- Timer page is necessary for user to interact with during a work session
- Tasklist, stats only serve as distractions -- not immediately necessary when working
- FAQ is useful if a user is not very familiar with how the pomodoro technique works
- Settings page contains useful customization of showing/hiding seconds (other options will be disabled)
