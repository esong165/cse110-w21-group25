# cse110-w21-group25 - Cirillo (Pomodoro Timer)

Cirillo is a Pomodoro Timer web app built with JavaScript, HTML, and CSS. Link to app: https://cirillo.tech

## What is the Pomodoro Technique?

The Pomodoro Technique is a time management technique developed by Francesco Cirillo, the namesake of this app. In this system, your productive time is broken up into work and break sessions. This method takes into account the human attention span, allowing a user to break down work into smaller, bite-sized pieces.

Traditionally, a work session (or Pomodoro) is 25 minutes long, and is followed by a 5 minute short break. Every 4 pomodoros, the user takes a longer, 15-30 minute break instead.

## Why this app?

Our app seeks to provide an enhanced Pomodoro Timer experience which builds on the original technique while staying true to its core philosophies.

Cirillo created the Pomodoro Technique as a way to help himself stay focused while studying. Accordingly, the timer's primary purpose is to alleviate the anxiety that a user may feel when confronted with a large, daunting task. In Cirillo's original design, he emphasizes a low-tech, mechanical approach to create physical stimuli that can help a user with flow and focus. In simulating the technique, we require the user to manually click on a button to start a timer, which acts as a physical action the user must make to confirm their determination to start a task. The countdown of the timer display is a representation of the "ticking" of a real kitchen timer, which creates a visual (rather than aural) cue to externalize desire to complete the task. Finally, the notification and audible alarm sound create visual and aural stimuli which helps the user subconsciously internalize that their current work/break session is over.

(WIP)

## Getting Started

The app is currently designed for deployment to GitHub Pages. In this repository, deployment occurs by copying over all files from the `source` folder, and the `CNAME` file for the custom URL, to the `gh-pages` branch which is what the GitHub Pages site is built from.

We have implemented GitHub Actions as part of our CI/CD pipeline. In order for this to run correctly, you will need to define `EMAIL` and `USERNAME` as the relevant information of an account with write access to the repository, and `GH_PERSONAL_ACCESS_TOKEN` as a [GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with "repo" authorization. The wiki should have at least one page in it, and the repo should have a `docs` folder with an empty `JSDoc.md` file to facilitate JSDoc generation.

For some starting resources, feel free to consult our system diagrams and interface mocks at `specs/system_diagram` and `specs/interface` respectively, and take a look at the `Pomodoro Timer` and `Backlog` project boards for a map of our current and planned tasks respectively. If you have any questions about specific implementation or CI/CD decisions, please refer to `specs/adrs` for the decisions and reasoning for any major choices we have made.

If you would like to see more documentation on our codebase/pipeline or learn more about or team members, feel free to check out our wiki!

## State of the App

Currently, the app is deployed via GitHub Pages to https://cirillo.tech. The page has 5 "tabs", which can be accessed through the navigation bar: the home/timer page, tasklist page, stats page, FAQ page, and settings page. The page colors change between green, blue, and pink while on a work session, short break, and long break respectively. During a work session, the tasklist and stats pages are hidden from the user to eliminate unnecessary features that could serve as distractions. When the timer countdown reaches 0, the app will play a sound and send a notification to the user if notifications are enabled. When a user is done with a task, they can hit the checkmark (done) button to complete the task and send it to stats. 
