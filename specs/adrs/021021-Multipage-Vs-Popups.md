# Multipage Vs. Popups

Update: Choice updated to using separate divs instead of popups, as popups are also disruptive.
New ADR [here](./022421-Popups-Vs-Tabs.md).

## Context and Problem Statement

We want to decide how our interface will be displayed.
Which format makes the most sense for this app?

## Considered Options

* Multiple pages
* Popups

## Decision Outcome

Chosen option: "Popups", because:
- It takes longer to move between multiple pages
- Having to wait for the pages to load each time is somewhat disruptive
- No need to load elements each time we need them -- all load time is upfront