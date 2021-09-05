
# TIMECELL
![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132136596-2e06ebf0-e464-4415-bd96-aebea124a9b9.gif)

TIMECELL is an experimental online time planning tool. Based on the theory of time digitization and limited time of concentration, Dividing time into blocks every thirty minutes, just like time cells. And with simple mouse click and drag functions, You can quickly plan and record the time you have 💛

TIMECELL 是一個實驗性的在線時間規劃工具。基於時間數值化和專注時間有限性的理論，將一天的時間分成每三十分鐘一個單位，就好像時間細胞一樣。通過簡單的滑鼠點擊和拖動功能，規劃與紀錄時間不再是繁雜的負擔。

## Live Demo
https://timecell-98386.web.app/

## Test Account
You do not need to register and log in to use TIMECELL, but if you want to store a week’s time plan and event categories, TIMECELL provides members with the function of storing data. The following is the test account and password.

不需要註冊登入才可以使用 TIMECELL，但如果你想要儲存一週的時間規劃與事件類別，TIMECELL 對於會員有提供儲存資料的功能。以下為測試帳號密碼。

| - | - |
| -------- | -------- |
| Account | test@test.com |
| Password | 12345678 |

## Skills Structure
The front-end development part of TIMECELL is constructed by using **`React`** , and is used with the package `React-Router` to implement Multiple Page Application（**SPA**）,making the user experience better.The back-end development uses the `Firebase` back-end service platform to set up the website (Hoisting), database (Firestore) and membership system (Auth) operations.The development tools use `Webpack` for JavaScript module packaging, `Babel` to solve browser compatibility issues, `NPM` for package management, `styled-components` write actual CSS to style React components, `ESLint & Prettier` to check syntax and unified coding style, and `GitHub` to control the Git version.

TIMECELL 在前端開發的部分是使用 **React** 建構的，搭配套件 React-Router 實現多頁式應用，讓使用者體驗更好。後端開發使用 **Firebase** 後端服務平臺，進行架設網站（Hoisting）、資料庫（Firestore）和會員系統（Auth）的操作。開發工具使用 **Webpack** 進行 JavaScript 的模組打包、**Babel** 解決瀏覽器相容性問題、**NPM** 進行套件管理、**styled-components** 將元素樣式直接寫進組件，**ESLint & Prettier** 檢查語法與統一程式碼風格、**GitHub** 控制 Git 的版本。

![技術架構](https://user-images.githubusercontent.com/75563062/132124477-6f21d4fb-7ce3-4550-a7fa-ba054b1ed646.png)

## Component Planning
The component planning is divided into four major sections (Artboard, Sidepanel, Popup, Caution) according to the UI design draft and function.The Pop Up Dialogs is managed by `React-Router`, and the Caution Dialogs considers that users may manipulate the URL by themselves, which will cause process problems, so the `State` is used directly to switch.

組件的規劃依照 UI 的設計稿與功能，分為四大區塊(Artboard, Sidepanel, Popup, Caution) 。其中 Pop Up 視窗由 `React-Router` 進行路由的管理，而 Caution 視窗考慮到使用者可能會自行操作網址，將造成流程上的問題，因此直接使用 `State` 進行視窗的切換。
![組件規劃](https://user-images.githubusercontent.com/75563062/132125102-72955bd3-20b0-4d75-b78f-e08f5b7bb817.png)

<!-- 
## Features

## 使用者體驗
 -->
