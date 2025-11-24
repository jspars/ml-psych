# Updating lawsonpsych.com

## Summary

1. Download and install necessary apps and configuration,
2. Switch to `prod` branch and make changes to files--probably in `/src/routes`,
3. Add, commit, and push your changes to `prod` to deploy changes.


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


3. Install the sveltekit app fully:

    ```bash
    npm install --legacy-peer-deps
    ```
    
3. Run the local dev server if you want to preview your changes before deploying:

    ```bash
    npm run dev
    ```
    
    Follow the link in the terminal to open your browser to the dev server web page, or go to:

    [https://localhost:5173](https://localhost:5173)

5. By default you will begin on branch `main`; switch to the production (`prod`) branch.  This is needed so that your changes are automatically deployed to the live website when you push to git--`prod` is the only branch whose changes are deployed to production:

    ```bash
    git checkout prod
    ```
All content shown on the website is contained in the `src` directory, and the overwhelming majority contained in `src/routes`:

<img height="558" alt="image" src="https://github.com/user-attachments/assets/f3bf72c0-6e4b-4b64-83ef-5f8bec6faa49" />

Explaination of the directory structure of this app is beyond the scope of this README, but you should be able to find which page you need to modify by symantically locating its route folder in `src/routes`, and opening the `.svelte` file (usually `+page.svelte`, but always ends in `.svelte`).

> [!CAUTION]
> Do not change the structure or file contents of any folders within this project unless you know what you're doing, and are comfortable with the same.


## Deploying

Once you're finished making changes, save any files with changes, and run the following terminal commands from the root project directory (ml-psych):

```bash
git add .
```

```bash
git commit -m "SHORT DESCRIPTION OF YOUR CHANGES"
```

Feel free to run these steps on multiple occasions, especially if you are making multiple, significant changes.  The commit messages are shown in git as historical links to all prior code changes.

```bash
git push origin prod
```


The final command pushes your changes to this remote repository (github), and triggers and netlify script to build and deploy the sveltekit app (the website) to this repo's GitHub Pages page, i.e. pushing to the prod GitHub branch automatically publishes your changes in dev to production.

This can also be run as needed, though you should try to limit the amount of changes you push to prod to avoid showing the incremental changes as opposed to all changes at once.

