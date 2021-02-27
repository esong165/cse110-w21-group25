# Code Review

## Context and Problem Statement

We want to implement some form of code quality review.
What should we do for this feature?

## Considered Options

* Codacy
* Codeclimate
* Manual branch protection and review

## Decision Outcome

Chosen option: "Manual", because:
- Codacy/Codeclimate require an organization -- conflicts with GH-Pages/Wikis
- Manual review is the next best option
- Other free third party sources seem somewhat suspect w.r.t. quality
