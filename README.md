#  Where in the World? — Countries Explorer

A responsive React web application that lets users explore countries worldwide, search and filter through real-time data, view comprehensive individual country statistics, and toggle between Light and Dark themes.

Built with **React 19**, **Vite**, **React Router**, and **REST Countries API (v5)**.

---

##  Features

- **Global Country Catalog**: Displays country cards with flags, population, region, and capital.
- **Live Search**: Instant case-insensitive filtering by country name as you type.
- **Region Filter**: Narrow down countries by continent/region (Africa, Americas, Asia, Europe, Oceania).
- **Detailed Country Views**: Dedicated page displaying:
  - Official and Native names
  - Population, Region, Subregion, and Capital
  - Top-Level Domain (TLD), Currencies, and Languages
  - Border countries
- **Light & Dark Theme Switcher**: Full theme toggling with frosted-glass sticky header and persistent storage via `localStorage`.
- **Client-Side Routing**: Single Page Application (SPA) navigation using React Router.
- **Responsive Layout**: Designed with CSS Grid and Flexbox for desktops, tablets, and mobile devices.

---

##  Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: Pure modern CSS3 (CSS Variables, Grid, Flexbox, Glassmorphism)
- **Icons**: [Font Awesome 6](https://fontawesome.com/)
- **Font**: Google Fonts ([Nunito](https://fonts.google.com/specimen/Nunito))
- **Data Source**: [REST Countries API](https://restcountries.com/)

---

##  What I Learned in This Project

### 1. React Fundamentals & State Flow
- **Lifting State Up**: Passed search state from `SearchBar` up to `App` / `Home` to synchronize filtering across `CountriesList`.
- **Data Fetching with `useEffect`**: Handled asynchronous API calls using `async/await` inside `useEffect` and cleaned up data flow.
- **Handling Asynchronous Render States**: Learned why rendering `countryData.flag.url_svg` on the initial mount crashes when state starts as `undefined`, and how to implement a loading guard before rendering.

### 2. JavaScript Array Methods & Searching
- **Arrow Functions & Implicit Returns in `.filter()`**:
  - Understood why `{ country.name.includes(...) }` fails without an explicit `return` statement (returns `undefined`, rejecting all items).
  - Solved it using concise implicit returns: `filter(item => item.name.toLowerCase().includes(query))`.
- **`.toLowerCase()` vs Searching**: Learned that `.toLowerCase()` only transforms casing and does not search; it must be paired with `.includes()`.
- **Exact Matching with `.find()`**: Because search APIs often return multiple partial matches (e.g. searching `"India"` also returns `"Bhutan"` and `"British Indian Ocean Territory"` due to shared currency names or regions), learned how to extract the exact match using JavaScript's `.find()`.

### 3. URL Encoding & Safe Query Strings
- **`encodeURIComponent()`**: Learned how spaces (`"United States"` $\rightarrow$ `"United%20States"`) and characters like `&` (`"Trinidad & Tobago"`) break raw URLs and API requests without proper encoding.
- **Reading Query Parameters**: Extracted dynamic URL parameters using `new URLSearchParams(location.search).get("name")`.

### 4. Working with Complex API Data Structures
- **Extracting Values with Dynamic Keys**: Learned how to handle API objects where keys are dynamic language codes (e.g. `"deu"`, `"fra"`, `"hin"`) using `Object.values(...)`:
  ```javascript
  Object.values(countryData.names?.native || {})[0]?.common || "N/A"
  ```
- **Optional Chaining (`?.`) & Fallbacks (`||`)**: Guarded against null or missing data fields across various countries so the application never crashes.
- **Mapping Array of Objects**: Correctly mapped and joined array structures (capitals, currencies, and languages) to render clean comma-separated lists.

### 5. Modern CSS Architecture
- **CSS Grid vs Flexbox**: Implemented responsive grids with `grid-template-columns: repeat(auto-fill, minmax(265px, 1fr))` to prevent awkward empty spaces on the final row.
- **Design Tokens with CSS Variables**: Structured theme variables for background, surfaces, text, borders, and shadows to enable instant theme switching.
- **Pure CSS Column Wrapping**: Formatted a flat list of `<p>` tags into two balanced columns using `display: flex; flex-direction: column; max-height: 240px; flex-wrap: wrap;` without altering JSX markup.

---

##  Project Structure

```text
countries/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CountriesList.jsx      # Grid view of all countries
│   │   ├── CountryCard.jsx        # Individual country preview card
│   │   ├── CountryDetail.jsx      # Full details page for a country
│   │   ├── Header.jsx             # Top bar & Light/Dark mode switcher
│   │   ├── Home.jsx               # Main page layout (Search + Filter + List)
│   │   ├── SearchBar.jsx          # Search input component
│   │   ├── SelectMenu.jsx         # Region filter dropdown
│   │   └── Error.jsx              # Error route component
│   ├── App.css                    # Component and page styles
│   ├── index.css                  # Global styles, variables & resets
│   ├── App.jsx                    # Root layout with <Outlet />
│   └── main.jsx                   # Router setup and entry point
├── index.html
├── package.json
└── README.md
```

---

##  Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd countries
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

- **Frontend**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: Pure modern CSS3 (CSS Variables, Grid, Flexbox, Glassmorphism)
- **Icons**: [Font Awesome 6](https://fontawesome.com/)
- **Font**: Google Fonts ([Nunito](https://fonts.google.com/specimen/Nunito))
- **Data Source**: [REST Countries API](https://restcountries.com/)

---

##  What I Learned in This Project

### 1. React Fundamentals & State Flow
- **Lifting State Up**: Passed search state from `SearchBar` up to `App` / `Home` to synchronize filtering across `CountriesList`.
- **Data Fetching with `useEffect`**: Handled asynchronous API calls using `async/await` inside `useEffect` and cleaned up data flow.
- **Handling Asynchronous Render States**: Learned why rendering `countryData.flag.url_svg` on the initial mount crashes when state starts as `undefined`, and how to implement a loading guard before rendering.

### 2. JavaScript Array Methods & Searching
- **Arrow Functions & Implicit Returns in `.filter()`**:
  - Understood why `{ country.name.includes(...) }` fails without an explicit `return` statement (returns `undefined`, rejecting all items).
  - Solved it using concise implicit returns: `filter(item => item.name.toLowerCase().includes(query))`.
- **`.toLowerCase()` vs Searching**: Learned that `.toLowerCase()` only transforms casing and does not search; it must be paired with `.includes()`.
- **Exact Matching with `.find()`**: Because search APIs often return multiple partial matches (e.g. searching `"India"` also returns `"Bhutan"` and `"British Indian Ocean Territory"` due to shared currency names or regions), learned how to extract the exact match using JavaScript's `.find()`.

### 3. URL Encoding & Safe Query Strings
- **`encodeURIComponent()`**: Learned how spaces (`"United States"` $\rightarrow$ `"United%20States"`) and characters like `&` (`"Trinidad & Tobago"`) break raw URLs and API requests without proper encoding.
- **Reading Query Parameters**: Extracted dynamic URL parameters using `new URLSearchParams(location.search).get("name")`.

### 4. Working with Complex API Data Structures
- **Extracting Values with Dynamic Keys**: Learned how to handle API objects where keys are dynamic language codes (e.g. `"deu"`, `"fra"`, `"hin"`) using `Object.values(...)`:
  ```javascript
  Object.values(countryData.names?.native || {})[0]?.common || "N/A"
  ```
- **Optional Chaining (`?.`) & Fallbacks (`||`)**: Guarded against null or missing data fields across various countries so the application never crashes.
- **Mapping Array of Objects**: Correctly mapped and joined array structures (capitals, currencies, and languages) to render clean comma-separated lists.

### 5. Modern CSS Architecture
- **CSS Grid vs Flexbox**: Implemented responsive grids with `grid-template-columns: repeat(auto-fill, minmax(265px, 1fr))` to prevent awkward empty spaces on the final row.
- **Design Tokens with CSS Variables**: Structured theme variables for background, surfaces, text, borders, and shadows to enable instant theme switching.
- **Pure CSS Column Wrapping**: Formatted a flat list of `<p>` tags into two balanced columns using `display: flex; flex-direction: column; max-height: 240px; flex-wrap: wrap;` without altering JSX markup.

---



##  Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd countries
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

