# Backend Team ADR 6

## 11/30/2022
## Major Decisions
- Chart view for purchase categories

### **Chart View**
- Implemented chart view to show the user a more visual breakdown of quantity of each purchase category
- Decided to use Chart.js
- Good documentation and online support for errors
- Simple to use as we are only plotting three datapoints
- Per documentation - renders charts on HTML5 canvas rather than SVGs, improving performance if the user has many expenses
- Easier to use than other APIs - interfaces well with localStorage