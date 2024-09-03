# BaSH cheat sheet

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Help](#help)
- [Navigating](#navigating)
  - [Change directory](#change-directory)
    - [Change directory to the home directory](#change-directory-to-the-home-directory)
    - [Change directory to the parent directory](#change-directory-to-the-parent-directory)
  - [List directories and files](#list-directories-and-files)
    - [List directories and files recursively](#list-directories-and-files-recursively)
    - [Show more information for `ls`](#show-more-information-for-ls)
  - [Show working directory](#show-working-directory)
  - [Go to an other directory but keep the current working directory in cache](#go-to-an-other-directory-but-keep-the-current-working-directory-in-cache)

<!-- /code_chunk_output -->

## Help

Use `--help` to see more information.

```bash
cd --help
```

> [!note]
> Using Linux or MacOS? You can also use `man <command>` to see the manual page of this command.

## Navigating

### Change directory

Use `cd` to change directory to the named directory

```bash
cd <directory>
```

> `<directory>` is the name of the directory you want to change to

#### Change directory to the home directory

```bash
cd ~
```

#### Change directory to the parent directory

```bash
cd ..
```

### List directories and files

Use `ls` to list directories and files in the current directory

```bash
ls <options> <directory>
```

> `<options>` and `<directory>` are optional

#### List directories and files recursively

Use `ls -R` to list directories and files in the current directory and its subdirectories

```bash
ls -R
```

#### Show more information for `ls`

```bash
ls -lt
```

### Show working directory

Use `pwd` to show the current working directory

```bash
pwd
```

<!-- pushd / popd -->

### Go to an other directory but keep the current working directory in cache

Use `pushd` to go to an other directory but keep the current working directory in cache, then use `popd` to return to the current working directory

```bash
pushd <directory>
```

> `<directory>` is the name of the directory you want to go to

```bash
popd
```
