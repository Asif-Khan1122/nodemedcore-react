# NodeMedCore

<div align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

<br />

NodeMedCore is a frontend web application built to streamline medical billing and revenue cycle management for independent healthcare practices. I developed this interface to provide a clean, user-friendly way to track claims, manage daily billing operations, and monitor practice revenue.

**Live Demo:** [www.nodemedcore.com](https://www.nodemedcore.com)

---

## Features

Instead of complex spreadsheets, this project provides an intuitive UI for handling billing workflows:

- **Claim Tracking:** Visual interfaces to monitor claims from submission to payment.
- **Revenue Analytics:** Easy-to-read dashboards for tracking outstanding balances and collections.
- **Error Identification:** Workflows designed to help spot claim issues before final submission.
- **Responsive Layouts:** The UI adapts smoothly across desktop, tablet, and mobile devices.

---

## Built With

I chose a modern React stack to keep the application fast and maintainable:

- **React (v18)** - Core UI framework
- **Vite** - Frontend tooling and bundler
- **Custom CSS** - Using Grid and Flexbox for responsive layouts without heavy UI libraries
- **React Router** - For client-side routing
- **Axios** - API communication handling

---

## Project Structure

The codebase is organized by feature and reusable components:

```text
nodemedcore-react/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Banner/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Howitworks/
│   │   ├── Services/
│   │   ├── StatsSection/
│   │   └── Whyus/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```
