# MagicTheGathering-Card-Search

Welcome to the Magic Card Search project! 🧙✨ This project was initially a coding assignment given to me during an interview process. I found the task interesting and decided to expand on it, turning it into a full-fledged project for display in my portfolio.

![image](https://github.com/ParkerH4/MagicTheGathering-Card-Search/assets/113216014/2d8291fb-8c74-4050-96e6-49d59449b2dc)


## Overview

The goal of this project is to create a basic full-stack application using TypeScript, React, Node, Express, and integrating with the Scryfall API for Magic cards. The project includes a backend that serves as a REST endpoint to fetch Magic cards based on a user-provided search string. The frontend, built with React, enables users to search for cards using a user-friendly interface and displays card information such as images, names, set names, numbers, and rarities.

## Features

- **Search Bar**: Users can input a card name to search, and the application will dynamically retrieve and display relevant Magic cards.
- **Rate Limiting**: To prevent abuse, users are restricted from submitting more than one API request per second using the search bar.
- **Card Display**: The application presents Magic cards in a user-friendly format, showcasing images, names, set names, numbers, and rarities.

## Bonus Features

- **Backend Testing**: The Node endpoint has been tested using a testing framework of choice.

- **Frontend Enhancement**: Added pagination and sorting features to enhance the user experience.

- **Styling with Tailwind CSS**: The entire interface is styled using [Tailwind CSS](https://tailwindcss.com), providing a clean and responsive design.

## Getting Started

### Prerequisites

- Node.js (Latest LTS version)

### Installation

1. Clone the repository:

git clone https://github.com/your-username/MagicTheGathering-Card-Search.git

2. Install dependencies:

cd magic-card-search
npm install
cd client
npm install

3. Start the Servers
   npm start

## Design Decisions

For detailed information about the design decisions, please refer to the DESIGN_EXPLANATION.md file.

## Technologies Used

- Node.js (Backend server)
- Express (Web application framework)
- React (Building frontend interface)
- TypeScript (Enhance code readability)
- Tailwind CSS (Responsive Styling)

## Scryfall API

The project utilizes the Scryfall API to fetch Magic cards based on a full-text search string. For more information, refer to the [Scryfall API documentation](https://scryfall.com/docs/api/cards/search).
