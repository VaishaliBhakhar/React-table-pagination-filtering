# React-table-pagination-filtering
Get data from api and display it in UI in table formate with pagination and also with filter on each column


1. Go to project folder: `cd React-table-pagination-filtering`

2. To run backend go to: `cd backend`

3. Insatll all dependancies using: `npm install`

4. Run backend using: `npm start`

5. Go to Frontend: `cd Frontend`

6. Insatll all dependancies using: `npm install`

7. Run frontend using: `npm start`

NOTE: Make sure you are running backend from this folder only as I have changed port and using same to fetch data in frontend.


> Frontend is converted in typescript from javascript.

> Fetching data from backend and frontend shows loader untill it gets data from backend.

> In frontend, I have used Material-UI for design.

> Implemented Redux store to store data locally in state and reading data from store.

> Added redux-logger to see states in console.

> Implemented table to display data and added filtering on column.

> Pagination on table is implemented.

> Added new component for table `tableView` that you can use on any other page just by passing data as parameter.

> Added `dataView` component to get data, call action and store data in a store from reducer. It calls `tableView` component to display data in table by passing data array in key param.

> Added `service` folder that containes `action` and `reducer`.
