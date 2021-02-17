# Team 25 Coding Sprint Kickoff Meeting

**Location:** Zoom

**Date:** 02/10/2021, 7:00 PM

## Attendance

**Present:** Eric Song, Jaslina Kochhar, Justin Nguyen, Sujan Rai, Yuchen Jing

**Absent:** Tom Dinh, Andrew Chi, Neel Ayyagari, Ainesh Arumugam  

## Current Objective
Define tasks for first sprint and create a backlog, as well as finish up CI/CD pipeline (Add Jest, codeclimate to workflow)

## Tasks

### Unresolved Tasks/Updates from last week
* Add JSDoc - Eric Song - Completed
* Add linter - Eric Song - Completed

### Current Tasks
* Add Jest - Eric Song - over the weekend
* Add codeclimate - Eric Song - this weekend
* CSS - Jaslina (lead)
  * Blocked until HTML is done
* Refactor system diagrams
* Add tasks as GitHub Issues
* Timer - Yuchen (lead), Eric, Tom, Andrew
  * Timer intervals
  * Button -- start/stop, switch to breaks
  * Time display
  * Alert when timer reaches 0 (separate class/component, but for now just alert through timer)
* Tasklist - Justin (lead), Sujan (Developer/Assistant Lead), Neel, Ainesh
  * Add/remove task
    * Specify name and # of pomos
  * Select current task
  * Complete task

### Undiscussed Tasks
* None

## Decisions
* Our timer design will have one button that controls all timer flows (pomodoro sessions, breaks)
* Use popups for data, stats, (eventually) settings and FAQ instead of multiple pages
  * You can open up multiple tasks at once
* GitHub Super Linter for linting
* JSDoc for documentation
* Jest for unit testing
* MVP - timer w/ 1 buttton, task being displayed, task list
* Task list - select current task, add/remove tasks, mark as done, assign # of pomodoros
* Timer - single button - start timer/breaks, fail task if you decide to stop at any point, timer counting down (update display), timer alerts on completion (sound is high priority, but not necessary for MVP)
* Each group will add the basic HTML to their component
* Use Sprint 1 MVP design as guide for HTML structure (can have different CSS/style)
* Assigned tasks -- may switch someone else to CSS
* tabs vs. spaces -- chose tabs

**End time:** 8:55 PM
