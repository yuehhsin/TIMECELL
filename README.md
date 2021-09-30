# TIMECELL
![Screen Shot 2021-09-12 at 1 26 1](https://user-images.githubusercontent.com/75563062/132973346-c71a886f-3a85-4325-8da2-4d0affccdbad.png)

TIMECELL is an experimental online time planning tool. Based on the theory of time digitization and limited time of concentration, Dividing time into blocks every thirty minutes, just like time cells. And with a simple mouse click and drag functions, You can quickly plan and record the time you have 🌼

TIMECELL 是一個實驗性的在線時間規劃工具。基於時間數值化和專注時間有限性的理論，將一天的時間分成每三十分鐘一個單位，就好像時間細胞一樣。通過簡單的滑鼠點擊和拖動功能，規劃與紀錄時間不再是繁雜的負擔。
## Catalog
- [Live Demo](#live-demo)
- [Skills Structure](#skills-structure)
- [Component Planning](#component-planning)
- [Features](#features)

  - [#1 Select time range and add event](#1%EF%B8%8F⃣-select-time-range-and-add-event)
  - [#2 Add / Edit Event](#2%EF%B8%8F⃣-add--edit-event)
  - [#3 Add Memo](#3%EF%B8%8F⃣-add-memo)
  - [#4 View Statistics](#4%EF%B8%8F⃣-view-statistics)
  - [#5 Sign-up, Sign-in and Save](#5%EF%B8%8F⃣-sign-up-sign-in-and-save)
  - [#6 Hotkey](#6%EF%B8%8F⃣-hotkey)
- [Extra Note](#extra-note)

  - [SEO Problem](#seo-problem)

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
The front-end development part of TIMECELL is constructed by using **`React`** , and is used with the package `React-Router` to implement Single Page Application（**SPA**）, making the user experience better. The back-end development uses the `Firebase` back-end service platform to set up the website (Hoisting), database (Firestore) and membership system (Auth) operations. The development tools use `Webpack` for JavaScript module packaging, `Babel` to solve browser compatibility issues, `NPM` for package management, `styled-components` write actual CSS to style React components, `ESLint & Prettier` to check syntax and unified coding style, and `GitHub` to control the Git version.

TIMECELL 在前端開發的部分是使用 **React** 建構的，搭配套件 React-Router 實現單頁式應用，讓使用者體驗更好。後端開發使用 **Firebase** 後端服務平臺，進行架設網站（Hoisting）、資料庫（Firestore）和會員系統（Auth）的操作。開發工具使用 **Webpack** 進行 JavaScript 的模組打包、**Babel** 解決瀏覽器相容性問題、**NPM** 進行套件管理、**styled-components** 將元素樣式直接寫進組件，**ESLint & Prettier** 檢查語法與統一程式碼風格、**GitHub** 控制 Git 的版本。

![技術架構](https://user-images.githubusercontent.com/75563062/132973445-1907a0e6-4ddc-45bf-9753-6e89b79c9030.png)

## Component Planning
The component planning is divided into four major sections (Artboard, Sidepanel, Popup, Caution) according to the UI design draft and function. The Pop Up Dialogs is managed by `React-Router`, and the Caution Dialogs considers that users may manipulate the URL by themselves, which will cause process problems, so the `State` is used directly to switch.

組件的規劃依照 UI 的設計稿與功能，分為四大區塊(Artboard, Sidepanel, Popup, Caution) 。其中 Pop Up 視窗由 `React-Router` 進行路由的管理，而 Caution 視窗考慮到使用者可能會自行操作網址，將造成流程上的問題，因此直接使用 `State` 進行視窗的切換。
![組件規劃](https://user-images.githubusercontent.com/75563062/132125102-72955bd3-20b0-4d75-b78f-e08f5b7bb817.png)


## Features
### 1️⃣ Select time range and add event
In addition to click one by one to select the time range, you can also long-press the mouse to select a large range of time segments at once for better user experience ⭐️

選取時間的操作除了使用滑鼠逐一點擊外，還可以長按滑鼠一次選取大量時間區段，以獲得更好的使用者體驗。

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132156297-75c19fa6-355d-49ce-9d49-952ccb7a0710.gif)

### 2️⃣ Add / Edit Event
You can add events in the `EVENT` tab of the Side Panel. In the menu of each event category, you can edit the content of the event and delete the event in real-time. Because deleting the event will delete all records of the event on the screen, a warning window will first appear to confirm whether to act.

在 Side Panel 的 `EVENT` 標籤處，可以新增事件。每個事件類別的選單裡可以即時編輯事件的內容和刪除事件，由於刪除事件會同步刪除畫面上的該事件的紀錄，因此會先出現一個警示窗口，確認是否執行該動作。

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132157631-9eb56a18-14d4-4e43-988e-394f3f0f58e3.gif)

### 3️⃣ Add Memo
You can add a memo in the `MEMO` tab of the Side Panel. **`Double click`** The memo icon can expand/collapse the content, and the memo can be **`dragged`** to any position and **`zoomed`** in size.

在 Side Panel 的 `MEMO` 標籤處，可以新增備忘錄。**`雙點擊`** 備忘錄圖示可以展開 / 收合內容、備忘錄可以任意 **`拖曳`** 位置、**`縮放`** 大小。

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132170111-4aa2f8ad-3173-4551-8330-a12efb53ad3e.gif)

### 4️⃣ View Statistics
Through the third-party package `chart.js` , you can view the time data of the event at the `STATISTIC` tab of the Side Panel.

透過第三方套件 `chart.js`，在 Side Panel 的 `STATISTIC` 標籤處，可以查看事件的時間數據。

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132171606-b0812c8c-66d8-43c7-b868-67a0b76df8a3.gif)

### 5️⃣ Sign-up, Sign-in and Save
You can find member-related functions at the top of Artboard. After logging in as a member, you can save time data and events.
To prevent users from accidentally refreshing the page and causing the edited data to disappear, TIMECELL will automatically store the data in `Local Starge` every minute 😇.

在 Artboard 上方可以找到與會員相關的功能，成為會員登入後，可以儲存時間資料與事件。 
為了防止使用者不小心刷新頁面導致編輯的資料消失，TIMECELL 每分鐘會自動將資料暫存在 `Local Starge`。

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132281058-a9db2727-ee28-4039-ac7b-061c583dbf5e.gif)

[測試帳號密碼](#test-account)

### 6️⃣ Hotkey
 TIMECELL provides HotKey for users to edit time and screen more quickly.
 
 TIMECELL 提供快捷鍵，方便使用者更快速的編輯時間和畫面。

| ACTION | HOTKEY |
| -------- | -------- |
| Delete Seletced Data | BackSpace |
| Delete All Data | Shift + A |
| Close Side panel | \ |

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132318662-4930dc94-11c2-4d6a-a06d-c2be732da961.gif)

  <!-- ### 7️⃣ RWD
 -->
 
## Extra Note

#### SEO Problem
Since TIMECELL is a SPA, the crawler of the browser cannot obtain the content of the website，So there are some SEO settings in the HTML meta tag.

由於 TIMECELL 是個單頁式應用，瀏覽器的爬蟲沒有辦法取得網站內容（但其實 TIMECELL 本身也沒有什麼文字內容），所以在 HTML 的 meta 標籤有做一些 SEO 的設定。

```
<meta name="keywords" content="TIMECELL, time planing, record time">
<meta name="description" content="TIMECELL is an online time planning tool,You can quickly plan and record the time you have.">
<meta name="robots" content="index, follow"> 
<link rel="canonical" href="https://timecell-98386.web.app/" />
<meta property="og:title" content="TIMECELL">
<meta property="og:description" content="TIMECELL">
```
<!-- #### base64
 -->
 
#### 語意標籤
