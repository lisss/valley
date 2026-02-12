# Deployment Instructions

## Step 1: Create GitHub Repository

Since GitHub CLI is not installed, please create the repository manually:

1. Go to https://github.com/new
2. Repository name: `valley`
3. Description: "The Valley - A Hitchcock-style horror quest"
4. Choose Private or Public (your preference)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository on GitHub, run these commands:

```bash
cd /Users/liss/Work/Dev/Git/valley
git remote add origin https://github.com/YOUR_USERNAME/valley.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel

### Option A: Via Vercel Website (Recommended)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your `valley` repository from GitHub
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Your quest will be live at: `https://valley.vercel.app` (or similar)

### Option B: Via Vercel CLI

Install Vercel CLI:
```bash
npm install -g vercel
```

Then deploy:
```bash
cd /Users/liss/Work/Dev/Git/valley
vercel
```

Follow the prompts:
- Set up and deploy: Yes
- Which scope: Your account
- Link to existing project: No
- Project name: valley
- Directory: ./
- Override settings: No

For production deployment:
```bash
vercel --prod
```

## Project Ready!

Your quest is now ready to be shared. The URL will be something like:
- `https://valley.vercel.app` or
- `https://valley-xyz123.vercel.app`

Share this link with your husband to begin his journey into The Valley!
