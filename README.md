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

Create a new branch, apply your changes and commit using [conventional commit](<https://intuit.github.io/auto/docs/generated/conventional-commits>). Using [commitizen](https://github.com/commitizen/cz-cli) is hardly recommended!

```shell
$ git checkout -b docs/usage-instructions
Switched to a new branch 'docs/usage-instructions'
```

### add a feature

```shell
# add your changes
$ git add .
$ git cz
cz-cli@4.2.4, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) test
? Write a short, imperative tense description of the change (max 88 chars):
 (41) test how a feature looks in the changelog
? Provide a longer description of the change: (press enter to skip)
 how does the description show up?
? Are there any breaking changes? No
? Does this change affect any open issues? Yes
? Add issue references (e.g. "fix #123", "re #123".):
 prepare #6
[docs/usage-instructions 667234d] feat(test): test how a feature looks in the changelog
 1 file changed, 15 insertions(+), 3 deletions(-)

```

### add a fix that introduces a braking change

```shell
$ git cz
cz-cli@4.2.4, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: fix:      A bug fix
? What is the scope of this change (e.g. component or file name): (press enter to skip) test
? Write a short, imperative tense description of the change (max 89 chars):
 (37) test how a fix looks in the changelog
➜  cm-discovery-auto git:(docs/usage-instructions) ✗ git cz
cz-cli@4.2.4, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: fix:      A bug fix
? What is the scope of this change (e.g. component or file name): (press enter to skip) test
? Write a short, imperative tense description of the change (max 89 chars):
 (37) test how a fix looks in the changelog
? Provide a longer description of the change: (press enter to skip)
 how does the body of a fix look in the changelog
? Are there any breaking changes? Yes
? Describe the breaking changes:
 Show how a breaking change will look in the changelog
? Does this change affect any open issues? Yes
? Add issue references (e.g. "fix #123", "re #123".):
 prepare #6
[docs/usage-instructions 03c7c84] fix(test): test how a fix looks in the changelog
 1 file changed, 29 insertions(+), 1 deletion(-)
```

### add a doc update

```shell
$ git cz
cz-cli@4.2.4, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: docs:     Documentation only changes
? What is the scope of this change (e.g. component or file name): (press enter to skip) test
? Write a short, imperative tense description of the change (max 88 chars):
 (17) show a doc change
? Provide a longer description of the change: (press enter to skip)
 nothing more to say here
? Are there any breaking changes? No
? Does this change affect any open issues? No
[docs/usage-instructions 0f6180a] docs(test): show a doc change
 1 file changed, 29 insertions(+)
```

### add a style update

```shell
$ git cz
cz-cli@4.2.4, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: style:    Changes that do not affect the meaning of the code (white-
space, formatting, missing semi-colons, etc)
? What is the scope of this change (e.g. component or file name): (press enter to skip) test
? Write a short, imperative tense description of the change (max 87 chars):
 (20) doing a style update
? Provide a longer description of the change: (press enter to skip)
 you know what is what
? Are there any breaking changes? No
? Does this change affect any open issues? No
[docs/usage-instructions 606b86e] style(test): doing a style update
 1 file changed, 18 insertions(+)
```

### add a refactoring update

```shell
$ git cz
cz-cli@4.2.4, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: refactor: A code change that neither fixes a bug nor adds a feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) test
? Write a short, imperative tense description of the change (max 84 chars):
 (37) what does it do with refactoring huh?
? Provide a longer description of the change: (press enter to skip)
 yadayaydaya
? Are there any breaking changes? No
? Does this change affect any open issues? Yes
? Add issue references (e.g. "fix #123", "re #123".):
 prepares #6
[docs/usage-instructions b9085e2] refactor(test): what does it do with refactoring huh?
 1 file changed, 20 insertions(+)
```

## Make a Release

So it seems like cc itself is not enough to make auto act. We need to add the release tag to a pr. So lets see what happens if we do other things with tags.

Also it seems like reverted commits create some flakiness. Might also be related to the removal of angular formatting for cc.

Lets add another commit.

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
