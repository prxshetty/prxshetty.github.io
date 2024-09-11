# Pranam Shetty's Portfolio

This project is a personal portfolio website for Pranam Prakash Shetty, showcasing his projects, blog posts, academic journey, work experience, and recommendations.

## Features

- Responsive design with a sidebar and main content area
- Project showcase with image, description, and technologies used
- Blog post highlights with links to full articles
- Academic journey timeline
- Work experience details
- Scrolling recommendations section
- Skills and social media links

## Technologies Used

- Next.js
- React
- Tailwind CSS
- React-tooltip
- Font Awesome icons
- Google Fonts (Roboto Mono)

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pranam-shetty-portfolio.git
   ```

2. Install dependencies:
   ```
   cd pranam-shetty-portfolio
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Project Structure

- `src/app/page.tsx`: Main component containing the entire portfolio
- `public/images/`: Directory containing all images used in the portfolio
- `public/docs/`: Directory containing the resume PDF

## Customization

To customize the portfolio for your own use:

1. Update the personal information, projects, blog posts, academic history, and work experience in the data arrays at the top of `src/app/page.tsx`.
2. Replace the profile picture and project images in the `public/images/` directory.
3. Update the resume PDF in the `public/docs/` directory.
4. Modify the color scheme by changing the Tailwind CSS classes (e.g., `bg-[#592be2]` for the primary color).

## Deployment

This project can be easily deployed on Vercel or any other Next.js-compatible hosting platform.
