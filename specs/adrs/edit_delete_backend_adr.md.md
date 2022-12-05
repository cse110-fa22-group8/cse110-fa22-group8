# Backend Team ADR 4

## 11/30/2022
## Major Decisions
- Edit and Delete functionalities

### **Edit Functionality**
- The edit functionality was decided to be an option for existing expenses in the database
- From a form on the frontend, changes were reflected in the corresponding localStorage index for the given expense
### ** Delete Functionality
- Similar to edit, a button that reset all values for the given corresponding expense record was established
- Values are cleared and page is reloaded, removing it from the table and database
### **Bug Fixes**: 
- Button order for edit and delete because enter key is equal to click, so it would delete when hitting enter when you hit edit button
- Wrong HTML value was being pulled to js for the edit and create - standardized values being passed through
