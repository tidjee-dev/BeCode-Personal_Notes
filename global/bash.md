# BaSH cheat sheet

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Help](#help)
- [Navigating](#navigating)
  - [Change directory](#change-directory)
    - [Change directory to the home directory](#change-directory-to-the-home-directory)
    - [Change directory to the parent directory](#change-directory-to-the-parent-directory)
    - [Change directory to a multilevel directory](#change-directory-to-a-multilevel-directory)
  - [List directories and files](#list-directories-and-files)
    - [List directories and files recursively](#list-directories-and-files-recursively)
    - [Show more information for `ls`](#show-more-information-for-ls)
  - [Show working directory](#show-working-directory)
  - [Go to another directory but keep the current working directory in cache](#go-to-another-directory-but-keep-the-current-working-directory-in-cache)
- [Directory operations](#directory-operations)
  - [Create directory](#create-directory)
    - [Create a multilevel directory](#create-a-multilevel-directory)
    - [Create a multiple directory](#create-a-multiple-directory)
  - [Copy directory](#copy-directory)
  - [Move directory](#move-directory)
    - [Rename directory](#rename-directory)
  - [Delete directory](#delete-directory)
    - [Delete an empty directory](#delete-an-empty-directory)
    - [Delete a directory recursively](#delete-a-directory-recursively)
- [File operations](#file-operations)
  - [Create file](#create-file)
    - [Create multiple files](#create-multiple-files)
  - [Delete file](#delete-file)
    - [Delete multiple files](#delete-multiple-files)

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

Use `cd` to move to the named directory.

```bash
cd <directory>
```

> `<directory>` is the name of the directory you want to move to.

#### Change directory to the home directory

```bash
cd ~
```

#### Change directory to the parent directory

```bash
cd ..
```

<!-- cd <directory>/<directory> -->

#### Change directory to a multilevel directory

```bash
cd <directory>/<sub_directory>
```

> `<directory>/<sub_directory>` is the path of the sub directory you want to move to.

---

### List directories and files

Use `ls` to list directories and files in the current directory.

```bash
ls <options> <directory>
```

> `<options>` and `<directory>` are optional.

#### List directories and files recursively

Use `ls -R` to list directories and files in the current directory and its subdirectories.

```bash
ls -R
```

#### Show more information for `ls`

```bash
ls -lt
```

---

### Show working directory

Use `pwd` to show the current working directory.

```bash
pwd
```

---

### Go to another directory but keep the current working directory in cache

Use `pushd` to go to an other directory but keep the current working directory in cache.
Use `popd` to return to the current working directory.

```bash
pushd <directory>
```

> `<directory>` is the name of the directory you want to go to.

```bash
popd
```

## Directory operations

### Create directory

Use `mkdir` to create a new directory.

> [!tip]
> `mkdir -v` will print the name of each created directory.

```bash
mkdir <directory>
```

> `<directory>` is the name of the directory you want to create.

#### Create a multilevel directory

```bash
mkdir <directory1>/<directory2>
```

> `<directory1>/<directory2>` is the path of the sub directory you want to create.

#### Create a multiple directory

```bash
mkdir <directory1> <directory2> ...
```

> `<directory1> <directory2> ...` are the names of the directories you want to create.

---

### Copy directory

Use `cp -r` to copy a directory.

`cp` acts like a copy/paste.

> [!tip] `cp -r -v` will print the name of each copied directory.

```bash
cp -R <directory_source> <directory_destination>
```

> `<directory_source>` is the name of the directory you want to copy.
> `<directory_destination>` is the name of the directory you want to copy to.
> `-R` is used to copy a directory recursively.

---

### Move directory

Use `mv` to move a directory.

`mv` acts like a cut/paste.

> [!tip] `mv -v` will print the name of each moved directory.

```bash
mv <directory_source> <directory_destination>
```

> `<directory_source>` is the name of the directory you want to move.
> `<directory_destination>` is the name of the directory you want to move to.

---

#### Rename directory

Use `mv` to rename a directory.

```bash
mv <directory_name> <directory_new_name>
```

> `<directory_name>` is the name of the directory you want to rename.
> `<directory_new_name>` is the new name of the directory.

### Delete directory

Use `rm` to delete a directory.

> [!tip] `rm -v` will print the name of each deleted directory.

#### Delete an empty directory

Use `rmdir` to delete an empty directory.

```bash
rmdir <directory>
```

> `<directory>` is the name of the directory you want to delete.

#### Delete a directory recursively

```bash
rm -r <directory>
```

> `<directory>` is the name of the directory you want to delete.

## File operations

### Create file

Use `touch` to create a new file.

```bash
touch <file>
```

> `<file>` is the name of the file you want to create.

#### Create multiple files

If you want to create multiple files, use `touch <file1> <file2> ...`

```bash
touch <file1> <file2> ...
```

> `<file1> <file2> ...` are the names of the files you want to create.

---

### Delete file

Use `rm` to delete a file.

```bash
rm <file>
```

> `<file>` is the name of the file you want to delete.

#### Delete multiple files

```bash
rm <file1> <file2> ...
```

> `<file1> <file2> ...` are the names of the files you want to delete.
