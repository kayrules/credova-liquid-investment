# Liquid Investment Monorepo

A Bun workspaces monorepo for the Liquid Investment project, containing both the public website and the admin console.

## Project Structure

```
liquid-investment/
├── packages/
│   ├── website/          # @liquid-investment/website - Public-facing website
│   └── console/          # @liquid-investment/console - Admin dashboard
├── package.json          # Root workspace configuration
└── README.md
```

## Workspaces

### 📦 @liquid-investment/website

The public-facing website built with Astro, Tailwind CSS, and various integrations.

**Location**: `packages/website/`

**Tech Stack**:
- Astro 4.3.2
- Tailwind CSS 3.4.1
- React 18.2.0
- MDX support
- RSS & Sitemap generation

**Development**:
```bash
# From root directory
bun run dev

# Or directly in the package
cd packages/website
bun run dev
```

**Build**:
```bash
# From root directory
bun run build

# Or directly in the package
cd packages/website
bun run build
```

**Port**: Default Astro port (typically 4321)

---

### 📦 @liquid-investment/console

Admin dashboard built with Flowbite Astro Admin Dashboard template.

**Location**: `packages/console/`

**Tech Stack**:
- Astro 4.3.2
- Flowbite 2.1.1
- Tailwind CSS 3.4.1
- ApexCharts 3.45.0
- Faker.js 8.4.1 (for mock data)

**Development**:
```bash
# From root directory
bun run dev:console

# Or directly in the package
cd packages/console
bun run dev
```

**Build**:
```bash
# From root directory
bun run build:console

# Or directly in the package
cd packages/console
bun run build
```

**Port**: 3000

**Features**:
- Dashboard with charts and analytics
- CRUD operations for products and users
- User authentication pages (sign-in, sign-up, password reset)
- User settings page
- Dark mode support
- Responsive sidebar and stacked layouts

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd liquid-investment
```

2. Install all dependencies:
```bash
bun install
```

### Development

Run both projects simultaneously:
```bash
bun run dev:all
```

Or run them separately:
```bash
# Website only
bun run dev

# Console only
bun run dev:console
```

### Building

Build both projects:
```bash
bun run build:all
```

Or build them separately:
```bash
# Website only
bun run build

# Console only
bun run build:console
```

### Formatting

Format all code:
```bash
bun run format
```

## Workspace Scripts

The following scripts are available from the root directory:

| Script | Description |
|--------|-------------|
| `bun run dev` | Start website development server |
| `bun run dev:console` | Start console development server |
| `bun run dev:all` | Start both development servers |
| `bun run build` | Build website for production |
| `bun run build:console` | Build console for production |
| `bun run build:all` | Build both packages for production |
| `bun run format` | Format all code with Prettier |

## Admin Console Features

The admin console (`@liquid-investment/console`) provides:

1. **Dashboard**: Overview with revenue charts, traffic analytics, and key metrics
2. **CRUD Operations**:
   - Products management
   - Users management
3. **Authentication Pages**:
   - Sign in
   - Sign up
   - Forgot password
   - Reset password
   - Profile lock
4. **Settings**: User profile and preferences
5. **Layouts**: Sidebar and stacked navigation options
6. **Error Pages**: 404, 500, and maintenance pages
7. **Pricing**: Pricing plans page

## Data Management

The console uses static JSON data for development, located in:
- `packages/console/data/products.json`
- `packages/console/data/users.json`

During build time, the app uses the static data from these files. The data fetching logic automatically falls back to static data when the API is not available.

## Tech Stack Details

### Shared Dependencies
- Astro 4.3.2
- Tailwind CSS 3.4.1
- TypeScript 5.3.3

### Website-Specific
- React with Astro integration
- MDX support
- Disqus for comments
- Swiper for carousels
- Marked for markdown parsing

### Console-Specific
- Flowbite components
- ApexCharts for visualizations
- Faker.js for mock data generation
- Tailwind scrollbar plugin

## License

MIT

## Author

kayrules@gmail.com
