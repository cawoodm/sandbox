PowowShell
..........
git init
git add .
ed .gitignore
[add trace/ to .gitignore)
git rm -r --cached bin/pipeline1/trace/
git commit -a -m "Initial commit"
[create repo on github]
git push origin master
git remote add origin git@github.com:cawoodm/powowshell.git
git push origin master

Powershell-UI
-------------
git init
git config core.autocrlf input
git config --global core.editor C:/Users/Lounge/AppData/Roaming/npm/ed.cmd
git config -l
git add .
git commit -m "Version 0.0.1"
Create a repo on github
git remote add origin git@github.com:cawoodm/powershell-ui.git
git pull origin master
git push origin master

SSH Issues
Start Git Bash
ssh -T git@github.com
ssh-add -l
eval "$(ssh-agent -s)"

If you see no identities you need to make a new key:
ssh-keygen -t rsa
ssh-add
open C:\Users\Lounge\.ssh\id_rsa.pub and paste contents to https://github.com/settings/ssh
http://stackoverflow.com/questions/26505980/github-permission-denied-ssh-add-agent-has-no-identities


git commit -am 'im staging and committing!'

When you change .gitignore do:
git update-index

To remove and untrack files
update .gitignore then do:
* `git reset op.txt` (before it's committed)
* `git rm --cached "path\myfile.txt"` (after it's committed)


New Project
git init
git config core.autocrlf input
git config --global user.name "Marc Cawood"
git config --global user.email cawoodm@gmail.com
git add .

#Configuration
The global configuration is stored in your user directory in `.gitconfig`
e.g. `C:\Users\cama\.gitconfig` Project config is stored in `.git\config`

To view your current config
`git config -l`

`git config --global user.name "Marc Cawood"`
`git config --global core.editor C:/Users/Lounge/AppData/Roaming/npm/ed.cmd`
OR
`git config --global core.editor "'"C:\Program Files (x86)\Notepad++\notepad++.exe"' -multiInst -notabbar -nosession -noPlugin"`

## DiffTool Configuration
```
[diff]
	tool = dif
[difftool "dif"]
  cmd = "C:/marc/prg/bcompare/bcompare.exe" \"$LOCAL\" \"$REMOTE\"
[difftool]
	prompt = false
```

# Making a New Project
1. Create a project in the current directory
`git init`


2. Add Files to Project

Add (watch) a single file:
`git add file.txt`

OR Add all web files:
`git add *.js`
`git add *.css`
`git add *.html`

OR Add (watch) all files and subfolders
`git add .`

OR Add (watch) all files and NOT subfolders
`git add *`

OR Add (watch) subfolder and all it's subfolders and files
`git add sub\**\*`


##Alias Commands
`git config --global alias.st status`
Typing `git st` is now the same as `git status`!

#Help
`git help`
`git help push` OR `git push --help`

If you now change a file you it will be red (git status) which means it is out of sync
You do `git add` to "stage" it which means it's part of the next commit
If you change it again, the staged version remains as is and you have to `git add` again to stage it

Commit staged (with `add`) files
`git commit -m "Version 2.0"`

Commit all changed files (skip staging)
`git commit -a -m "added new benchmarks"`

See what branch you're on
`git branch`

See what's changed (working copy to repo)
```
git difftool
```
OR, to compare working copy to staging area (`git stage myfile.txt`)
```
git difftool --cached
```
OR, to compare local repo to remote (need to commit local changes first):
```
git difftool master origin/master
```


Compare local to remote
git diff master origin/master

git log
git log --oneline

Push committed changes to original server master trunk
git push origin master

#Collaborate on Existing GitHub Projects

1. Download a full repository:
`git clone https://github.com/username/Spoon-Knife.git`

2. Make changes to files

3. Commit all changes (locally)
`git commit -a -m "My First Change"`

4. Pull down latest changes from repo and auto merge
`git pull origin`
"origin" is the synonym for "that branch on that server/repo where I go this project"
git pull origin master -> Pull in and merge changes from latest master head on remote

5. 
`git push origin master`
Read: upload/commit/merge my master branch with the original server branch

Pushing never automatically does a merge. The user is expected to pull, resolving any merge conflicts locally, then push back to the remote. 

Get old versions
`git log`
Note the commitid
`git checkout commitid path/myfile.js`

Last 2 commits:
`git log -2`

Single line format:
git log --pretty=oneline


Publish a new git project to github
git remote add origin git@github.com:cawoodm/powershell-ui.git
git push origin master

git remote add origin https://github.com/cawoodm/tennis

#Gotchas
Using ' instead of " in windows doesn't work! (Paths with -a does not make sense.)

Pull remote in overwriting local:
* `git fetch`
* `git reset --hard origin/master`

