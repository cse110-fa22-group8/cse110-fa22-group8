# Backend Team ADR 5

## 12/1/2022
## Major Decisions
- Filter and Search Functionalities

### **Filter Functionality**
- Debating between filtering the given records on screen or filtering the database
- Filtering database is a costly operation if there are lots of records
- Decided to 'filter' on the frontend - checking each record, and then changing the CSS to show the valid records if they match the corresponding filter value the user selects
### ** Search Functionality
- Search similar to filter - the user should only see the records with a matching name
- Using CSS properties to adjust what is shown - more changes on the front-end side
### **Bug Fixes**: 
- Search and Filter broke the Edit button - readjusted to 'couple' the functionality together (firing the same function for both event listeners, but relying on the user's action to differentiate)
- Setting all rows to visible (in conjunction with front-end team) before filtering, so that the application can 'reset' before each new filter
