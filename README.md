# MASS - Premium Aluminum & uPVC Window Solutions 🪟

[![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?style=flat&logo=mongodb)](https://mongoosejs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A modern, full-stack web application for **MASS** — a company specializing in premium aluminum anodizing, powder coating, uPVC windows, doors, and custom finishing solutions for commercial and residential projects. The platform features an interactive **Smart Window & Door Customizer**, online booking, an admin dashboard, and informative product pages.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
  - [Pages (App Router)](#pages-app-router)
  - [API Routes](#api-routes)
  - [Components](#components)
  - [Models & Controllers](#models--controllers)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Run the Development Server](#run-the-development-server)
- [Usage Guide](#-usage-guide)
  - [Public Pages](#public-pages)
  - [Smart Window Customizer](#smart-window-customizer)
  - [Admin Dashboard](#admin-dashboard)
- [API Endpoints](#-api-endpoints)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🖥️ Frontend
- **Interactive Window & Door Customizer** — Step-by-step configuration (type, dimensions, material, glass, color, finish, hardware) with a live preview and progress tracking.
- **Product Showcase** — Dedicated pages for Aluminium Anodizing, Powder Coating, and Color Anodizing services.
- **Responsive Design** — Built with Tailwind CSS 4 and shadcn/ui components, fully responsive across all devices.
- **Smooth Animations** — Powered by Framer Motion, GSAP, and AOS for a polished user experience.
- **Gallery & Testimonials** — Visual portfolio and client feedback sections.
- **Contact & Booking** — User-friendly forms for consultations and inquiries.

### 🔒 Backend & Admin
- **JWT Authentication** — Secure login for the admin panel.
- **Admin Dashboard** — Overview of bookings and contact inquiries with stats.
- **Booking Management** — Full CRUD operations (view, search, edit, delete) on booking records.
- **Contact Management** — View contact form submissions.
- **MongoDB Integration** — Persistent data storage via Mongoose ODM.

### 🧩 Additional
- **Marquee / Slider Sections** — Displaying partner colleges or clients.
- **FAQ with Accordion** — Expandable Q&A for common customer questions.
- **Toast Notifications** — Real-time feedback via `react-toastify`.

---

## 🛠️ Tech Stack

| Technology        | Purpose                               |
|-------------------|---------------------------------------|
| **Next.js 15**    | React framework (App Router)          |
| **React 19**      | UI library                            |
| **Tailwind CSS 4**| Utility-first styling                 |
| **shadcn/ui**     | Accessible, reusable UI components    |
| **MongoDB**       | NoSQL database                        |
| **Mongoose**      | MongoDB ODM                           |
| **JWT (jsonwebtoken)** | Authentication tokens            |
| **Framer Motion** | Animation library                     |
| **GSAP**          | Advanced animations                   |
| **AOS**           | Scroll animations                     |
| **Formik + Yup**  | Form handling & validation            |
| **Lucide React**  | Icon library                          |
| **React Toastify**| Toast notifications                   |
| **React CountUp** | Animated counter numbers              |
| **Embla Carousel**| Carousel/slider component             |
| **SASS**          | CSS preprocessing                     |

---

## 📁 Project Structure

```
mass-project/
├── public/                          # Static assets (images, SVGs, icons)
│   ├── assets/                      # Dynamic SVG/PNG assets for window types
│   ├── MASS.svg
│   ├── white.svg / whitelogo.svg
│   ├── hero_img.png / hero.png
│   └── ...
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.js                # Root layout (Navbar, Footer, Poppins font)
│   │   ├── page.js                  # Home page (Hero, Services, Industries, etc.)
│   │   ├── globals.css              # Global styles & Tailwind directives
│   │   │
│   │   ├── about-us/                # About Us page
│   │   ├── contact-us/              # Contact Us page
│   │   ├── calculator/              # Smart Window Customizer page
│   │   ├── gallery/                 # Gallery page
│   │   ├── MarqueeSection/          # Marquee / scrolling logos section
│   │   ├── webApp/                  # WebApp wrapper component
│   │   │
│   │   ├── product/                 # Product detail pages
│   │   │   ├── aluminium-nodizing/  # Aluminium Anodizing
│   │   │   ├── color-anodizing/     # Color Anodizing
│   │   │   └── powder-coating/      # Powder Coating
│   │   │
│   │   ├── admin/                   # Admin panel (protected)
│   │   │   ├── layout.js            # Admin layout with sidebar
│   │   │   ├── page.jsx             # Admin dashboard (stats, recent bookings)
│   │   │   ├── bookings/            # Booking management (CRUD)
│   │   │   └── contacts/            # Contact inquiry management
│   │   │
│   │   └── api/                     # API routes
│   │       ├── booking/             # Booking CRUD API
│   │       ├── contact/             # Contact form API
│   │       ├── login/               # Admin login / JWT generation
│   │       └── speech-to-text/      # (planned) Speech-to-text API
│   │
│   ├── components/                  # shadcn/ui component library
│   │   └── ui/                      # Button, Card, Badge, Dialog, Table, etc.
│   │
│   ├── component/                   # Custom application components
│   │   ├── Navbar.js                # Responsive navigation bar
│   │   ├── Footer.js                # Site footer with links & socials
│   │   ├── HeroSection.jsx          # Page hero banner
│   │   ├── Hero/                    # Homepage hero component
│   │   ├── AboutMass.jsx            # "About MASS" section
│   │   ├── OurServices/             # Services grid section
│   │   ├── OurWork.jsx              # Portfolio/work showcase
│   │   ├── WorkShowCase.js          # Work showcase component
│   │   ├── Process.jsx              # Process step-through
│   │   ├── Process-Efficiency.jsx   # Process efficiency section
│   │   ├── Grid-Section.jsx         # Reusable grid layout
│   │   ├── Grid-Item.jsx            # Individual grid item
│   │   ├── SmartCustomize.jsx       # Smart customization callout
│   │   ├── Testimonial.jsx          # Testimonial component
│   │   ├── Testimonial-Slider.jsx   # Testimonials carousel
│   │   ├── Faq.jsx                  # FAQ accordion section
│   │   ├── AnimationSection.jsx     # Scroll-triggered animation wrapper
│   │   ├── LoginButon.jsx           # Admin login button
│   │   ├── WhyChoose.jsx            # "Why Choose Us" section
│   │   ├── Benefits/                # Benefits section
│   │   ├── product-about.jsx        # Product about section
│   │   │
│   │   ├── WindowConfigrator.js      # Main window customizer (orchestrator)
│   │   ├── window-type-selector.js   # Window type (Slider, Casement, etc.)
│   │   ├── dimension-selector.js     # Width & height inputs
│   │   ├── material-selector.js      # Material selection (uPVC, Aluminum)
│   │   ├── glasstype-selector.jsx    # Glass type options
│   │   ├── color-selector.js         # Color & finish selection
│   │   ├── hardware-selector.jsx     # Hardware handle selection
│   │   ├── Booking-modal.js          # Booking confirmation modal
│   │   └── admin-sidebar.jsx         # Admin sidebar navigation
│
│   ├── hooks/                        # Custom React hooks
│   │   └── use-mobile.js             # Mobile detection hook
│   │
│   └── lib/                          # Server-side libraries
│       ├── mongodb.js                # MongoDB connection helper
│       ├── window.js                 # Window type constants
│       ├── utils.js                  # Utility functions (cn merge)
│       │
│       ├── models/                   # Mongoose schemas
│       │   ├── booking.model.js      # Booking schema
│       │   └── contact.model.js      # Contact form schema
│       │
│       └── controllers/              # Business logic
│           ├── booking.controller.js # Booking CRUD operations
│           └── contact.controller.js # Contact CRUD operations
│
├── .env                             # Environment variables
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Dependencies & scripts
├── postcss.config.mjs               # PostCSS configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── jsconfig.json                    # JS path aliases (@/)
├── components.json                  # shadcn/ui configuration
├── .eslintrc.json                   # ESLint configuration
└── README.md                        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (recommended: 20 LTS)
- **npm** or **yarn**
- **MongoDB** instance (local or cloud, e.g., MongoDB Atlas) — a connection string is required.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rajeevk0805/masswindoor.git
   cd mass-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/
EMAIL="user@example.com"
PASSWORD="password123"
NAME="Admin Name"
JWT_SECRET="your-secret-key-here"
```

| Variable       | Description                                 |
|----------------|---------------------------------------------|
| `MONGODB_URI`  | MongoDB connection string                   |
| `EMAIL`        | Admin login email                           |
| `PASSWORD`     | Admin login password                        |
| `NAME`         | Admin display name                          |
| `JWT_SECRET`   | Secret key for signing JWT tokens           |

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Other commands:**
| Command             | Description                |
|---------------------|----------------------------|
| `npm run dev`       | Start development server   |
| `npm run build`     | Build for production       |
| `npm run start`     | Start production server    |
| `npm run lint`      | Run ESLint                 |

---

## 📖 Usage Guide

### Public Pages

| Route                  | Description                                      |
|------------------------|--------------------------------------------------|
| `/`                    | Home page — Hero, services, industries, testimonials, FAQ |
| `/about-us`            | About MASS — company story and mission           |
| `/contact-us`          | Contact form for inquiries                       |
| `/calculator`          | Smart Window & Door Customizer                   |
| `/calculator?edit=<id>`| Edit an existing booking via customizer          |
| `/gallery`             | Project gallery                                  |
| `/product/aluminium-nodizing` | Aluminium Anodizing product details        |
| `/product/color-anodizing`    | Color Anodizing product details           |
| `/product/powder-coating`     | Powder Coating product details            |

### Smart Window Customizer

The **Smart Window & Door Customizer** is the core interactive feature available at `/calculator`. It guides users through 6 configuration steps:

1. **Window Type** — Slider, Casement, Awning, or Fixed
2. **Dimensions** — Custom width & height
3. **Material** — uPVC or Aluminum
4. **Glass Type** — Clear, Frosted, Tinted, Laminated, Tempered, etc.
5. **Color & Finish** — Choose color + Mattle or Glossy finish
6. **Hardware** — Handle type selection

A live preview shows the selected window type, and a progress bar tracks completion. Once fully configured, users can book a free consultation, which stores the configuration in MongoDB.

### Admin Dashboard

Access the admin panel by clicking the login button in the navbar and authenticating with the credentials from the `.env` file.

| Route               | Description                                |
|---------------------|--------------------------------------------|
| `/admin`            | Dashboard with stats (bookings, contacts)  |
| `/admin/bookings`   | Full booking management (CRUD, search)     |
| `/admin/contacts`   | View contact form submissions              |

**Admin features:**
- View all bookings in a sortable, filterable table
- Search bookings by type, material, or color
- View detailed booking information in a modal
- Edit bookings (redirects to customizer with pre-filled data)
- Delete bookings with confirmation dialog
- View contact form submissions

---

## 🔌 API Endpoints

### `POST /api/login`
Authenticate admin and receive a JWT token.
```json
// Request
{ "email": "user@example.com", "password": "password123" }
// Response
{ "success": true, "token": "eyJhbGciOiJIUzI1NiIs..." }
```

### `POST /api/booking`
Create a new booking. (Public — no auth required)
```json
// Request
{
  "username": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "type": "slider",
  "dimensions": { "width": 1200, "height": 1500 },
  "material": "upvc",
  "glassType": "clear",
  "color": "white",
  "finish": "mattle",
  "hardware": "Crescent-Handle"
}
```

### `GET /api/booking`
Fetch all bookings. (Protected — requires `Authorization: Bearer <token>`)

### `GET /api/booking?id=<id>`
Fetch a single booking by ID. (Protected)

### `PUT /api/booking?id=<id>`
Update a booking by ID. (Protected)

### `DELETE /api/booking?id=<id>`
Delete a booking by ID. (Protected)

### `POST /api/contact`
Submit a contact form. (Public — no auth required)
```json
// Request
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like a quote for new windows."
}
```

### `GET /api/contact`
Fetch all contact submissions. (Protected — requires `Authorization: Bearer <token>`)

---

## ⚙️ Configuration

### Dependencies

Key libraries and their versions (see `package.json` for full list):

| Package                 | Version   | Purpose                          |
|-------------------------|-----------|----------------------------------|
| `next`                  | 15.3.1    | React framework                  |
| `react` / `react-dom`   | 19.0.0    | UI library                       |
| `mongoose`              | 8.15.0    | MongoDB ODM                      |
| `jsonwebtoken`          | 9.0.2     | JWT authentication               |
| `framer-motion`         | 12.9.7    | Animations                       |
| `gsap`                  | 3.13.0    | Advanced animations              |
| `tailwindcss`           | 4.1.5     | Utility-first CSS                |
| `lucide-react`          | 0.506.0   | Icons                            |
| `react-toastify`        | 11.0.5    | Toast notifications              |
| `react-icons`           | 5.5.0     | Additional icons                 |
| `formik` / `yup`        | —         | Form handling & validation       |
| `@radix-ui/*`           | —         | Headless, accessible UI primitives|
| `tw-animate-css`        | 1.2.8     | Tailwind CSS animation utilities  |

### UI Component Library

This project uses **shadcn/ui** components, configured via `components.json`. Components are located in `src/components/ui/` and include:
- Accordion, Avatar, Badge, Button, Calendar, Card, Dialog, Input, Label, Progress, Radio Group, Select, Separator, Skeleton, Slider, Table, Tooltip

### Path Aliases

Defined in `jsconfig.json` — the `@/` prefix maps to the `src/` directory:
```js
"paths": { "@/*": ["./src/*"] }
```

---

## 🌐 Deployment

The project can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
1. Push the repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Add the environment variables (`MONGODB_URI`, `EMAIL`, `PASSWORD`, `NAME`, `JWT_SECRET`).
4. Deploy.

### Other Platforms
- **Node.js server:** `npm run build && npm run start`
- **Docker:** Build and run using the included Next.js Docker configuration.

Ensure your MongoDB instance is accessible from the deployment environment (use MongoDB Atlas for cloud deployments).

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing coding style and passes linting (`npm run lint`).

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Rajeev Kumar**
- GitHub: [@rajeevk0805](https://github.com/rajeevk0805)

---

*Built with ❤️ using Next.js, React, MongoDB, and Tailwind CSS.*