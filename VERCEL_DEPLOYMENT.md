# Vercel Deployment Guide

This project is now configured for deployment on Vercel. Follow these steps to deploy your application.

## Prerequisites

1. [Vercel CLI](https://vercel.com/cli) installed globally: `npm i -g vercel`
2. A Vercel account
3. Git repository connected to Vercel

## Deployment Steps

### Option 1: Deploy via Vercel CLI

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project or create new one
   - Confirm project settings

### Option 2: Deploy via Git Integration

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Connect repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure build settings:**
   - Framework Preset: **Other**
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

## Configuration Files

The following files have been configured for Vercel deployment:

### `vercel.json`
- Configures routing for SPA and API functions
- Sets up CORS headers
- Defines serverless functions runtime

### API Functions
- `api/contact.ts` - Contact form submissions
- `api/projects.ts` - Project data retrieval

### Package.json
- Updated build scripts for Vercel compatibility
- Added `@vercel/node` for TypeScript support

## Environment Variables

If your application uses environment variables, add them in the Vercel dashboard:

1. Go to your project in Vercel dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables for Production, Preview, and Development

## Local Development

To test the Vercel environment locally:

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Start development server
vercel dev
```

## Troubleshooting

### Common Issues

1. **API functions not working:**
   - Check that TypeScript files are in the `api/` directory
   - Ensure `@vercel/node` is installed
   - Verify the function exports are correct

2. **Static files not serving:**
   - Check that `dist/public` contains your built files
   - Verify the build command runs successfully

3. **CORS issues:**
   - CORS headers are configured in `vercel.json`
   - API functions include CORS headers

### Build Logs

Check build logs in the Vercel dashboard for detailed error information.

## API Endpoints

After deployment, your API will be available at:

- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Get all projects
- `GET /api/projects?category=residential` - Get projects by category

## Notes

- The application uses in-memory storage, so data will reset on each deployment
- For production, consider using a database service
- Static assets are served from the `dist/public` directory
- API functions run as serverless functions on Vercel 