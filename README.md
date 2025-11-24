# Updating lawsonpsych.com



## Making changes to the site
To make changes to the website, you will need to download the code from this repository, install nodejs, and install this project to run the dev server, which allows you to make changes and preview them locally before pushing to the live website.

If you only need to make text changes, and feel confident about pushing those changes without seeing how they will be displayed on the site, you can skip to the Deploying section.

1. [Download and install nodejs for your operating system.](https://nodejs.org/en/download)
2. Clone this repository, and change to that newly created directory (directions for bash [linux/mac terminal] shown):

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

Once you're finished making changes, you 
```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
