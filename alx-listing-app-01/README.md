# The project title: ALX Listing App

## Project: Vacation Rental Listing Page (Airbnb Clone)

## Description:

This project is a responsive vacation rental listing page inspired by Airbnb, designed to showcase properties with interactive UI components. Users can browse property cards, view details, and take actions like booking or saving favorites.

## Key Features & Goals:

- Property Listings Grid

Display property cards with images, titles, prices, and ratings.

Responsive layout (mobile, tablet, desktop).

- Interactive UI Components

Reusable Button for actions (Book Now, Save, Details).

Card components for property listings.

Filtering & sorting options (price, ratings, amenities).

- Modern Styling & Theming

Consistent design system (colors, spacing, typography).

Dark/light mode support (via THEME constants).

- Mock API Integration

Fetch property data from a mock API (using API_CONFIG constants).

Simulate loading states and error handling.

- User Experience (UX)

Smooth hover/focus states for buttons and cards.

Loading spinners for async actions.

## Tech Stack

Frontend: React + TypeScript

Styling: Tailwind CSS (or CSS Modules)

State Management: Context API / Redux (optional)

Build Tool: Next.js

# Example Use Case

tsx
// Sample usage in a property listing page
<Card
title="Beachfront Villa"
price="$200/night"
rating={4.9}
image="/villa.jpg"

> <Button

    label="Book Now"
    variant="primary"
    onClick={handleBooking}

/>
</Card>

# Project Structure Overview

This Airbnb-inspired Vacation Rental Listing Page follows a modular structure for scalability and maintainability. Here’s a breakdown of key directories and their purposes:

1. components/
   Purpose: Reusable UI building blocks.

## Subdirectories:

**common/**

Shared components like Button, Card, Header, etc.

Example: Button.tsx handles all clickable actions ("Book Now", "Save").

property/ (optional)

Domain-specific components (e.g., PropertyCard, AmenitiesList).

**Why?**

Promotes consistency (e.g., all buttons use the same ButtonProps).

Easy to update or extend UI elements globally.

2. interfaces/
   Purpose: TypeScript type definitions for data shapes and props.

**Key Files:**

index.ts: Centralizes interfaces (e.g., CardProps, Property).

**Example:**

ts
export interface Property {
id: string;
title: string;
price: number;
rating: number;
imageUrl: string;
}

**Why?**

Type safety for props, API responses, and state.

Autocompletion and error prevention in IDEs.

3. constants/
   Purpose: Hardcoded values and configurations.

**Key Files:**

index.ts: Stores:

API URLs (e.g., API_CONFIG.BASE_URL).

UI Text (e.g., UI_TEXT.BUTTONS.SUBMIT = "Book Now").

Theme values (colors, breakpoints).

**Why?**

Avoids "magic strings" scattered across components.

Simplifies updates (e.g., changing all button labels in one place).

4. public/assets/
   Purpose: Static files (images, fonts, icons).

**Structure:**

public/assets/images/: Property photos, logos.

public/assets/icons/: SVG icons (e.g., star ratings, heart for favorites).

**Why?**

Optimized for direct referencing in components (e.g., <img src="/assets/villa.jpg" />).

Bundled efficiently during build.

# Example Flow

- A PropertyCard (components/property/) uses:

Props defined in interfaces/.

Styles from constants/theme.

Images from public/assets/.

- Clicking its "Book Now" button triggers the reusable Button component.

# Why This Structure?

- Scalable: Easy to add new features (e.g., a FilterBar component).

- Maintainable: Clear separation of concerns.

- Team-Friendly: Predictable locations for assets/types.
