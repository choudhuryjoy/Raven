# Raven: Next.js Full Stack Platform
Raven is a comprehensive Next.js full-stack platform designed to streamline user authentication and management. Utilizing Next.js for both frontend and backend development, Raven offers a seamless experience for user login and signup functionalities.
## Deployment

Raven is deployed at [raven-seven.vercel.app](raven-seven.vercel.app). You can access the live version of the project to explore its features and functionalities

## Data Flow

![App Screenshot](https://github.com/choudhuryjoy/raven/assets/160034854/c50e11d8-7e38-4fee-a50c-1ef3ab5c0790)

## Features

- User registration with email, password, and user type (user or seller)
- User login with email and password
- Social authentication with GitHub and Google
- User profile page displaying user information
- Sign-out functionality


## Tech Stack

- Next.js
- React
- Tailwind CSS
- Next-Auth
- Prisma
- PostgreSQL
- Zod (for form validation)
- bcryptjs (for password hashing)
- react-form-hooks



## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/raven.git
```

2. Install dependencies:

```bash
cd raven
npm install
```

3. Set up the environment variables:

Create a `.env` file in the root directory and add the following variables:

```
DATABASE_URL=<your-postgresql-database-url>
NEXTAUTH_URL=<your-app-url>
GITHUB_ID=<your-github-client-id>
GITHUB_SECRET=<your-github-client-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Contributing

Contributions are welcome! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Authjs](https://authjs.dev/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
