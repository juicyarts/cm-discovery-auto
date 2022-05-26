# Change Management Discovery: [Auto](https://intuit.github.io/auto/index)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Why

Currently we have a lot of inconsistency in versioning, release and changelog management throughout applications and libraries. Partly there is no reasonable versioning in place and changelogs hardly exist, mostly being manually

Auto automates release by using github/gitlab labels. It offers an api to manually handle things or you can use the [shipit](https://intuit.github.io/auto/docs/generated/shipit) command to let auto guess what kind of updates would be most appropriate according to your changes.

You can see the basic steps auto handles in their short [Workflow](https://intuit.github.io/auto/docs#workflow) description. To have a more in depth overview on the actual release flow have a look [here](https://intuit.github.io/auto/docs/generated/shipit#release-pipeline).

## Setup

Follow this [guide](https://intuit.github.io/auto/docs/welcome/getting-started).

## Usage

### Commits

Create a new branch, apply your changes and commit using [conventional commit](<https://intuit.github.io/auto/docs/generated/conventional-commits>). Using [commitizen](https://github.com/commitizen/cz-cli) is necessary key yp make this work properly!

Every commit will be visible in the changelog. Links should be set up properly to have all issue relations.

### Adding labels

When you open a PR/MR you can set labels to set the appropriate type of version increase.
As long as the release label is not used no tags will be set and no changelog written.

### Make a Release

So it seems like cc itself is not enough to make auto act. We need to add the release tag to a pr. So lets see what happens if we do other things with tags.

Also it seems like reverted commits create some flakiness. Might also be related to the removal of angular formatting for cc.

----------------

## Observations

### opinionated about the package manager

When initializing one needs to chose a package manager for the project. For Libraries in our ecosystem this will most probably be npm. Alternative for Applications might be Git Tags themselves. **A repository can only have one such manager**.

### various integrations provided by auto itself

- list contributors
- use conventional commits
- first time contrib
- jira

### project labels

Uses labels in Mr/Pr or conventional commit selectors (<https://intuit.github.io/auto/docs/generated/conventional-commits>) to decide for appropriate version bump

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://juicyarts.de/"><img src="https://avatars.githubusercontent.com/u/1132937?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Huess</b></sub></a><br /><a href="https://github.com/juicyarts/cm-discovery-auto/commits?author=juicyarts" title="Documentation">📖</a> <a href="#infra-juicyarts" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/juicyarts/cm-discovery-auto/commits?author=juicyarts" title="Code">💻</a> <a href="https://github.com/juicyarts/cm-discovery-auto/commits?author=juicyarts" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section --> <!-- prettier-ignore-start --> <!-- markdownlint-disable --> <!-- markdownlint-restore --> <!-- prettier-ignore-end --> <!-- ALL-CONTRIBUTORS-LIST:END -->

 This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
