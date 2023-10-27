# Design Decisions and Thoughts

## Frontend

- Added Components folder to organize different components being added (SearchBar, CardList)
- Installed TailwindCSS, axios, react-icons

### Searchbar

- Basic react functional component that contains input which is a searchbar that tracks the 'searchTerm' inside of it
- The biggest challenge was delaying the user from submitting by a second which is something I had to figure how to do.
- This was done by the use of 'delayTerm' which sets a time for one second every time the searchTerm field has an active state and then clears it after 1000ms.
- Added a clear button (the X) for user experience.

### CardList

- This component just displays the list of Magic cards that are being retrieved by the API and displays the details
- Cards are displayed in grid layout through tailwind css and then maps through the cards array provided and for each card assigns a image, name, set name, number, rarity based on the API details

### App.js

- This is the main react component obviously so it displays the other components and styles them with tailwind css, the other components each have a prop attached to them, searchbar prop is the current term being populated to search state onSearch. The cards prop is just which list of cards is being displayed currently.

- I decided to throw in the API fetching into this class but could of added another component
- I installed axios so information can be fetched from the API.
- The fetchCards method is connecting to the API through the 3001 port specifically (backend) and uses the searchTerm to identify the cards being pulled from the API and sets those cards into the cardList
- when the searchTerm state is being populated it makes an axios request to the backend and then updates the cards variable and sets it with the data provided.

## Backend

### Intro

- Very tricky for me as it was my first time using express
- There was some imports I had to make throughout the creation of the backend, dotenv for the environment variables, axios for the env file and make HTTP requests and AxiosError as I kept getting axios errors and it was the only way I could fix it. Then I had to use cors so the two ports could communicate with one another which was all completely new to me.
- Also added .env file to store sensitive information (in this case the URL to the API.)

### Inside the Express App

- I made sure cors was running before any of the requests and then I began adding things to the get requests that was there initially. I had to specify the exact URL where to pull the cards from which was given by the SCRYFALL site.
- The first part of the express app is just validating the query which will be the searchTerm provided by frontend.
- Then the API call is made with AXIOS which calls from scryfall and uses the .env file URL and the validated query to retrieve the card data from the API as a JSON response and sends to the client aka Frontend.
- The rest is all just error handling which was mostly general errors except for AxiosError which I kept having issues with so I needed to import the AxiosError package and catch those.
