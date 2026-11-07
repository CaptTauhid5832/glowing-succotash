# glowing-succotash
e-plantShopping
# TravelBloom 🌍

A responsive travel recommendation website that helps users discover beaches, temples and cities around the world. Users type a keyword into the search bar and instantly get recommendations with photos and descriptions, loaded dynamically from a JSON data file.

**Live demo:** https://capttauhid5832.github.io/Teavel-Bloom/

Built as the final project for the **JavaScript Essentials** course (IBM / Coursera).

---

## Features

- **Keyword search:** type `beach`, `temple` or `country` (any form, any capitalization, e.g. `Beaches`, `TEMPLE`, `countries`) to see matching recommendations.
- **Country search:** type a country name such as `Japan`, `Australia` or `Brazil` to see its cities.
- **Dynamic results:** recommendations are fetched with the Fetch API and rendered into the page with DOM manipulation.
- **Clear button:** resets the search box and removes the results.
- **Enter key support:** press Enter to search without clicking.
- **Error handling:** friendly messages for empty searches, no matches or failed data loading.
- **Multi-page layout:** Home, About Us and Contact Us pages with a shared navigation bar.
- **Contact form:** name, email and message fields with built-in validation.
- **Responsive design:** works on desktop, tablet and mobile.

## Tech Stack

| Technology | Used for |
|---|---|
| HTML5 | Page structure and semantic layout |
| CSS3 | Styling, Flexbox/Grid layout, responsive design |
| JavaScript (ES6+) | Search logic, async/await, Fetch API, DOM manipulation, events |
| JSON | Destination data source |
| GitHub Pages | Hosting and deployment |

## Project Structure

```
├── index.html                       # Home page with navbar, search and results
├── about_us.html                    # Company info and team guidelines
├── contact_us.html                  # Contact details and message form
├── style.css                        # Styles for all pages
├── travel_recommendation.js         # Fetch, search, display and clear logic
├── travel_recommendation_api.json   # Destination data (countries, temples, beaches)
└── images/                          # Destination and background photos
```

## How It Works

1. When the user clicks **Search**, the keyword is trimmed and converted to lowercase.
2. The app fetches `travel_recommendation_api.json` once and caches the result.
3. The keyword is matched against categories:
   - starts with `beach` → beaches
   - starts with `temple` → temples
   - starts with `countr` → all cities of all countries
   - exact country name → that country's cities
4. Each match is rendered as a card with an image, name, description and a Visit button.
5. **Clear** empties the input and the results area.

## Run Locally

The Fetch API can't load local JSON when a file is opened directly (`file://`), so run it through a local server:

```bash
git clone https://github.com/CaptTauhid5832/Teavel-Bloom.git
cd Teavel-Bloom
```

Then either:
- open the folder in VS Code and use the **Live Server** extension, or
- run `python3 -m http.server 8000` and visit `http://localhost:8000`

## What I Learned

- Structuring a multi-page website with reusable navigation
- Fetching and processing JSON data with `async`/`await`
- Building UI dynamically with DOM manipulation
- Handling user events and input normalization
- Deploying a static site with GitHub Pages

## Image Credits

Destination photos are from [Unsplash](https://unsplash.com), used under the Unsplash License.

## Author

**Tauhid** · GitHub: [@CaptTauhid5832](https://github.com/CaptTauhid5832)
