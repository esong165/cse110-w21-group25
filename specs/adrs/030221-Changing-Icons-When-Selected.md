# Changing Color When Selected

## Context and Problem Statement

How can we visually show the user which tab they are currently on?
What about when they are hovering? Should there be some visual indicator that the page recognizes the mouse and can be clicked there?

## Considered Options

* Creating a grey border around the selected icon's shape
  * ex: if it is a ? icon, the border would be in the shape of a ? and not a circle or something larger/generic
* Change the icon itself
* Change the color of the icon
* Circle around the icon
* Box around the icon

## Decision Outcome

Chosen option: "change the icon itself", when selected because:
- Wanted a very clear and obvious indication of selection
- Changing the icon to a very similar, but "inverted"/darker version of the icon is easy and visually appealing
- Able to find icons that look very similar, but are outline vs filled in/darker versions of themselves
- This decision applies to all icons in the nav bar: home, tasklist, stats, settings, and FAQ icons

2nd Chosen option: "box around the icon", when hovered over because:
- Wanted it to again be very clear and visually obvious that the page recognizes the mouse
- Wanted the user to be able to easily see where the buttons are and where they can click
- Something different from when selected so that it doesn't look like you have clicked on the icon when you are actually just hovering
- This decision applies to all icons on the page: icons in the nav bar, the done button, the start/stop button, the trash icon, and any others not listed
