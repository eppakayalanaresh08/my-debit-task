# 💳 My Debit Task

A modern, responsive Next.js application showcasing debit card features with sections like hero banner, features, testimonials, pricing, and call-to-action.

![Desktop](/public/assets/dt.png)
![Mobile](/public/assets/mv.jpg)


## 🧾 Project Structure

```
my-debit-task/
├── .github/
│   └── workflows/
│       └── vercel.yml          # GitHub Actions deployment config
├── public/
│   ├── assets/
│   │   ├── icons/              # SVG icons used across UI
│   │   └── images/             # Testimonials images
│   └── fonts/                  # (Optional) Custom fonts if added
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with font and theme setup
│   │   ├── page.tsx            # Main entry home page
│   │   └── providers.tsx       # Theme and other global providers
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   └── CtaSection.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── icon.tsx
│   ├── constants/
│   │   ├── features.ts         # Feature cards data
│   │   ├── testimonials.ts     # Testimonials data
│   │   ├── pricing.ts          # Pricing plans data
│   │   └── index.ts
│   ├── lib/
│   │   ├── fonts.ts            # Google fonts setup
│   │   ├── animations.ts       # Framer Motion configurations
│   │   └── utils.ts
│   └── styles/
│       ├── globals.css         # Tailwind & base CSS
│       └── keyframes.css       # Custom animations
├── .eslintrc.json              # ESLint config
├── .gitignore
├── next.config.js              # Next.js settings
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json               # TypeScript config
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/my-debit-task.git
cd my-debit-task
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view the app.

## 🛠️ Built With

- **Next.js 14**
- **React 18**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React Icons**
- **TypeScript**

---

© 2025 TechAdlien. All rights reserved.