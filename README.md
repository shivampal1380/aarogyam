# Aarogyam Wellness Centre — Workshop Registration Application

Production-ready full stack application for maximizing paid workshop registrations at Aarogyam Wellness Centre.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite 6, Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| Animation | Motion 11 (framer-motion) |
| Forms | React Hook Form 7 |
| Toast | React Hot Toast 2 |
| Icons | Lucide React |
| Slider | Swiper 11 |
| Counter | React CountUp 6 |
| SEO | React Helmet Async 2 |
| Backend | Node.js, Express 4 |
| Database | PostgreSQL + Prisma ORM 6 |
| Payment | Razorpay SDK 2.9 |
| Email | Nodemailer 6 (Gmail SMTP) |
| Security | Helmet, CORS, Rate Limiting |

## Prerequisites

- Node.js >= 18
- PostgreSQL installed locally or cloud instance
- Razorpay test account
- Gmail account with App Password

## Setup

### 1. Clone and install

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Configure environment variables

```bash
# Copy example env files
cp .env.example server/.env
cp .env.example client/.env
```

Edit `server/.env`:
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/aarogyam?schema=public"
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_char_app_password
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Edit `client/.env`:
```
VITE_API_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY_ID=rzp_test_your_key_id
VITE_WHATSAPP_NUMBER=919999999999
VITE_WHATSAPP_MESSAGE=Hello Aarogyam Wellness Centre, I have successfully registered for the workshop. Thank You.
```

### 3. Set up database

```bash
cd server

# Create the database (if not exists)
# psql -U postgres -c "CREATE DATABASE aarogyam;"

# Run Prisma migration
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate
```

### 4. Start development servers

```bash
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/register` | Create a new registration |
| GET | `/api/registration/:id` | Get registration details |
| POST | `/api/payment/create-order` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment signature |
| GET | `/api/workshop` | Get workshop details |
| GET | `/health` | Health check |

## Project Structure

```
aarogyam/
├── client/                     # React frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── layout/         # Navbar, Footer, WhatsApp
│   │   │   ├── ui/             # Button, Card, Input, etc.
│   │   │   ├── sections/       # Landing page sections
│   │   │   └── registration/   # Registration form & payment
│   │   ├── pages/              # Route pages
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API service layer
│   │   ├── utils/              # Helpers, constants
│   │   ├── context/            # React context
│   │   └── styles/             # Tailwind CSS config
│   ├── index.html
│   └── vite.config.js
│
├── server/                     # Express backend
│   ├── config/                 # Database, Razorpay, Email
│   ├── controllers/            # Route handlers
│   ├── middleware/              # Security, validation, errors
│   ├── prisma/                 # Database schema
│   ├── routes/                 # API routes
│   ├── services/               # Business logic
│   ├── utils/                  # Helpers
│   ├── validators/             # Request validation
│   ├── app.js                  # Express app
│   └── server.js               # Entry point
│
├── .env.example
├── .gitignore
└── README.md
```

## Razorpay Test Cards

| Card Number | Expiry | CVV | Result |
|---|---|---|---|
| 4111 1111 1111 1111 | Any future | Any | Success |
| 4000 0000 0000 0002 | Any future | Any | Failure |

Use any 3-digit CVV and any future expiry date.

## Gmail App Password Setup

1. Go to Google Account > Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Select "Mail" and "Other"
5. Generate and copy the 16-character password
6. Use this in `EMAIL_PASS`

## Production Deployment

### Environment Variables (Production)

Change these in both `.env` files:
```
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
DATABASE_URL=your_production_database_url
RAZORPAY_KEY_ID=rzp_live_your_live_key
RAZORPAY_KEY_SECRET=your_live_secret
```

### Build

```bash
# Build frontend
cd client
npm run build

# The build output is in client/dist/
```

## Security Features

- Helmet.js security headers
- CORS configuration
- Rate limiting (100 req/15min general, 20 req/15min payment endpoints)
- HPP (HTTP Parameter Pollution protection)
- Input validation on all endpoints
- Payment signature verification (HMAC SHA256)
- Timing-safe comparison for payment verification
- Prisma parameterized queries (SQL injection prevention)
- Body size limits (10kb)
- Environment variable isolation

## License

Private — Aarogyam Wellness Centre
