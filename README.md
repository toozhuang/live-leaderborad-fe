#Leader Board Frontend

#### Description
Leader Board webSite, Single page application using react, react-router, redux and ant-design.

## Project Structure
###Client
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
### Server
- websocket module
- app module
  - controller(get)
  - controller(post)


## Project Workflow
1. Live scores page will show the scores received from a live WebSocket connection
2. The scores page has 3 event listeners ( connect, update, disconnect)
3. The project follows the Redux pattern and takes advantage of react build in redux hook(useReducer), building the whole redux workflow from sketch.
4. Component performance is also be considered, data received will be compared and the same data will not re-render the related component
5. Backend provides only WebSocket event broadcast and two APIs for triggering the WebSocket events.
  1. A simple GET to localhost:8080 will trigger the backend to broadcast different score list to the client
  2. A simple POST to localhost:8080 will trigger the backend to broadcast the same score list to the client
6. Since the size of the project, the unit test runs most on the redux side. The backend has no unit test integrated

## Run And Test
1. run live-leaderboard-fe with `npm run start`
2. run live-leaderboard with 'npm run start:dev'
3. For the broadcast features, using [postman](https://www.postman.com/afatswan/workspace/live-scoreboard/request/1092639-fff1242d-6fe2-46b9-8f17-50d6c55b98bc) to trigger the backend to broadcast to clients

