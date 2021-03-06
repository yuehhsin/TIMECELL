# TIMECELL
![Screen Shot 2021-09-12 at 1 26 1](https://user-images.githubusercontent.com/75563062/132973346-c71a886f-3a85-4325-8da2-4d0affccdbad.png)

TIMECELL is an experimental online time planning tool. Based on the theory of time digitization and limited time of concentration, Dividing time into blocks every thirty minutes, just like time cells. And with a simple mouse click and drag functions, You can quickly plan and record the time you have ð¼

TIMECELL æ¯ä¸åå¯¦é©æ§çå¨ç·æéè¦åå·¥å·ãåºæ¼æéæ¸å¼ååå°æ³¨æéæéæ§ççè«ï¼å°ä¸å¤©çæéåææ¯ä¸ååéä¸åå®ä½ï¼å°±å¥½åæéç´°èä¸æ¨£ãééç°¡å®çæ»é¼ é»æåæååè½ï¼è¦åèç´éæéä¸åæ¯ç¹éçè² æã
## Catalog
- [Live Demo](#live-demo)
- [Skills Structure](#skills-structure)
- [Component Planning](#component-planning)
- [Features](#features)

  - [#1 Select time range and add event](#1%EF%B8%8Fâ£-select-time-range-and-add-event)
  - [#2 Add / Edit Event](#2%EF%B8%8Fâ£-add--edit-event)
  - [#3 Add Memo](#3%EF%B8%8Fâ£-add-memo)
  - [#4 View Statistics](#4%EF%B8%8Fâ£-view-statistics)
  - [#5 Sign-up, Sign-in and Save](#5%EF%B8%8Fâ£-sign-up-sign-in-and-save)
  - [#6 Hotkey](#6%EF%B8%8Fâ£-hotkey)
- [Extra Note](#extra-note)

  - [SEO Problem](#seo-problem)

## Live Demo
https://timecell-98386.web.app/

## Test Account
You do not need to register and log in to use TIMECELL, but if you want to store a weekâs time plan and event categories, TIMECELL provides members with the function of storing data. The following is the test account and password.

ä¸éè¦è¨»åç»å¥æå¯ä»¥ä½¿ç¨ TIMECELLï¼ä½å¦æä½ æ³è¦å²å­ä¸é±çæéè¦åèäºä»¶é¡å¥ï¼TIMECELL å°æ¼æå¡ææä¾å²å­è³æçåè½ãä»¥ä¸çºæ¸¬è©¦å¸³èå¯ç¢¼ã

| - | - |
| -------- | -------- |
| Account | test@test.com |
| Password | 12345678 |

## Skills Structure
The front-end development part of TIMECELL is constructed by using **`React`** , and is used with the package `React-Router` to implement Single Page Applicationï¼**SPA**ï¼, making the user experience better. The back-end development uses the `Firebase` back-end service platform to set up the website (Hoisting), database (Firestore) and membership system (Auth) operations. The development tools use `Webpack` for JavaScript module packaging, `Babel` to solve browser compatibility issues, `NPM` for package management, `styled-components` write actual CSS to style React components, `ESLint & Prettier` to check syntax and unified coding style, and `GitHub` to control the Git version.

TIMECELL å¨åç«¯éç¼çé¨åæ¯ä½¿ç¨ **React** å»ºæ§çï¼æ­éå¥ä»¶ React-Router å¯¦ç¾å®é å¼æç¨ï¼è®ä½¿ç¨èé«é©æ´å¥½ãå¾ç«¯éç¼ä½¿ç¨ **Firebase** å¾ç«¯æåå¹³èºï¼é²è¡æ¶è¨­ç¶²ç«ï¼Hoistingï¼ãè³æåº«ï¼Firestoreï¼åæå¡ç³»çµ±ï¼Authï¼çæä½ãéç¼å·¥å·ä½¿ç¨ **Webpack** é²è¡ JavaScript çæ¨¡çµæåã**Babel** è§£æ±ºçè¦½å¨ç¸å®¹æ§åé¡ã**NPM** é²è¡å¥ä»¶ç®¡çã**styled-components** å°åç´ æ¨£å¼ç´æ¥å¯«é²çµä»¶ï¼**ESLint & Prettier** æª¢æ¥èªæ³èçµ±ä¸ç¨å¼ç¢¼é¢¨æ ¼ã**GitHub** æ§å¶ Git ççæ¬ã

![æè¡æ¶æ§](https://user-images.githubusercontent.com/75563062/132973445-1907a0e6-4ddc-45bf-9753-6e89b79c9030.png)

## Component Planning
The component planning is divided into four major sections (Artboard, Sidepanel, Popup, Caution) according to the UI design draft and function. The Pop Up Dialogs is managed by `React-Router`, and the Caution Dialogs considers that users may manipulate the URL by themselves, which will cause process problems, so the `State` is used directly to switch.

çµä»¶çè¦åä¾ç§ UI çè¨­è¨ç¨¿èåè½ï¼åçºåå¤§åå¡(Artboard, Sidepanel, Popup, Caution) ãå¶ä¸­ Pop Up è¦çªç± `React-Router` é²è¡è·¯ç±çç®¡çï¼è Caution è¦çªèæ®å°ä½¿ç¨èå¯è½æèªè¡æä½ç¶²åï¼å°é ææµç¨ä¸çåé¡ï¼å æ­¤ç´æ¥ä½¿ç¨ `State` é²è¡è¦çªçåæã
![çµä»¶è¦å](https://user-images.githubusercontent.com/75563062/132125102-72955bd3-20b0-4d75-b78f-e08f5b7bb817.png)


## Features
### 1ï¸â£ Select time range and add event
In addition to click one by one to select the time range, you can also long-press the mouse to select a large range of time segments at once for better user experience â­ï¸

é¸åæéçæä½é¤äºä½¿ç¨æ»é¼ éä¸é»æå¤ï¼éå¯ä»¥é·ææ»é¼ ä¸æ¬¡é¸åå¤§éæéåæ®µï¼ä»¥ç²å¾æ´å¥½çä½¿ç¨èé«é©ã

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132156297-75c19fa6-355d-49ce-9d49-952ccb7a0710.gif)

### 2ï¸â£ Add / Edit Event
You can add events in the `EVENT` tab of the Side Panel. In the menu of each event category, you can edit the content of the event and delete the event in real-time. Because deleting the event will delete all records of the event on the screen, a warning window will first appear to confirm whether to act.

å¨ Side Panel ç `EVENT` æ¨ç±¤èï¼å¯ä»¥æ°å¢äºä»¶ãæ¯åäºä»¶é¡å¥çé¸å®è£¡å¯ä»¥å³æç·¨è¼¯äºä»¶çå§å®¹ååªé¤äºä»¶ï¼ç±æ¼åªé¤äºä»¶æåæ­¥åªé¤ç«é¢ä¸çè©²äºä»¶çç´éï¼å æ­¤æååºç¾ä¸åè­¦ç¤ºçªå£ï¼ç¢ºèªæ¯å¦å·è¡è©²åä½ã

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132157631-9eb56a18-14d4-4e43-988e-394f3f0f58e3.gif)

### 3ï¸â£ Add Memo
You can add a memo in the `MEMO` tab of the Side Panel. **`Double click`** The memo icon can expand/collapse the content, and the memo can be **`dragged`** to any position and **`zoomed`** in size.

å¨ Side Panel ç `MEMO` æ¨ç±¤èï¼å¯ä»¥æ°å¢åå¿éã**`éé»æ`** åå¿éåç¤ºå¯ä»¥å±é / æ¶åå§å®¹ãåå¿éå¯ä»¥ä»»æ **`ææ³`** ä½ç½®ã**`ç¸®æ¾`** å¤§å°ã

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132170111-4aa2f8ad-3173-4551-8330-a12efb53ad3e.gif)

### 4ï¸â£ View Statistics
Through the third-party package `chart.js` , you can view the time data of the event at the `STATISTIC` tab of the Side Panel.

ééç¬¬ä¸æ¹å¥ä»¶ `chart.js`ï¼å¨ Side Panel ç `STATISTIC` æ¨ç±¤èï¼å¯ä»¥æ¥çäºä»¶çæéæ¸æã

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132171606-b0812c8c-66d8-43c7-b868-67a0b76df8a3.gif)

### 5ï¸â£ Sign-up, Sign-in and Save
You can find member-related functions at the top of Artboard. After logging in as a member, you can save time data and events.
To prevent users from accidentally refreshing the page and causing the edited data to disappear, TIMECELL will automatically store the data in `Local Starge` every minute ð.

å¨ Artboard ä¸æ¹å¯ä»¥æ¾å°èæå¡ç¸éçåè½ï¼æçºæå¡ç»å¥å¾ï¼å¯ä»¥å²å­æéè³æèäºä»¶ã 
çºäºé²æ­¢ä½¿ç¨èä¸å°å¿å·æ°é é¢å°è´ç·¨è¼¯çè³ææ¶å¤±ï¼TIMECELL æ¯åéæèªåå°è³ææ«å­å¨ `Local Starge`ã

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132281058-a9db2727-ee28-4039-ac7b-061c583dbf5e.gif)

[æ¸¬è©¦å¸³èå¯ç¢¼](#test-account)

### 6ï¸â£ Hotkey
 TIMECELL provides HotKey for users to edit time and screen more quickly.
 
 TIMECELL æä¾å¿«æ·éµï¼æ¹ä¾¿ä½¿ç¨èæ´å¿«éçç·¨è¼¯æéåç«é¢ã

| ACTION | HOTKEY |
| -------- | -------- |
| Delete Seletced Data | BackSpace |
| Delete All Data | Shift + A |
| Close Side panel | \ |

![Webp net-gifmaker](https://user-images.githubusercontent.com/75563062/132318662-4930dc94-11c2-4d6a-a06d-c2be732da961.gif)

  <!-- ### 7ï¸â£ RWD
 -->
 
## Extra Note

#### SEO Problem
Since TIMECELL is a SPA, the crawler of the browser cannot obtain the content of the websiteï¼So there are some SEO settings in the HTML meta tag.

ç±æ¼ TIMECELL æ¯åå®é å¼æç¨ï¼çè¦½å¨çç¬è²æ²æè¾¦æ³åå¾ç¶²ç«å§å®¹ï¼ä½å¶å¯¦ TIMECELL æ¬èº«ä¹æ²æä»éº¼æå­å§å®¹ï¼ï¼æä»¥å¨ HTML ç meta æ¨ç±¤æåä¸äº SEO çè¨­å®ã

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
 
