
# Meetnow UI

This project is a web application where users can create, discover, and join events. 
The application includes user authentication, event creation, and real-time notifications about event updates. 
It is developed using **React** with **Next.js** on the frontend and an **external REST API** for data management.

## Technologies

- **Frontend**: 
  - React
  - Vite
  - Next.js
  - Tailwind CSS
  - React Hook Form
  - Socket.io (for real-time notifications)
- **Backend**:
  - Node.js with Express (REST API)
  - PostgreSQL (database)
  - JWT (for authentication)
  - BullMQ (for queues)
- **Deployment**:
  - Vercel (Frontend)
  - Heroku (Backend and database)

## Prerequisites

Before you begin, ensure you have the following programs installed:

- **Node.js** (LTS recommended): [Download Node.js](https://nodejs.org/)
- **Yarn** or **npm** (package manager)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your_username/meetnow-ui.git
cd meetnow-ui
```

### 2. Install dependencies

To install the project dependencies, run:

```bash
yarn install
# or with npm
npm install
```

### 3. Run the project in development mode

To start the app in development mode, run:

```bash
yarn dev
# or with npm
npm run dev
```

The app will run at `http://localhost:3000`.

## Planned Features
- ✅ **Event Creation**: Users can create events with a title, description, date, time, and location.
- ⬜ User Registration & Authentication. 
    - ⬜Users can sign up and log in with email and password.
    - ⬜ **JWT** authentication for session management.
- ⬜ **Event Discovery**: Users can search and filter events by title, date, location, and category.
- ⬜ **RSVP to Events**: Users can RSVP to events to confirm attendance.
- ⬜ **Real-Time Event Updates**: Using **Socket.io**, users receive real-time notifications about event changes (e.g., time, location, or cancellation).
- ⬜ **User Dashboard**: Users have a dashboard where they can view their upcoming and past events, as well as their RSVPs.
- ⬜ **Admin Dashboard**: Admins can manage user accounts, events, and moderate content (e.g., event approval).

## Running Tests

If you have tests set up for your application, you can run them using:

```bash
yarn test
# or with npm
npm run test
```

## Contributing

If you want to contribute to this project, please fork the repository, create a new branch, and submit a pull request. Be sure to follow the coding standards and include tests for any new features or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.