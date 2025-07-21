# Dr. Weronika Kozubek - Professional CV Website

A modern, responsive CV website showcasing Dr. Weronika Kozubek's expertise in dental and aesthetic medicine.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Loading**: Built with Vite for optimal performance
- **Accessible**: Following web accessibility best practices
- **SEO Optimized**: Structured for search engines

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Package Manager**: Bun
- **Deployment**: GitHub Pages
- **Fonts**: Inter (Google Fonts)

## 📱 Sections

1. **Hero Section**: Introduction with professional photo placeholder
2. **Professional Summary**: Career overview and objectives
3. **Education**: Academic qualifications and certifications
4. **Clinical Experience**: Detailed work history and responsibilities
5. **Skills & Expertise**: Technical and soft skills showcase
6. **Professional Development**: Courses, affiliations, and conferences
7. **Languages & Awards**: Multilingual abilities and recognition
8. **Contact**: Professional contact information

## 🎨 Design Features

- **Color Scheme**: Professional blue and white palette
- **Typography**: Inter font family for excellent readability
- **Animations**: Smooth scroll animations using Intersection Observer
- **Hover Effects**: Interactive elements with subtle transitions
- **Mobile Navigation**: Responsive navigation for all screen sizes

## 💼 Professional Highlights

- **General Dentistry**: Comprehensive dental procedures and patient care
- **Aesthetic Medicine**: Specialized in Botox, fillers, and cosmetic treatments
- **Pediatric Dentistry**: Experience with young patients and specialized care
- **Technology**: Proficient in modern dental technology and digital workflows
- **Languages**: Native Polish, C2 English, B1/B2 German

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (latest version)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wera-cv
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
bun run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
bun run preview
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. 

### Setup for GitHub Pages:

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on push to main branch

### Manual Deployment:

```bash
bun run build
# Upload the contents of the 'dist' folder to your web server
```

## 📁 Project Structure

```
wera-cv/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── vite.svg               # Favicon
├── src/
│   ├── main.js                # Main application logic
│   └── style.css              # Tailwind CSS and custom styles
├── index.html                 # Main HTML file
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## 🎯 Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Minification**: CSS and JS are minified in production
- **Tree Shaking**: Unused code is removed
- **Modern Fonts**: Optimized font loading with Google Fonts
- **Efficient Animations**: CSS transforms and GPU acceleration

## 📧 Contact

**Dr. Weronika Kozubek**
- Email: weronikakozubek@onet.eu
- Location: Gdańsk, Poland
- Specializations: General Dentistry, Aesthetic Medicine

## 📄 License

This project is created for professional use. All rights reserved.

---

*Built with ❤️ using modern web technologies*
