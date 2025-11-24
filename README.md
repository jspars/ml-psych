# Updating lawsonpsych.com



## Making changes to the site
To make changes to the website, you will need to download the code from this repository, install nodejs, and install this project to run the dev server, which allows you to make changes and preview them locally before pushing to the live website.

If you only need to make text changes, and feel confident about pushing those changes without seeing how they will be displayed on the site, you can skip to the Deploying section.

1. [Download and install nodejs for your operating system.](https://nodejs.org/en/download)
2. Clone this repository, and change to that newly created directory from your terminal (PowerShell for Windows, Bash for Linux, Mac, WSL):

   ```bash
    git clone git@github.com:jspars/ml-psych.git
    ```
   
    ```bash
    cd ml-psych
    ```

3. Switch to the production (`prod`) branch.  This is needed so that your changes are automatically deployed to the live website when you push to git:

    ```bash
    git checkout prod
    ```
    
4. Install the sveltekit app fully:

    ```bash
    npm install --legacy-peer-deps
    ```
    
5. Run dev server to see changes before deploying:

    ```bash
    npm run dev
    ```

## Deploying

Once you're finished making changes, save any files with changes, and run the following terminal commands from the root project directory (ml-psych):

```bash
git add .
```

```bash
git commit -m "YOUR MESSAGE INSIDE THE QUOTES"
```

```bash
git push origin prod
```

The final command push your changes to this remote repository (github), and triggers and netlify script to build and deploy the sveltekit app (the website) to this repo's GitHub Pages page, i.e. pushing to the prod GitHub branch automatically publishes your changes in dev to production.
