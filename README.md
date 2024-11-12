# SCSS to CSS Converter NPM Package

Welcome to the **SCSS to CSS Converter NPM Package**! This project is an NPM package designed to make converting SCSS (Sassy CSS) code to CSS (Cascading Style Sheets) simple and accessible. With this converter, you can work with SCSS syntax and quickly generate the final CSS code for easy deployment and browser compatibility.

![Logo](./docs/scss-to-css-converter.png)

## 📖 About

CSS preprocessors like SCSS allow for more flexible, modular, and maintainable styling by providing features such as variables, nested rules, and mixins. However, the final output for browsers needs to be in plain CSS. This converter bridges that gap, helping you transition smoothly from SCSS to CSS.

> [!IMPORTANT]
>
> ### Useful links
>
> | Role                   | Link                                                           |
> | ---------------------- | -------------------------------------------------------------- |
> | NPM Package Repository | https://github.com/dhunanyan/scss-to-css-converter-npm-package |
> | Client Repository      | https://github.com/dhunanyan/scss-to-css-converter             |
> | Client App             | https://scss-to-css-converter.netlify.app                      |

## ✨ Features

- **Simple and intuitive**: Minimal setup required to convert SCSS files to CSS.
- **Browser-ready output**: Easily transform SCSS code to CSS format.
- **Flexible styling**: Retain the powerful features of SCSS while preparing styles for production.

## 🚀 Getting Started

```bash
# yarn
yarn add @dhunanyan/scss-to-css-converter@latest
```

```bash
# NPM
npm install @dhunanyan/scss-to-css-converter@latest
```

> [!TIP]
>
> ### Usage:
>
> ```js
> import { convert } from "@dhunanyan/scss-to-css-converter";
>
> // Sample SCSS Code
> const scssCode = `
> body {
>    background-color: red;
>    font-size: 14px;
>    color: yellow;
>    font-size: 14px;
>    line-height: 24px;
> 
>    ul {
>        color: green;
> 
>        &.card {
>            width: 10px;
> 
>            &--dark{
>                &:first-of-type {
>                    border-radius: 20px;
>                }
>                border: 1px solid #000;
>            }
>        }
> 
>        height: 20px;
>    }
> 
>    text-transform: underline;
> }`;
>
> // Calling the the function with SCSS Code param
> convert(scssCode).CSS;
> ```

> [!TIP]
>
> ### Returned data type
>
> `isValid` - tells wether the SCSS code (which was the param for the request) is valid or not
>
> `data` - CSS code (converted from SCSS)
>
> ```json
> {
>   "isValid": true,
>   "data": "body {\n\tbackground-color: red;\n\tfont-size: 14px;\n\tcolor: yellow;\n\tfont-size: 14px;\n\tline-height: 24px;\n\ttext-transform: underline;\n}\n\nbody ul {\n\tcolor: green;\n\theight: 20px;\n}\n\nbody ul.card {\n\twidth: 10px;\n}\n\nbody ul.card--dark {\n\tborder: 1px solid #000;\n}\n\nbody ul.card--dark:first-of-type {\n\tborder-radius: 20px;\n}"
> }
> ```

## ⚙️ Local setup

### 🔱 Fork the repository

1. On GitHub, navigate to the [dhunanyan/scss-to-css-converter-npm-package](https://github.com/dhunanyan/scss-to-css-converter-npm-package/tree/dev) repository.
2. In the top-right corner of the page, click Fork.
   ![Logo](./docs/fork.png)
3. Under "Owner," select the dropdown menu and click an owner for the forked repository.
4. By default, forks are named the same as their upstream repositories. Optionally, to further distinguish your fork, in the "Repository name" field, type a name.
5. Optionally, in the "Description" field, type a description of your fork.
6. Optionally, select `Copy the DEFAULT` branch only.
   For many forking scenarios, such as contributing to open-source projects, you only need to copy the default branch. If you do not select this option, all branches will be copied into the new fork.
7. Click `Create fork`.

### 🧲 Clone the repository

```bash
git clone https://github.com/dhunanyan/scss-to-css-converter-npm-package.git
```

### ⚙️ Setting up SCSS compiler (Optional)

Since some of you may not have `antlr4` on your local machine in order to build the scss compiler - the `parser/` folder has been removed from `.gitignore`, so you can find it on `master`.
However if you are interested in building the compiler on your local machine you should install `antlr4` on your local machine.

> [!NOTE]
>
> ### Install ANTLR4 (Window)
>
> - Go to [ANTLR4 Official Website](https://www.antlr.org)
> - Go to [Downloads](https://www.antlr.org/download.html)
> - Find the latest version, which satisfies the project requirements and download it and configure on your local machine

> [!NOTE]
>
> ### Install ANTLR4 (MacOS)
>
> ```bash
> brew install antlr
> $ antlr4
> # ANTLR Parser Generator Version 4.X.X
> # ...
> ```

> [!NOTE]
>
> ### Build SCSS Compiler
>
> ```bash
> cd scss-to-css-converter
> sh scripts/build_converter.sh
> ```

> [!CAUTION]
>
> **`parser/` folder in project root will be deleted and will be replaced with the new generated one**

### ⚙️ Install `NodeJS v20+`

In order to install and run the project you should have `Node.js 20` on your local machine

> [!NOTE]
>
> ### Install `NodeJS v20+` (Windows)
>
> If you have `nvm` you can simply switch to a different version by running:
>
> ```bash
> nvm install 20
> nvm use 20
> ```
>
> if not then quickest way to download it from [here](https://nodejs.org/en/download/prebuilt-installer/current)

> [!NOTE]
>
> ### Install `NodeJS v20+` (MacOS)
>
> ```bash
> brew install nvm
> nvm install 20
> nvm use 20
> ```

### ⚙️ Install projects dependencies

```bash
yarn install
```

## 🛠️ Build

```bash
yarn build:package
```

## 🔄 Previous Versions

As you can notice the version of the app is `v3.0.1` (not `v1.x.x` or `v2.x.x`). Previously this service was a server (v1.0.0 - Flask server and v2.0.0 - NodeJS server). So from the application development perspective. This is the `v3.0.1` version.

In order to keep the version consistent everywhere so it's the same, a decision was made to start on NPM registry with the `v3.0.1` init version.

## 💬 Feedback

We'd love to hear how you're using the SCSS to CSS Converter! Feel free to contribute or open issues if you have ideas to improve it.

### Happy styling! 🌟
