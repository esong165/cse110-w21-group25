# Highlight Selected Task Darker Shade

## Context and Problem Statement

How can we visually indicate when a task is selected?
How can we indicate that a task is being hovered over and can be selected by a user if they would like to?

## Considered Options

* Box around the task
* Highlight the task a darker color
* Highlight the task a lighter color
* Both of the above - highlight and box
* Put some kind of star/symbol next to the task
* Checkbox/radio buttons

## Decision Outcome

- Chosen: "highlight the task a darker color" because:
  - Highlighting the task a darker color looked more visually appealing than a lighter color
  - There are multiple pieces in each row which we want to highlight - the task, and the # pomos
    - Putting a separate box around the task and another around the # pomos looks crowded
    - A highlight looks neater and more minimalistic, which is the overall theme throughout the application
  - Checkbox/radio buttons might look "clunky" and are not as professional/user friendly as a highlight where the task can be selected aywhere on it
  - What happens:
      - When a task is selected, it gets highlighted a darker shade of the background color
          - Blue -> darker blue, purple -> darker purple, green -> darker green
      - When hovered over, the task being hovered also changes color to a darker color to show that it can be clicked on
      
