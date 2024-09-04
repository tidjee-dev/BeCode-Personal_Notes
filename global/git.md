# GIT Cheat Sheet

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
git clone <url>
```

> `<url>` is the URL of the repository you want to clone.

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

### Delete a branch

Use `git branch -d` to delete a branch.

```bash
git branch -d <branch_name>
```

> `<branch_name>` is the name of the branch you want to delete.

## Managing changes on files

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
git push
```

---

### Pull changes from a remote repository

Use `git pull` to pull changes from a remote repository.

```bash
git pull
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

## Getting status

Use `git status` to get the status of the working repository.

```bash
git status
```
