# Disable Icons When Timer Running

## Context and Problem Statement

Should all the icons in the taskbar be accessible/clickable when the timer is running?
Should a user be allowed to navigate onto any page or interact with the application during a pomo session?

## Considered Options

* Leave all icons in taskbar assessible at all times
* Disable some icons when the timer is running

## Decision Outcome

Chosen option: "Disable some icons when the timer is running", because:
- If a user is working on a pomo session, we want them to have maximum productivity and minimal distractions
- Removing access to some features/icons will reduce distractions added by the application
- Since user should not need to look at stats or tasklist while working on a pomo, those icons will disappear when timer is running
- User might still need to check settings or FAQ, so those tabs will remain available
- Home/Timer icon will also remain accessible so the user can navigate back to the timer page after checking settings/FAQ
