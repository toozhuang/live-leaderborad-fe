### Leader Board Frontend

#### Description
Leader Board webSite, Single page application using react, react-router, redux and ant-design.

#### Project Structure

- pages
  - score page
- components
  - components used within score page
- context
  - useSocket Hook context
  - Redux context
    - action 
    - reducer
    - state (use context for state) 
- common
  - route routes configuration


#### Project Workflow
1. Live Scores Page will show the scores received from a live websocket connection
2. The Page have 3 event listener( connect, update, disconnect)
3. The project follow the Redux pattern and take advantage of react build in redux hook(useReducer), build the whole redux workflow from sketch.
4. Component performance also be considered, data received will be compared and same data will not re-render the related component

