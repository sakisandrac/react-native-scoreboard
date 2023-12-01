<div align="center">
<h1> Banana Scoreboard 🍌</h1>

Technologies used FRONTEND:<br>
  <img src="https://img.shields.io/badge/React-Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />

  Technologies used <a href="https://github.com/sakisandrac/react-native-scoreboard-api">BACKEND:</a><br>
  <img src="https://img.shields.io/badge/Node.JS-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.JS-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</div>

## About this Application:
- Banana Scoreboard allows users to search through a scoreboard, by user's name and sees where the user searched ranks amongst the top ten highest banana scores.
### Application Features:
- Sorting by seeing all the rankings for all users, alphabetically and by lowest ranked
- Fuzzy Search: If user types in a name of a partial match, the application will offer suggestions that match the closest in the data.
- If backend api is open locally, retrieve the latest data from the database, otherwise, data is taken from original dataset.
- Add a new user to the database through a form.

## Context:
- This application was created within a 2 week guideline for a takehome challenge, using React Native and Redux. The goal of this application was to show my knowledege of React Native and Redux, as well as testing Redux logic. UI design and implementation were completely up to me, as long as it had all the required features.

## Additional Information: 
- <a href="https://github.com/users/sakisandrac/projects/11">Github Project Board</a> was utilized to create issues, including user stories and acceptance criteria for testing. Issues were closed with Pull Requests.
- I used Figma to design the UI of the application, as well as FlatIcon to source icons/images used. <a href="https://www.figma.com/file/yYY3i88AwwelHKRk99UnCJ/Banana-Scoreboard?type=design&node-id=0%3A1&mode=design&t=zfTXmjO6ZPd6emKu-1">Figma Design file here</a>

# Preview of App:
 <div align='center'> 
    
  <h2>Home Page, Scoreboard and Search Page</h2>
  <div style="display: inline-block;">
  <img width="290" alt="Screenshot 2023-11-27 at 7 01 26 PM" src="https://github.com/sakisandrac/react-native-scoreboard/assets/118419729/257f97db-86c9-4efb-b0ee-e27a3adb0fcb" alt="Image 1" style="display: inline-block;">
  <img width="290" alt="Screenshot 2023-11-26 at 3 22 10 PM" src="https://github.com/sakisandrac/react-native-scoreboard/assets/118419729/d2b61666-ee7d-47c6-a1ce-f7eb239d00f9" style="display: inline-block;">
</div>

  <h2>User Not Found and Partial User Match </h2>
    <div style="display: inline-block;">
    <img width="290" alt="Screenshot 2023-11-27 at 7 01 26 PM" src="https://github.com/sakisandrac/react-native-scoreboard/assets/118419729/a6156fe7-139b-4db8-897f-fd542677f063" alt="Image 1" style="display: inline-block;">
  <img width="290" alt="Screenshot 2023-11-26 at 3 22 10 PM" src="https://github.com/sakisandrac/react-native-scoreboard/assets/118419729/03c833e6-bdf5-44c7-a1fe-47b015a996e9" style="display: inline-block;">
</div>

  <h2>Add New User Form</h2>
    <div style="display: inline-block;">
        <img width="290" alt="Screenshot 2023-11-26 at 3 22 10 PM" src="https://github.com/sakisandrac/react-native-scoreboard/assets/118419729/24625e96-df47-4a60-a393-3a660c24adb9" style="display: inline-block;">
    <img width="290" alt="Screenshot 2023-11-27 at 7 01 26 PM" src="https://github.com/sakisandrac/react-native-scoreboard/assets/118419729/31881852-f222-4dc6-b880-28d7b0306966" alt="Image 1" style="display: inline-block;">
</div>

  <h2>Backend Not Running Locally </h2>
    <div style="display: inline-block;">
        <img width="290" alt="Screenshot 2023-11-26 at 3 22 10 PM" src="https://github.com/sakisandrac/react-native-scoreboard/assets/118419729/301809ef-b786-4679-9f81-193ebdf16cd7" style="display: inline-block;">
    <img width="290" alt="Screenshot 2023-11-27 at 7 01 26 PM" src="https://github.com/sakisandrac/react-native-scoreboard/assets/118419729/bd60e4f2-95fa-465e-9739-4b05b5cdd6d3" alt="Image 1" style="display: inline-block;">
</div>
 </div>

## Installation Instructions:
- Fork [this](https://github.com/sakisandrac/react-native-scoreboard) repository. 
- Clone it to your local machine using the command: `git clone git@github.com:sakisandrac/react-native-scoreboard.git`.
- Run the command: `cd react-native-scoreboard`
- Run the command: `npm install`
- Run the command: `npm run ios`
- To run tests, run the command: `npm test`
