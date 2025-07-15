# otto-automation
## Description
This project is meant to facilitate testing the main flows of the application whenever needed or after any major changes to ensure the core functionality of the application and the plugins still work accordingly.
While this doesn't completely replace the manual testing part for the application, it helps with testing the most important flows and provides an easy to access and use smoke testing session.
For the current implementation, this project will be run manually, with the possibility to integrate it into a pipeline.
## Installation and dependencies
Here's how you install all dependencies:
- npm i
- npx playwright install
- npm install ts-node --save-dev

### How to run the tests
- npm run test (runs both on Webkit - equivalent to Safari and Chromium - equivalent to Chrome)
- npm run test -- --project=chromium (runs only on Chromium)
- npm run test -- --project=webkit (runs only on Webkit)
## Flow for adding new tests
### Adding the code 
#### I. Components
1. Create a new folder under "components" and choose a suggestive title for the components set (e.g. "newComponentsComponents")
2. Create scripts for each new component that will be used - the scripts will contain simple definitions for buttons and fields and simple actions for each of them
#### II. Pages/Flows
1. Create a new script under pages or flows (depending on what is required) and choose a suggestive title for the flow/page (e.g. BriefFlowDescriptionFlow.ts or BriefPageDescriptionPage.ts)
2. Import the required components (usually all components from a specific folder)
3. Create methods that combine the simple actions  from the components - these will match the needs for a test
#### III. Specs 
1. Create a new script for the required tests and choose a suggestive name for the test suite
2. Import all flows and/or pages required for the test
3. Create a beforeAll that calls the pre-config and checks the authentication state
4. Create a beforeEach (optionally) that will run before each test
5. Add all the needed tests - make assertions for each test
6. Create an afterAll function to ensure the browser closes correctly
#### IV. Suites (optional)
1. Create a new suite under the "suites" folder
2. Create a new suite file
3. Simply call the necessary specs as a whole (normally no extra logic is added to suites)
### How to decide on components, pages and flows
#### Components
Compoents are usually the elements that are common throughout an application, such as bottom menus, side menus and so on (anything that shows in multiple locations). However, below is how to decide on a component for the current project:
1. Components as small part of pages: for example the top menu that shows on all the pages
2. Components for simple pages: for example the enrollment page
3. Actual components: elements that show on multiple pages, such as Google login fields (same component is used for email and password) and Next buttons
Components will be kept simple and the content will consist in defining buttons or fields based on selectors and simple actions applied to the elements. For anything more complex than just clicking/typing on a field, a page or flow will be created and used. 
#### Pages 
Since the architecture is mostly based on flows, there won't be many pages.
#### Flows
A flow is a set of actions that lead to a specific outcome, for example login or creating a user.
A new flow is created for a new set of actions that then can be added to the tests and are based on components.
Most of the times, when new logic needs to be created for a test, the components are called and the methods describe a set of actions to lead to the expected outcome or test.
