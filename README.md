# Change Management Discovery: [Auto](https://intuit.github.io/auto/index)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Why ?

Currently we have a lot of inconsistency in versioning, release and changelog management throughout applications and libraries. Partly there is no reasonable versioning in place and changelogs hardly exist, mostly being manually

Auto automates release by using github/gitlab labels. It offers an api to manually handle things or you can use the [shipit](https://intuit.github.io/auto/docs/generated/shipit) command to let auto guess what kind of updates would be most appropriate according to your changes.

You can see the basic steps auto handles in their short [Workflow](https://intuit.github.io/auto/docs#workflow) description. To have a more in depth overview on the actual release flow have a look [here](https://intuit.github.io/auto/docs/generated/shipit#release-pipeline).

## Setup

Follow this [guide](https://intuit.github.io/auto/docs/welcome/getting-started).

## Usage

There are two ways to use auto with this repo:

1. using conventional commits (recommended)
2. using github labels

### Using Conventional Commits

- Create a new branch, apply your changes and commit using [conventional commit](https://intuit.github.io/auto/docs/generated/conventional-commits). Using [commitizen](https://github.com/commitizen/cz-cli) is highly recommended!

- Push your branch to the remote and open a merge/pull request.

- if your branch contains any commit messages that make a version bump reasonable (feat, fix, breaking change) a canary release is created

![canary screen](docs/canary%20screen.png)

Every commit will be visible in the changelog. Links should be set up properly to have all issue relations. Depending on the scope chosen (feature/fix/breaking change) auto will guess the most appropriate version updates and apply them after merge.

### Using Labels

- Add one of the labels provided by auto to your pull/merge-request
- depending on the given label auto will decide if a canary build is reasonable
- The changelog will be created based on the labels you used

--------------------------------------------------------------------------------

## Observations

### opinionated about the package manager

When using auto you need to decide for one package manager plugin. For Libraries in our ecosystem this will most probably be npm. Alternative for Applications might be git tags themselves. **A repository can only have one such manager**. Git tags cannot be used to create canary releases. That was my observation at least, might need some deeper investigation.

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
