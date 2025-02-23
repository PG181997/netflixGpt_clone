# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Netflix gpt

    - created react app using vite
    - Configured tailwind css according vite guidlines
    -Header
    -Login form
    -sign up form
    -Form valadition
    -Useref hook
    -Firebase setup
    -Deploying our app to production
    -Create signup user account
    -Implemented sign-in user API
    -Created redux store with userSlice
    -Implemented signout
    -Updated profile
    -BugFix: Sign up user displayName and profile picture update
    -BugFix: If the user is not logged in Reddirect / browse to login page and vice versa
    -Unsubscribed to the onAuthStateChanged callback
    -Added hardcoded vlaues to the constants file

        - TMDB
            - Login to the website
            - Once logged in go tonedit website
            - Go to API

    -Regester TMDB API and create an app and get acess token
    -Get Data from TMDB ow playing movies list API
    -Customhook for now playing movies
    -Create Movie slice
    -Update store with movies data
    -Planning for main and secondary container
    -Fetch data from trailer video
    -Update store with tailer video data
    -Embedd the youtube video and make it autoPlay and mute
    -Tailwind class to make main container look good
    -Build secondary component
    -Build movie list
    -Build Movie card
    -TMDB image CDN URL
    -added popularMovie, trendingMovies, nowplaying and upcomingMovies custom hooks
    -Gpt search page
    -gpt search bar
    -Multi-lang feature in out app **
    -Integrate GPT API's(get open AI app)
    -get search openAI api key
    -Gpt search api call
    -fetched gpt movie suggestion from tmdb
    -created gpt slice added data
    -reused movie list component to make movie suggestion container
    -Memoization
    -added .env file and added it to git igonre
    -multi language support
    -made site responsive

# Features

    -Login/signup page
        - Sign in / sign up form
        - Redirect to browes page
    -Browser (After authentication)
        -Header
        -Main Movie
            - Trailer and background
            - Title and description
            - Movie suggestion
                - Lot of movie lists
    -Netflix gpt
        - Search bar
        - Movie suggestions

# Command to deploy the project live using fire base

    -1 Installing fire base - npm install -g firebase-tools
    -2 Firebase login - Firebase login
    -3 Initilizing firbase - firbase init, then selecting hosting
    -4 Deploy command = 'Firebase deploy
