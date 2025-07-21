# 🚀 Deployment Guide

This guide will help you deploy Dr. Weronika Kozubek's CV website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Bun package manager installed

## Option 1: GitHub Pages Deployment (Recommended)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `weronika-kozubek-cv` or `cv-website`
3. **Important**: Make sure it's a PUBLIC repository for GitHub Pages to work on free accounts
4. Don't initialize with README (we already have one)

### Step 2: Connect Local Repository to GitHub

```bash
# Add the GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push the code to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The GitHub Actions workflow will automatically deploy your site

### Step 4: Access Your Website

After a few minutes, your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Option 2: Manual Deployment

If you prefer to deploy manually or to a different hosting service:

### Build the Project

```bash
bun run build
```

### Deploy the `dist` folder

Upload the contents of the `dist` folder to your web hosting service.

## Option 3: Using gh-pages Package

For quick manual deployment to GitHub Pages:

```bash
# Build and deploy in one command
bun run deploy
```

This will build the project and push it to the `gh-pages` branch.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. In your repository settings, add your custom domain under Pages → Custom domain

## Updating the Website

To update the website:

1. Make your changes to the code
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. The GitHub Actions workflow will automatically redeploy the site

## Troubleshooting

### Build Fails
- Make sure all dependencies are installed: `bun install`
- Check for any syntax errors in your code
- Ensure Tailwind CSS is properly configured

### GitHub Pages Not Working
- Ensure your repository is public
- Check that GitHub Actions are enabled in your repository settings
- Look at the Actions tab for any deployment errors

### Website Not Loading Properly
- Check that the `base` configuration in `vite.config.js` is correct
- For GitHub Pages, it should be: `base: './yourrepositoryname/'`

## Performance Tips

1. **Optimize Images**: Add optimized images to the `public/images` folder
2. **Add Real Photos**: Replace placeholder images with professional photos
3. **SEO**: Update meta tags in `index.html` for better search engine visibility
4. **Analytics**: Add Google Analytics if desired

## Further Customization

### Adding a Blog Section
You can extend the website by adding a blog section for professional articles.

### Contact Form
Consider adding a functional contact form using services like Netlify Forms or Formspree.

### Multi-language Support
The website can be enhanced to support multiple languages (Polish, English, German).

## Support

If you encounter any issues during deployment:

1. Check the GitHub Actions logs in your repository
2. Ensure all file paths are correct
3. Verify that all dependencies are properly installed
4. Check the browser console for any JavaScript errors

---

**Congratulations!** 🎉 

Your professional CV website is now ready for deployment. The website showcases Dr. Weronika Kozubek's expertise in dental and aesthetic medicine with a modern, responsive design that looks great on all devices.
