# Change Management Discovery: [Auto](https://intuit.github.io/auto/index)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Why ?

Currently we have a lot of inconsistencies in versioning, releasing and managing changelogs across applications and libraries. Partly there is no reasonable versioning in place and changelogs hardly exist, mostly being manually created and managed.

Auto handles version, release and changelog management by using either github/gitlab labels or conventional commits. It offers an api to manually handle different scenarios or you can use the [shipit](https://intuit.github.io/auto/docs/generated/shipit) command to let auto guess what kind of updates would be most appropriate according to your changes.

You can see the basic steps auto handles in their short [Workflow](https://intuit.github.io/auto/docs#workflow) description. To have a more in depth overview on the actual release flow have a look [here](https://intuit.github.io/auto/docs/generated/shipit#release-pipeline).

## Setup

If you set up a new project follow this [guide](https://intuit.github.io/auto/docs/welcome/getting-started). You can also see that we have a github action for releases in this repository. The only thing we do is calling `yarn auto shipit`. The rest is handled completely by auto.

After auto is set up developers don't need to interact with it at all. Everything is handled through well formatted commit messages or github/gitlab labels.

## Usage

There are two ways to use auto with this repo:

1. using conventional commits (recommended)
2. using github labels

### Using Conventional Commits

- Create a new branch, apply your changes and commit using [conventional commit](https://intuit.github.io/auto/docs/generated/conventional-commits). Using [commitizen](https://github.com/commitizen/cz-cli) is highly recommended!

- Push your branch to the remote and open a merge/pull request.

- if your branch contains any commit messages that make a version bump reasonable (feat, fix, breaking change) a canary release is created

![canary screen](docs/canary%20screen.png)

- when your branch is merged the according version bumps are applied
  - new package is deployed
    - see <https://github.com/juicyarts/cm-discovery-auto/packages/1445838?version=2.1.1>
  - new tag and release is created
    - see  <https://github.com/juicyarts/cm-discovery-auto/releases/tag/v2.1.1>
  - changelog is updated
    - see <https://github.com/juicyarts/cm-discovery-auto/blob/main/CHANGELOG.md#v211-fri-may-27-2022>
  - all related issues and and mrs receive a `released` label
    - see <https://github.com/juicyarts/cm-discovery-auto/issues?q=is%3Aissue+is%3Aclosed>
    - see <https://github.com/juicyarts/cm-discovery-auto/pull/19>
  - all related mrs receive a message containing the release they were deployed with

![deploy-bot](docs/release%20bot%20message.png)

Every commit that follows conventional commit standards will be visible in the changelog.

### Using Labels

- Add one of the labels provided by auto to your pull/merge-request
- Depending on the given label auto will decide if a canary build is reasonable
- The changelog will be created based on the labels you used
- Rest is the same is above

--------------------------------------------------------------------------------

## Observations

### opinionated about the package manager

When using auto you need to decide for one package manager plugin. For Libraries in our ecosystem this will most probably be npm. Alternative for Applications might be git tags themselves. **A repository can only have one such manager**. Git tags cannot be used to create canary releases. That was my observation at least, might need some deeper investigation.

### various integrations provided by auto itself

- list contributors
- use conventional commits
- first time contrib
- jira linking

## pro's

- easy to set up and use
- developer's don't need to interact with auto at all
- canary release management is built in
- changelogs are well formatted, contain reasonable links to issues, commits, merge requests and participants
- using auto by only setting labels is totally possible. So this can be an approach for non coders too!
  - looking at you UI/UX

## con's

- could not yet find a way to remove the canary releases
  - might open a pr here to allow regex based removal <https://github.com/actions/delete-package-versions>
- Every change can be a version bump
  - this is not bad per se but does not work all to well for our applications where the leading version is the product version instead of the software version. Needs to be discussed

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
