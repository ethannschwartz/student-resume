# Nuxt Template App

Welcome to my Nuxt Template App! This project is a template for creating applications using Nuxt 3, TailwindCSS, NuxtUI, Sitemap.xml, Animate on Scroll (AOS), and vue3-carousel-nuxt. It is also configured for dark mode with TailwindCSS.

## Features

- **Nuxt 3**: The latest version of the Nuxt.js framework.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **NuxtUI**: A set of UI components for Nuxt.
- **Sitemap.xml**: Automatically generate a sitemap for your application.
- **Animate on Scroll (AOS)**: Add animations to your scroll events.
- **vue3-carousel-nuxt**: A flexible and responsive carousel for Vue 3.
- **Dark Mode**: Configured for dark mode using TailwindCSS.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ethannschwartz/nuxt-template-app.git

2. Navigate to the project directory:

    ```bash
    cd nuxt-template-app

3. Install the dependencies:
    ```bash
    npm install

## Running the Development Server
Start the development server with the following command:

   ```bash
   npm run dev
   ```

Open your browser and navigate to http://localhost:3000 to see the application in action.

## Building for Production
To build the application for production, use the following command:

```bash
npm run build
```

The compiled files will be located in the dist directory.

Deployment
After building the application, you can deploy the contents of the dist directory to your preferred hosting provider.

# Configuration
## TailwindCSS
TailwindCSS is configured in the `tailwind.config.js` file. You can customize the theme, extend it, or add new plugins as needed.

## NuxtUI
NuxtUI components can be used throughout your application. Refer to the NuxtUI documentation for more information on how to use these components.

## Sitemap.xml
The sitemap configuration is located in the `nuxt.config.js` file. You can customize the routes and other settings as needed.

## Animate on Scroll (AOS)
AOS is configured in the `nuxt.config.js` file. You can customize the animations and other settings as needed. To use AOS in your components, add the appropriate data-aos attributes to your HTML elements.

## vue3-carousel-nuxt
To use the carousel component, import it in your components or pages and use it as shown in the vue3-carousel documentation.

## Dark Mode
Dark mode is enabled using TailwindCSS. You can customize the dark mode settings in the `tailwind.config.js` file.

### License
This project is licensed under the `MIT License`. See the LICENSE file for details.

### Acknowledgements:
- Nuxt 3
- TailwindCSS
- NuxtUI
- AOS
- vue3-carousel