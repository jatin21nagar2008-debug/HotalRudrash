# Hotel Rudrash — Next-Gen 5-Star Luxury Hotel Website

A world-class, cinematic, high-end hospitality web application built for **Hotel Rudrash** using modern React.js, Vite, Framer Motion, and pure luxury CSS design system.

---

## 🌟 Visual Theme & Design Language

- **Obsidian & Royal Gold**: Tailored color palette featuring `#0B0C10`, `#12141C`, `#D4AF37`, `#F3E5AB`, and warm champagne accents.
- **Cinematic Photography**: Curated high-resolution imagery showcasing suites, royal lobbies, illuminated infinity pools, and gourmet gastronomy.
- **Micro-Animations & Smooth Motion**: Powered by Framer Motion for scroll reveals, interactive card lifts, ken-burns hero transitions, and responsive mobile drawers.
- **Glassmorphism**: Backdrop blur elements with subtle golden borders and ambient radial lighting.
- **Typography Hierarchy**: Elegant display serifs (*Playfair Display*, *Cormorant Garamond*) paired with crisp modern sans-serif (*Plus Jakarta Sans*).

---

## 🚀 Key Features & Interactive Modules

1. **Cinematic Hero Section**
   - Full-screen ambient visual carousel with smooth Ken Burns animation.
   - Luxury brand badge (*"5-Star Luxury Experience"*).
   - Headline: *"Experience Luxury. Feel at Home."*
   - Interactive buttons: *"Book Your Stay"* (smooth scroll) & *"Explore Rooms"*.
   - Elegant scroll indicator mouse animation.

2. **Interactive Room Booking Bar & Confirmation Modal**
   - Live date pickers for Check-In and Check-Out with intelligent date validation (preventing checkout prior to check-in).
   - Guest and Room count selectors.
   - Room category dropdown with live sample pricing.
   - **Frontend Demo Reservation Modal**: Instant calculation of nights, estimated sample totals with taxes, unique reservation ID (e.g. `RDR-84920`), and celebratory confetti celebration via `canvas-confetti`.

3. **Modern Sticky Navigation Bar**
   - Translucent glassmorphic header that transitions upon scrolling.
   - Brand monogram emblem with golden shimmer animation.
   - Navigation links with animated hover underlines.
   - Stylish responsive mobile slide-out drawer with quick concierge hotline.

4. **About Hotel Rudrash**
   - Split-layout showcase of hotel architecture and philosophy.
   - *"Where Comfort Meets Exceptional Hospitality"*.
   - Animated statistics cards displaying sample hospitality benchmarks (*98.8% Guest Satisfaction*, *65+ Luxury Suites*, *18+ Excellence Awards*, *24/7 Butler Care*).

5. **Accommodations & Signature Suites**
   - Category filtering (*All, Deluxe, Premium, Suites, Signature*).
   - Deluxe Room, Premium Room, Executive Suite, Luxury Family Suite, and Royal Presidential Suite.
   - Interactive **Room Details Modal** with multi-photo gallery viewer, occupancy, floor area, bedding specs, and complimentary inclusion tags.
   - 1-click *"Book Now"* integration that preselects the chosen room into the reservation engine.

6. **World-Class Amenities**
   - Interactive amenity cards with `lucide-react` icons (Wi-Fi, Fine Dining, 24/7 Room Service, Valet Parking, Climate Control, Family Accommodations, Concierge, Grand Ballroom, Heated Infinity Pool, Lotus Spa).
   - Expandable detail drawers for each facility.

7. **Epicurean Restaurant & Dining**
   - Highlights for *The Rudrash Pavilion* (Signature Fine Dining), *The Amber Lounge & Bar* (Craft Cocktails), and *The Terrace Alfresco Bistro*.
   - Interactive **À La Carte Menu Modal** with First Courses, Principal Mains, and Artisanal Desserts with dietary tags and demo pricing.
   - Demonstration table reservation inquiry action with instant confirmation feedback.

8. **Visual Media Gallery with Lightbox**
   - Categorized masonry grid (*All Photos, Rooms & Suites, Dining & Bars, Pool & Wellness, Architecture & Lobby*).
   - Full-screen Lightbox with Next, Previous, keyboard navigation (Left/Right arrows, Escape key), photo counter, and descriptions.

9. **Cherished Guest Testimonials**
   - 5-Star guest review carousel with guest avatar, reviewer title, stay type, and sample badges.
   - Auto-advance carousel with pause on hover and manual dot controls.

10. **Special Curated Offers**
    - High-value promotional cards (*Weekend Royal Escape, Romantic Luxury Sanctuary, Family Holiday Haven*).
    - Promo code badges with 1-click clipboard copy feature.

11. **Location & Concierge Desk**
    - Address, 24/7 phone hotline, electronic correspondence, and check-in/out hours.
    - Interactive inquiry form with live field validation and immediate feedback alert.
    - Google Maps preview card with *"Get Directions"* action.

12. **Luxury Footer**
    - Brand manifesto, navigation links, amenity shortcuts, newsletter subscription UI with instant validation, social media links, and smooth back-to-top button.

13. **Multi-Page Routing (React Router v7)**
    - `/` : Complete cinematic homepage experience.
    - `/rooms` : Expanded catalog with search input, category filters, and price range slider.
    - `/about` : Heritage, architectural story, hospitality pillars, and sustainability values.
    - `/dining` : In-depth culinary showcases, chef specials, and complete menu modal.
    - `/gallery` : Filterable visual media grid.
    - `/contact` : Concierge contact form, map preview, and interactive FAQ accordion.

---

## 🛠️ Project Structure

```
HotalRudrash/
├── index.html                  # HTML5 entry with Playfair Display & Cormorant Garamond Google Fonts
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Router, routing, modal orchestration & state
│   ├── App.css                 # Component luxury layout styling
│   ├── index.css               # Core design tokens, gradients, animations & utilities
│   ├── data/
│   │   └── hotelData.js        # Comprehensive content store (rooms, menus, gallery, FAQs)
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphism header & mobile drawer
│   │   ├── Hero.jsx            # Full-screen cinematic hero banner
│   │   ├── BookingForm.jsx     # Interactive reservation form with date validation
│   │   ├── BookingConfirmationModal.jsx # Celebration modal with confetti
│   │   ├── About.jsx           # Split-layout story & animated stats
│   │   ├── Rooms.jsx           # Room cards with category filter
│   │   ├── RoomDetailsModal.jsx # Expanded room specs & gallery modal
│   │   ├── Amenities.jsx       # Interactive amenity cards & expand drawer
│   │   ├── Dining.jsx          # Culinary venues & chef spotlight
│   │   ├── MenuModal.jsx       # Interactive menu drawer with dish categories
│   │   ├── Gallery.jsx         # Image grid & keyboard-enabled Lightbox
│   │   ├── Testimonials.jsx    # Guest reviews carousel
│   │   ├── Offers.jsx          # Promotional packages with promo codes
│   │   ├── Contact.jsx         # Contact form, validated fields & map preview
│   │   └── Footer.jsx          # Brand links, newsletter & social media
│   └── pages/
│       ├── Home.jsx            # All-in-one cinematic landing page
│       ├── RoomsPage.jsx       # Dedicated searchable rooms catalog
│       ├── AboutPage.jsx       # Dedicated heritage & architectural story
│       ├── DiningPage.jsx      # Dedicated gastronomy & tasting menu
│       ├── GalleryPage.jsx     # Dedicated photography gallery
│       └── ContactPage.jsx     # Dedicated concierge contact & FAQ accordion
```

---

## 💻 Installation & Running Locally

### 1. Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm (Node Package Manager)

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
This generates an optimized production bundle in the `dist/` folder ready for deployment on Vercel, Netlify, Cloudflare Pages, or AWS S3.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🔒 Demo Notice & Ethics Compliance
All room rates, guest reviews, promotional discounts, and operational statistics displayed on this website are designed for **demonstration and presentation purposes**. The booking system operates as an interactive frontend showcase without processing real financial transactions or altering live hotel inventory.
"# HotalRudrash" 
