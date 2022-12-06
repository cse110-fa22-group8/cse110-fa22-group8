*This plan is our final roadmap that lead to the projects conclusion*
*Backend and Frontend are both responsible for the Javascript*

**Week 1 (October 31st - November 6th)**
- Implement JsElectron and establish an understanding on the implementation.
- Start planning and understanding 
- Frontend design phase.
---
**Week 2 (November 7th - 13th)**
Transition out of Electron Js and 
- Sign-in/sign-up page
  - Backend: User database table configured w/ username and password
    - Local Storage statements to store username with associated password.
  - Frontend: Splash screen for what the app is
    - General layout for login - basic html and functionality first. 
    - Include create account option /  screen
  - Agile: Set-up Github Actions (simple version first) 
    - Create a Github board to track issues 
    - Create the pipeline
---
**Week 3 (November 14th - 20th)**
- Home page (expense list)
  - Backend: Set up table to store expenses with their required fields
    - Update and delete expense statements in local storage. 
    - Filter expense statements in local storage. 
    - Extract expense statements from categories. 
  - Front end: Create card general layout for home screen - basic html and functionality first
    - Create expense form 
    - Delete expense button (deletes the specific expense)
    - Update expense fields (which edits each expense)
    - Searching for expenses using its specific expense name 
  - Agile: Create unit tests for faulty expenses, input, searching, and categorizing expenses. 
    - Update CI/CD pipeline along the way 
--- 
**Week 4 (November 21st - 27th)**
- Home page (continue expense list)
  - Backend: Set up table to store expenses with their required fields
    - Update and delete expense statements in local storage. 
    - Filter expense statements in local storage. 
    - Extract expense statements from categories. 
  - Front end: Create card general layout for home screen - basic html and functionality first
    - Create expense form 
    - Delete expense button (deletes the specific expense)
    - Update expense fields (which edits each expense)
    - Searching for expenses using its specific expense name 
  - Agile: Create unit tests for faulty expenses, input, searching, and categorizing expenses. 
    - Agile: Test and finalize the login/sign up page using Jest and Puppeteer 
---
**Week 5 (November 28th - December 4th)**
- Breakdown page (final touches)
  - Backend: Set up localStorageAPI statements for expense breakdowns and percent logic
  - Frontend: Set up general layout for pie chart and total expense for that month. 
  - Agile: Test and finalize the breakdown page and home page using Jest and Puppeteer
- Agile: Set up JsDocs 
- Polishing final bugs and beautifying the project. 
