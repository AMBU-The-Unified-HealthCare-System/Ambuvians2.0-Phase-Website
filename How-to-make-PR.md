# GitHub Pull Request (PR) Workflow

This guide simplifies the GitHub Pull Request (PR) process for making contributions to a repository. Follow these steps to create, submit, and manage your pull requests.

## Table of Contents

1. [Create a New Branch](#create-a-new-branch)
2. [Make Commits](#make-commits)
3. [Push Changes](#push-changes)
4. [Create a Pull Request](#create-a-pull-request)
5. [Address Review Comments](#address-review-comments)
6. [Tidy Up](#tidy-up)

---

## Create a New Branch

### 1. Choose a Descriptive Branch Name

- Create a new branch based on the latest code in 'main.'
- Use a lowercase, hyphen-separated name for your branch.

```console
git checkout main
git pull
git checkout -b your-branch-name
```

---

## Make Commits

### 2. Commit Locally to Your Branch

- Each commit should be self-contained with a descriptive message.
- Ensure code follows style rules.
- Test changes locally.

```console
git add .
git commit -m "Your commit message here"
```

---

## Push Changes

### 3. Push Changes to Your GitHub Fork

- Do manual testing to confirm your changes.
- Use `git diff` to check your changes.

```console
git push origin your-branch-name
```

---

## Create a Pull Request

### 4. Open a Pull Request

- Go to your fork on GitHub.
- Select your branch from the dropdown menu.
- Click "pull request."
- Ensure the base repository and base branch are correct.
- The head repository should be your fork, and the head branch should be your branch.
- If you don't see the repository, click the link to `compare across forks`.

  On this page, carefully review your commits and changes to ensure accuracy (e.g., check for missing newlines, omitted files).
- Click "Create pull request."

## Address Review Comments

### 5. Respond to Review Comments

- Make changes based on reviewer feedback.
- Keep your commits logical and well-structured.
- Do not force-push or rebase your PR.

> Use 'Start a review' for draft comments.
> Address comments and test changes locally.

---

## Tidy Up

### 6. After PR Approval

- Once your PR is merged, delete the feature branch.

```console
git branch -d your-branch-name
git push origin --delete your-branch-name
```
