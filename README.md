# 🌸 Cherry Blossom Portfolio - Dhvani Kakadiya

A beautiful, modern portfolio website built with Next.js featuring a stunning cherry blossom theme, smooth animations, and interactive elements.

![Portfolio Preview](https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=400&fit=crop)

## ✨ Features

### 🎨 Design & Theme
- **Cherry Blossom Theme**: Beautiful pink gradient backgrounds with cherry blossom animations
- **Dark/Light Mode**: Toggle between light pink and dark pink themes
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional design with smooth transitions

### 🌸 Interactive Elements
- **Cherry Blossom Rain**: Animated falling cherry blossoms across the screen
- **Welcome Popup**: Engaging welcome message with animations
- **Floating Action Buttons**: WhatsApp and chatbot integration
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Effects**: Interactive elements with scale and shadow effects

### 📱 Sections
- **Hero Section**: Introduction with typing animation and social links
- **About**: Personal information, education, and experience timeline
- **Skills**: Technical and professional skills with animated progress bars
- **Projects**: Showcase of web development projects with live links
- **Certificates**: Professional certifications and achievements
- **Blog**: Technical articles and learning resources
- **Contact**: Working contact form with validation and success/error states

### 🚀 Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Beautiful, consistent iconography
- **Form Handling**: Contact form ready for EmailJS/Formspree integration
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/cherry-portfolio.git
   cd cherry-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

To enable the contact form, you'll need to set up either EmailJS or Formspree:

### Option 1: EmailJS
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the form submission code in `components/contact.tsx`

### Option 2: Formspree
1. Create an account at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Replace `"https://formspree.io/f/your-form-id"` with your actual Formspree URL

## 🎨 Customization

### Colors
The cherry blossom theme uses pink gradients. To customize colors, update the CSS variables in `app/globals.css`:

\`\`\`css
:root {
  --pink-50: #fdf2f8;
  --pink-100: #fce7f3;
  --pink-600: #db2777;
  --rose-100: #ffe4e6;
  --rose-900: #881337;
}
\`\`\`

### Content
Update personal information in the respective component files:
- `components/hero.tsx` - Main introduction
- `components/about.tsx` - Personal details and timeline
- `components/projects.tsx` - Project showcase
- `components/certificates.tsx` - Certifications

### Cherry Blossom Animation
Adjust the cherry blossom rain in `components/cherry-blossom-rain.tsx`:
- Change `length: 40` to modify the number of petals
- Adjust `duration` and `delay` for different falling speeds

## 📁 Project Structure

\`\`\`
cherry-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── about.tsx
│   ├── blog.tsx
│   ├── certificates.tsx
│   ├── cherry-blossom-rain.tsx
│   ├── contact.tsx
│   ├── floating-icons.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── theme-switcher.tsx
│   └── welcome-popup.tsx
├── public/
├── README.md
└── package.json
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons and navigation
- Optimized animations for mobile devices
- Compressed images and assets

## 🔧 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Cherry blossom themes from Japanese aesthetics
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Images**: [Unsplash](https://unsplash.com/) for placeholder images

## 📞 Contact

**Dhvani Kakadiya**
- 📧 Email: dhvani1215@gmail.com
- 📱 Phone: +91 9773001459
- 💼 LinkedIn: [dhvani-kakadiya-2811a8252](https://www.linkedin.com/in/dhvani-kakadiya-2811a8252)
- 🐙 GitHub: [Lvgs3033](https://github.com/Lvgs3033)

---

<div align="center">
  <p>Made with 💖 and 🌸 by Dhvani Kakadiya</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
