---
title: Changelog
menuTitle: Changelog
category: 'Other'
position: 1100
badge: ''
---

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.5] - 2021-05-24
### Added
- adds optgroup option to dropdown
## [2.0.4] - 2021-03-25
### Fixed
- allows dropdown to be set/reset programmatically
## [2.0.3] - 2021-03-11
### Fixed
- allows dropdown value to be of type Number in addition to string
## [2.0.2] - 2021-03-08
### Added
- It introduces a "small" prop to allow for a smaller rendering of the checkboxes and radio buttons
### Fixed
- fixes how checkboxes and radio buttons were keeping track of the current value. It was emitting correctly but it was not letting the parent update it's value.