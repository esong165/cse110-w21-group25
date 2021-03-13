# cse110-w21-group25 - Cirillo (Pomodoro Timer)

Cirillo is a Pomodoro Timer web app built with JavaScript, HTML, and CSS. Link to app: https://cirillo.tech

## Getting Started/Quick Introduction

The app is currently designed for deployment to GitHub Pages. In this repository, deployment occurs by copying over all files from the `source` folder, and the `CNAME` file for the custom URL, to the `gh-pages` branch which is what the GitHub Pages site is built from.

We have implemented GitHub Actions as part of our CI/CD pipeline. In order for this to run correctly, you will need to define `EMAIL` and `USERNAME` as the relevant information of an account with write access to the repository, and `GH_PERSONAL_ACCESS_TOKEN` as a [GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) with "repo" authorization. The wiki should have at least one page in it, and the repo should have a `docs` folder with an empty `JSDoc.md` file to facilitate JSDoc generation.

For some starting resources, feel free to consult our system diagrams and interface mocks at `specs/system_diagram` and `specs/interface` respectively, and take a look at the `Pomodoro Timer` and `Backlog` project boards for a map of our current issues. If you have any questions about specific implementation or CI/CD decisions, please refer to `specs/adrs` for the decisions and reasoning for any major choices we have made.
