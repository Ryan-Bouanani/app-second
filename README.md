<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">Weather App</h1></p>
<p align="center">
	<em>A simple weather application built with React Native and Expo.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Ryan-Bouanani/app-second?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Ryan-Bouanani/app-second?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Ryan-Bouanani/app-second?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Ryan-Bouanani/app-second?style=default&color=0080ff" alt="repo-language-count">
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

This project is a weather application that provides current weather conditions and a 5-day forecast using data from the OpenWeatherMap API. It is built using React Native and Expo, making it suitable for both Android and iOS platforms.

---

## 👾 Features

- Displays current weather conditions including temperature, weather description, and city name.
- Provides a 5-day weather forecast with temperature and weather icons.
- Utilizes device location to fetch weather data for the user's current location.

---

## 📁 Project Structure

```sh
└── weather-app/
    ├── App.js
    ├── app.json
    ├── assets
    │   ├── adaptive-icon.png
    │   ├── favicon.png
    │   ├── icon.png
    │   └── splash.png
    ├── babel.config.js
    ├── components
    │   ├── CurrentWeather.js
    │   └── Forecast.js
    ├── package-lock.json
    └── package.json
```


### 📂 Project Index
<details open>
	<summary><b><code>app-second/</code></b></summary>
	<details>
		<summary><b>components</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Ryan-Bouanani/app-second/blob/master/components/CurrentWeather.js'>CurrentWeather.js</a></b></td>
				<td>Component for displaying current weather</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Ryan-Bouanani/app-second/blob/master/components/Forecast.js'>Forecast.js</a></b></td>
				<td>Component for displaying weather forecast</td>
			</tr>
			</table>
		</blockquote>
	</details>
    <blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Ryan-Bouanani/app-first/assets'>assets/</a></b></td>
				<td><code>Contains images and other static resources used in the app.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Ryan-Bouanani/app-first/App.js'>App.js</a></b></td>
				<td><code>Main entry point of the React Native application.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Ryan-Bouanani/app-first/app.json'>app.json</a></b></td>
				<td><code>Configuration file for the Expo app.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Ryan-Bouanani/app-first/babel.config.js'>babel.config.js</a></b></td>
				<td><code>Babel configuration file for JavaScript transpilation.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Ryan-Bouanani/app-second/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>Lockfile for npm dependencies</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Ryan-Bouanani/app-first/package.json'>package.json</a></b></td>
				<td><code>Lists project dependencies and scripts.</code></td>
			</tr>
			</table>
		</blockquote>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with app-second, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Npm
- **Expo Cli:** Installed globally


### ⚙️ Installation

Install the weather app using one of the following methods:

**Build from source:**

1. Clone the app-second repository:
```sh
❯ git clone https://github.com/Ryan-Bouanani/app-second
```

2. Navigate to the project directory:
```sh
❯ cd app-second
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npm install
```




### 🤖 Usage
Run the to-do list app using the following command:
**Using `npm`** &nbsp; [<img align="center" src="" />]()

```sh
❯ npx expo start
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Implement current weather feature.</strike>
- [ ] **`Task 2`**: Implement 5-day forecast feature.
- [ ] **`Task 3`**: Add unit tests.

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/Ryan-Bouanani/app-second/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Ryan-Bouanani/app-second/issues)**: Submit bugs found or log feature requests for the `app-second` project.
- **💡 [Submit Pull Requests](https://github.com/Ryan-Bouanani/app-second/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Ryan-Bouanani/app-second
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Ryan-Bouanani/app-second/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Ryan-Bouanani/app-second">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [MIT License](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- Thanks to OpenWeatherMap for providing the weather data API.
- Special thanks to the React Native and Expo communities for their support and resources.

---