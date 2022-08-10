# tailwind_practice_ui

<h2>Link for Tailwindcss documantation </h2>

<a href="https://tailwindcss.com/docs/installation"> https://tailwindcss.com/docs/installation </a>

<h3>Initialize packge.json</h3>

```
npm init -y
```

<h3>Install tailwind</h3>

```
npm install -D tailwindcss
```

<h3>Initialize tailwind config file</h3>

```
npx tailwindcss init
```

<h3>Create 'tailwind.CSS' file</h3>
create and add these line to your "tailwind.css" file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<h3>Add scripts in 'packege.json'</h3>

```
"build": "tailwind build tailwind.css -o style.css",
"watch": "tailwind build tailwind.css -o style.css --watch"
```

These command will create "style.css" file that will be linked to our HTML file
<br/>
:- build is for get all css from from tailwindcss in your project
<br/>
:- watch will continuously running tailwindcss file 

we need ro run command

```
npm build
```

OR

```
npm watch
```

We will need tailwind to run continuously while working on the project so run 'npm watch' command

