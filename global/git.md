# Git Cheat Sheet

## Main Commands

| Command    | Description                                    | Example                             |
| ---------- | ---------------------------------------------- | ----------------------------------- |
| `init`     | Initialize a new Git repository                | `git init`                          |
| `clone`    | Clone a remote repository                      | `git clone <remote_url>`            |
| `status`   | Show the status of the repository              | `git status`                        |
| `add`      | Add files to the staging area                  | `git add <file>`, `git add .`       |
| `reset`    | Unstage changes                                | `git reset <file>`                  |
| `diff`     | Show the changes on a file                     | `git diff <file1>`                  |
| `diff`     | Show the changes on the staged files           | `git diff --staged`                 |
| `commit`   | Commit changes to the repository               | `git commit -m "<commit_message>"`  |
| `branch`   | List branches                                  | `git branch`                        |
| `branch`   | Create a new branch                            | `git branch <branch_name>`          |
| `checkout` | Switch to a branch                             | `git checkout <branch_name>`        |
| `checkout` | Create a new branch and switch to it           | `git checkout -b <new_branch_name>` |
| `merge`    | Merge changes from a branch                    | `git merge <branch_name>`           |
| `log`      | View the commit history                        | `git log`                           |
| `log`      | View the commit history with number of ins/del | `git log --stat`                    |
| `fetch`    | Fetch changes from a remote repository         | `git fetch`                         |
| `pull`     | Pull changes from a remote repository          | `git pull`                          |
| `push`     | Push changes to a remote repository            | `git push`                          |

## Install Git

You can install Git by clicking on the link below

[> git-scm.com <](https://git-scm.com/downloads)

## Setup Git

- Use `git --version` to check if Git is installed.

  ```bash
  git --version
  ```

- Use `git config --global user.name` and `git config --global user.email` to configure Git.

  ```bash
  git config --global user.name "<first_name> <last_name>"
  git config --global user.email "<email>"
  ```

  > `--global` is used to configure Git globally.
  > `<first_name> <last_name>` is the name of the user you want to configure Git for.
  > `<email>` is the email address of the user you want to configure Git for.

- Use `git config --global color.ui` to enable colored output in Git.

  ```bash
  git config --global color.ui auto
  ```

  > `always` always color output of capable Git commands.
  > `auto` enables colored output of capable Git commands (default).
  > `false`, `never`, `off` or `no` disables colored output of capable Git commands.
  > `true`, `on` or `yes` enables colored output of capable Git commands.

## Initialize

### Initialize a local repository

Use `git init` to initialize git in the working repository.

```bash
git init
```

### Creating a new local directory and initialize git in it

```bash
git init <directory>
```

> `<directory>` is the name of the directory you want to initialize git in.
> After initializing git, use `cd <directory>` to move to the directory.

### Cloning a remote repository

Use `git clone` to clone a repository.

```bash
git clone <remote_url>
```

> `<remote_url>` is the URL of the remote repository you want to clone.

## Working with branches

### List branches

Use `git branch` to list branches.

```bash
git branch
```

### Create a new branch

Use `git branch` to create a new branch.

```bash
git branch <branch_name>
```

> `<branch_name>` is the name of the branch you want to create.

#### Create a new branch and switch to it

Use `git checkout -b` to create a new branch and switch to it.

```bash
git checkout -b <branch_name>
```

> `<branch_name>` is the name of the branch you want to create.

---

### Switch to a branch

Use `git checkout` to switch to a branch.

```bash
git checkout <branch_name>
```

> `<branch_name>` is the name of the branch you want to switch to.

---

### Renaming a branch

Use `git branch -m` to rename a branch.

```bash
git branch -m <old_branch_name> <new_branch_name>
```

> `<old_branch_name>` is the name of the branch you want to rename.
> `<new_branch_name>` is the new name of this branch.

---

### Delete a branch

Use `git branch -d` to delete a branch.

```bash
git branch -d <branch_name>
```

> `<branch_name>` is the name of the branch you want to delete.

> [!warning]
> Before deleting a branch, make sure that it is not the current branch.

## Managing changes on files

### Getting status

Use `git status` to get status of the working repository.

```bash
git status
```

---

### Stage changes on a file

Use `git add` to stage changes.

```bash
git add <file>
```

> `<file>` is the name of the file you want to stage.

#### Stage all changes

Use `git add .` to stage all changes.

```bash
git add .
```

> `.` means the current directory and its contents.

---

### Unstage changes on a file

Use `git reset` to unstage changes.

```bash
git reset <file>
```

> `<file>` is the name of the file you want to unstage.

#### Unstage all changes

Use `git reset .` to unstage all changes.

```bash
git reset .
```

> `.` means the current directory and its contents.

---

### Show changes on a file

Use `git diff` to show changes on a file.

```bash
git diff <file>
```

> `<file>` is the name of the file you want to show changes on.
> If `<file>` is not specified, it will show changes of all files.

#### Show changes on staged files

Use `git diff --staged` to show changes on staged files.

```bash
git diff --staged <file>
```

### Commit changes

Use `git commit` to commit changes.

```bash
git commit -m "<commit_message>"
```

> `<commit_message>` is the message of the commit.

---

### Push changes to a remote repository

Use `git push` to push changes to a remote repository.

```bash
git push <remote_name> <branch_name>
```

> `<remote_name>` is the name of the remote repository you want to push on.
> `<branch_name>` is the name of the local branch you want to push.
> `<remote_name>` and `<branch_name>` are optional.

---

### Pull changes from a remote repository

Use `git pull` to pull changes from a remote repository.

```bash
git pull
```

---

### Fetching changes from a remote repository

Use `git fetch` to fetch changes from a remote repository.

```bash
git fetch
```

---

### Merging branches

First, switch to the branch you want to merge into.

```bash
git checkout <branch_name>
```

> `<branch_name>` is the name of the branch you want to merge into.

Use `git merge` to merge branches.

```bash
git merge <branch_name>
```

> `<branch_name>` is the name of the branch you want to merge.

## Inspecting and comparing branches

### Show commit history

Use `git log` to show logs.

```bash
git log
```

#### Show commit history with stats

Use `git log --stat` to show logs with numbers of insertions and deletions.

```bash
git log --stat
```

---

### Show the commit differences between branches

Show the commits on branch_name_2 that are not on branch_name_1.

```bash
git log <branch_name_1>..<branch_name_2>
```

> `<branch_name_1>` and `<branch_name_2>` are the names of the branches you want to compare.

---

### Show commit history of a specific file

```bash
git log --follow <file>
```

> `<file>` is the name of the file you want to show commit history.

## Sources

- [Github Docs](https://docs.github.com/en/get-started/using-git/about-git)
- [Git cheat sheet (Github education)](https://education.github.com/git-cheat-sheet-education.pdf)
