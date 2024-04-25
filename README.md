# Raven: Next.js Full Stack Platform
Raven is a comprehensive Next.js full-stack platform designed to streamline user authentication and management. Utilizing Next.js for both frontend and backend development, Raven offers a seamless experience for user login and signup functionalities.
## Deployment

Raven is deployed at [raven-seven.vercel.app](raven-seven.vercel.app). You can access the live version of the project to explore its features and functionalities

## Data Flow

![App Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/160034854/325687127-b265837f-2645-4960-b2ac-8f4d62ea83f0.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240425%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240425T161235Z&X-Amz-Expires=300&X-Amz-Signature=0ef365ab719719d225aa60cbd2867c408ef41f6591b70584f09138b0af6204ee&X-Amz-SignedHeaders=host&actor_id=160034854&key_id=0&repo_id=789045803)


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
