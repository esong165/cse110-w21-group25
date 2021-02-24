# Documentation

## Context and Problem Statement

We want to document our code.
Which practices will we be employing?

## Considered Options

* Inline comments
* JSDoc with manual updates
* JSDoc with pipeline
* None

## Decision Outcome

Chosen option: "Inline comments" and "JSDoc with pipeline", because:
- We do not want to have no documentation at all -- documentation is useful
- Inline comments are necessary for code legibility/ease of understanding
- JSDoc with manual updates is too time intensive
- JSDoc with pipeline saves time in the long run
- May forget to manually update JSDoc
