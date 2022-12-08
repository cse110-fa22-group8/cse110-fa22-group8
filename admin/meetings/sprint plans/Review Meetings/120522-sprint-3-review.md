<h1>Sprint 3 Review Meeting
<br /> December 5, 2022
</h1>

### Attendance 
Present:
- Krish
- Brian
- Takuro
- Demi
- Maggie 
- Jinwoong
- Goldie
- Rishigesh

Absent:
- Nikhil
- Alex

---
### Sprint Review
*Sprint 2: 11/29 ~ 12/5* <br>

**Task: Home-Page**

Back-end:
- Used localStorage and sessionStorage for expenses
  - Add expenses
    - Expenses are stored as values into localStorage associated with the login username key.
  - Edit expenses
    - Edit currently stored values in the localStorage
  - Delete expenses
    - Delete expenses from localStorage
- Filter Functionality
- Search Functionality


Front-end:
- Home Page built with HTML and CSS to let users
  - Add expense
  - Edit expense
  - Delete Expense
- Filter Functionality
- Search Functionality

<br>

**Task: Filter Functionality**

Filter in Home Page
- Filters expenses based on wants, needs, and expenses
- Back end: Javascript
- Front end: HTML and CSS
- Used Queryselectory to grab HTML table and iterate through elements to compare expense category with desired filter value. 

<br>

**Task: Search Functionality**

Search in Home Page
- Search for specific expenses by name
- HTML for input, CSS for output. 


<br>


**Task: Tests**

Test cases:
- Used Puppeteer with end to end testing since functionalities depend on localStorage. 
- Added test cases for login page
- Added test cases for create account page
- Added test cases for home page

---
### Diagrams
![Github Board](/admin/meetings/diagram-sc/sprint3-gitboard.PNG)
![Revamped Home page](/admin/meetings/diagram-sc/home-page-final.PNG)
![Add expenses](/admin/meetings/diagram-sc/create-expense.PNG)
![Update/Delete expenses](/admin/meetings/diagram-sc/update-delete.PNG)
![Tests](/admin/meetings/diagram-sc/tests.PNG)