This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Github Commands:

- Staging & Commiting

```bash

  - git status # Check the status of your working directory and staging area
  - git add filename.txt # Stage a specific file for commit
  - git add . # Stage all changed files in the directory for commit
  - git commit -m "Commit message describing the changes" # Commit staged changes with a message
```

- Branching & Merging

```bash

  - git branch # List all local branches
  - git branch new-branch # Create a new branch named "new-branch"
  - git checkout new-branch # Switch to the "new-branch"
  - git checkout -b new-branch # Create and switch to "new-branch" in one step
  - git merge other-branch # Merge "other-branch" into your current branch
```

- Viewing Commit History

```bash
  - git log # View the commit history
  - git log --oneline # View a condensed commit history
  - git log --graph # View the commit history as a graph
```

- Working with Remote

```bash
  - git remote -v # List all remote repositories
  - git remote add origin https://github.com/username/repository.git # Add a new remote repository
  - git push origin main # Push commits from your local "main" branch to the remote "origin"
  - git pull origin main # Pull changes from the remote "main" branch and merge them into your local branch
```

- Fetching & Checking out Remote Branches

```bash
  - git fetch # Fetch changes from the remote repository
  - git checkout origin/main # Checkout a remote branch named "main"
```

- Force Pushing (CAUTION)

```bash
  - git push origin main --force # Force push changes to the remote "main" branch (caution!)
```
