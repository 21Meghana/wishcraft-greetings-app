# 🎴 WishCraft — Custom Greetings App

> A personalized greeting card application built with **React JS** that lets users create and share custom greeting cards with their name and profile photo overlaid on beautiful templates.

---

## 📸 App Preview

| Login Screen | Home Feed | Card Preview | Premium Popup |
|---|---|---|---|
| User enters name & uploads photo | Browse free & premium templates | Live name + photo overlay | Subscription upsell flow |

---

## ✨ Features

- 🔐 **User Login / Guest Entry** — Enter your name and upload a profile picture to get started
- 🖼️ **Upload Profile Picture** — Profile photo is stored and displayed on all greeting cards
- 🎨 **Personalized Greeting Templates** — Browse categorized templates (Birthday, Anniversary, Festivals, Shayari & more)
- 👤 **Live Name & Photo Overlay** — Your name and photo are automatically composed onto every template
- 👑 **Premium Template Popup** — Clicking a locked template triggers a subscription upsell popup
- 📥 **Download Greeting Cards** — Export your personalized card as a downloadable image
- 📱 **Responsive UI Design** — Works seamlessly on mobile and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React JS |
| Routing | React Router DOM |
| Image Export | html2canvas |
| Styling | CSS |
| State / Storage | localStorage |

---

## 📁 Folder Structure

```
src
│
├── assets/              # Images, icons, and static files
├── components/          # Reusable React components (TemplateCard, PremiumPopup, etc.)
├── data/                # Template data (categories, image URLs, free/premium flags)
├── pages/               # Page-level components (Login, Home, CardPreview)
├── styles/              # CSS stylesheets
├── App.js               # Root component with routing
└── index.js             # React entry point
```

---

## 🚀 Installation & Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (comes with Node.js)

### Step 1 — Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### Step 2 — Navigate to the Project Directory

```bash
cd greetings-app
```

### Step 3 — Install Dependencies

```bash
npm install
```

### Step 4 — Start the Development Server

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 📱 App Screens

### 1. Login Screen
- User enters their display name
- User uploads a profile picture
- Data is saved to `localStorage` for persistence across sessions

### 2. Home Screen
- Greeting templates displayed in a responsive grid layout
- Templates are categorized (Birthday, Anniversary, Festivals, Shayari, etc.)
- User's name and photo are automatically overlaid on each template card
- Free templates are accessible; Premium templates show a lock badge

### 3. Card Preview & Personalization
- Full-size preview of the selected template with live overlay
- User name and profile photo are composited onto the card
- Download button captures the card using `html2canvas` and saves it as an image

### 4. Premium Subscription Popup
- Triggered when a user clicks a premium (locked) template
- Displays subscription plans and feature highlights
- Prompts the user to upgrade to unlock all templates

---

## ⚙️ How It Works

### Image Overlay Logic
The user's name and profile picture are stored in `localStorage` upon login. On the Home screen and Card Preview, these values are read and rendered as absolute-positioned overlay elements on top of the template image using CSS `position: relative/absolute`. This creates the appearance of a composed, personalized card without requiring any server-side processing.

### Download Functionality
When the user clicks **Download**, the `html2canvas` library captures the greeting card DOM element (template background + name + photo overlay) and converts it into a Canvas object, which is then exported as a `.png` image file.

### Template Rendering
Templates are defined in a `data/` file as an array of objects containing the image URL, category, and a `isPremium` boolean flag. The Home screen maps over this array to render cards dynamically.

---

## 🧱 Challenges Faced

| Challenge | Solution |
|---|---|
| React Router setup & navigation | Configured `BrowserRouter` with nested route structure |
| Dynamic image overlay positioning | Used CSS `position: absolute` within a `position: relative` container |
| Handling uploaded images | Used `FileReader` API to convert uploaded file to a base64 data URL |
| Exporting card as downloadable image | Used `html2canvas` to capture the composed card DOM node |

---

## 🔮 Future Improvements

- [ ] 🔥 Firebase Authentication (real Google Login)
- [ ] 💳 Payment Gateway Integration (Razorpay / Stripe)
- [ ] 📲 WhatsApp Direct Share via Web Share API
- [ ] ☁️ Cloud Storage for user-uploaded photos (Firebase Storage)
- [ ] 🖼️ More Premium Templates (500+ cards)
- [ ] 🌐 Multi-language Support (Hindi, Urdu, Tamil, etc.)
- [ ] 📊 Admin Dashboard for template management

---

## 🎬 Demo

| Resource | Link |
|---|---|

| 💻 GitHub Repository | [View Source Code](https://github.com/21Meghana/wishcraft-greetings-app) |

---

## 👩‍💻 Author

**Meghana**
B.Tech CSE Student · React JS Enthusiast · Frontend Developer

---


