import "./style.css";
import cvHtml from "./main.html?raw";

// Main CV content and structure
const app = document.querySelector("#app");
app.innerHTML = cvHtml;

// Enhanced JavaScript functionality
function initializeWebsite() {
	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});

	// Enhanced scroll animations with stagger effect
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry, index) => {
			if (entry.isIntersecting) {
				setTimeout(() => {
					entry.target.classList.add("visible");
				}, index * 100); // Stagger animation
			}
		});
	}, observerOptions);

	// Observe all elements with scroll-fade-in class
	document.querySelectorAll(".scroll-fade-in").forEach((el) => {
		observer.observe(el);
	});

	// Enhanced mobile menu functionality
	createMobileMenu();

	// Add collapsing title effect
	addCollapsingTitleEffect();

	// Add parallax scroll effect
	addParallaxScrollEffect();

	// Add skill progress bar animations
	addSkillProgressBars();

	// Add page loading animation
	addLoadingAnimation();

	// Add contact form functionality
	enhanceContactSection();

	// Add print functionality
	addPrintFunctionality();

	// Initialize language system
	initializeLanguageSystem();
}

function createMobileMenu() {
	const nav = document.querySelector("nav .flex");
	const navLinks = document.querySelector("nav .hidden.md\\:flex");

	// Check if mobile menu button already exists
	if (document.querySelector("[aria-label='Toggle mobile menu']")) {
		return; // Exit if mobile menu already exists
	}

	// Create mobile language toggle (for navbar)
	const mobileLangToggle = document.createElement("div");
	mobileLangToggle.className = "md:hidden language-toggle-mobile flex items-center bg-gray-100 rounded-full p-1 mr-2";
	mobileLangToggle.innerHTML = `
		<button id="mobile-lang-en" class="flex items-center px-2 py-1 rounded-full transition-all duration-200 text-sm font-medium">
			🇬🇧 EN
		</button>
		<button id="mobile-lang-de" class="flex items-center px-2 py-1 rounded-full transition-all duration-200 text-sm font-medium">
			🇩🇪 DE
		</button>
	`;

	// Create mobile menu button
	const mobileMenuBtn = document.createElement("button");
	mobileMenuBtn.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  `;
	mobileMenuBtn.className = "md:hidden text-blue-900 p-2";
	mobileMenuBtn.setAttribute("aria-label", "Toggle mobile menu");

	// Create mobile menu overlay
	const mobileMenu = document.createElement("div");
	mobileMenu.className =
		"fixed inset-0 bg-white z-40 transform -translate-x-full transition-transform duration-300 md:hidden";
	mobileMenu.innerHTML = `
    <div class="flex flex-col p-6 space-y-6">
      <div class="flex justify-end items-center">
        <button class="text-gray-600 text-2xl" id="close-mobile-menu">&times;</button>
      </div>
      <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors text-lg" data-en="About" data-de="Über mich">About</a>
      <a href="#education" class="text-gray-600 hover:text-blue-600 transition-colors text-lg" data-en="Education" data-de="Bildung">Education</a>
      <a href="#experience" class="text-gray-600 hover:text-blue-600 transition-colors text-lg" data-en="Experience" data-de="Erfahrung">Experience</a>
      <a href="#skills" class="text-gray-600 hover:text-blue-600 transition-colors text-lg" data-en="Skills" data-de="Fähigkeiten">Skills</a>
      <a href="#contact" class="text-gray-600 hover:text-blue-600 transition-colors text-lg" data-en="Contact" data-de="Kontakt">Contact</a>
    </div>
  `;

	document.body.appendChild(mobileMenu);
	nav.appendChild(mobileLangToggle);
	nav.appendChild(mobileMenuBtn);

	// Mobile menu toggle functionality
	mobileMenuBtn.addEventListener("click", () => {
		mobileMenu.classList.remove("-translate-x-full");
	});

	document.getElementById("close-mobile-menu").addEventListener("click", () => {
		mobileMenu.classList.add("-translate-x-full");
	});

	// Close mobile menu when clicking on links
	mobileMenu.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			mobileMenu.classList.add("-translate-x-full");
		});
	});
}

function addCollapsingTitleEffect() {
	const navTitle = document.querySelector("#nav-title");
	const heroTitle = document.querySelector("#hero-title");
	const navbar = document.querySelector("#navbar");

	if (!navTitle || !heroTitle || !navbar) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Hero title is visible, hide nav title
					navTitle.style.opacity = "0";
					navTitle.style.transform = "translateY(-8px)";
					navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
				} else {
					// Hero title is not visible, show nav title
					navTitle.style.opacity = "1";
					navTitle.style.transform = "translateY(0)";
					navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: "-80px 0px 0px 0px",
		},
	);

	observer.observe(heroTitle);
}

function addParallaxScrollEffect() {
	const parallaxBg = document.querySelector("#parallax-bg");

	if (!parallaxBg) return;

	let ticking = false;

	function updateParallax() {
		const scrolled = window.pageYOffset;
		const rate = scrolled * -0.5;

		parallaxBg.style.transform = `translate3d(0, ${rate}px, 0)`;
		ticking = false;
	}

	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(updateParallax);
			ticking = true;
		}
	}

	window.addEventListener("scroll", requestTick);
}

function addSkillProgressBars() {
	// This could be enhanced with actual progress bars for technical skills
	const skillCards = document.querySelectorAll("#skills .bg-white");
	skillCards.forEach((card, index) => {
		card.addEventListener("mouseenter", () => {
			card.style.transform = "scale(1.02)";
		});
		card.addEventListener("mouseleave", () => {
			card.style.transform = "scale(1)";
		});
	});
}

function addLoadingAnimation() {
	// Enhanced loading animation
	document.body.style.opacity = "0";
	document.body.style.transition = "opacity 0.8s ease-in-out";

	window.addEventListener("load", () => {
		setTimeout(() => {
			document.body.style.opacity = "1";
		}, 200);
	});
}

function enhanceContactSection() {
	// Add copy-to-clipboard functionality for email
	const emailElements = document.querySelectorAll('[href^="mailto:"]');
	emailElements.forEach((element) => {
		element.addEventListener("click", (e) => {
			e.preventDefault();
			const email = element.getAttribute("href").replace("mailto:", "");
			navigator.clipboard
				.writeText(email)
				.then(() => {
					showNotification("Email copied to clipboard!");
				})
				.catch(() => {
					// Fallback: open email client
					window.location.href = element.getAttribute("href");
				});
		});
	});

	// Add contact form if one exists
	const contactForm = document.querySelector("#contact-form");
	if (contactForm) {
		contactForm.addEventListener("submit", handleContactForm);
	}
}

function handleContactForm(e) {
	e.preventDefault();
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData);

	// Show loading state
	const submitBtn = e.target.querySelector('button[type="submit"]');
	const originalText = submitBtn.textContent;
	submitBtn.textContent = "Sending...";
	submitBtn.disabled = true;

	// Simulate form submission (replace with actual form handling)
	setTimeout(() => {
		showNotification(
			"Thank you for your message! I will get back to you soon.",
		);
		e.target.reset();
		submitBtn.textContent = originalText;
		submitBtn.disabled = false;
	}, 2000);
}

function addPrintFunctionality() {
	// Add print button functionality
	const printButtons = document.querySelectorAll('a[href="#"]');
	printButtons.forEach((button) => {
		if (button.textContent.includes("Download CV")) {
			button.addEventListener("click", (e) => {
				e.preventDefault();
				window.print();
			});
		}
	});
}

function showNotification(message) {
	const notification = document.createElement("div");
	notification.className =
		"fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg z-50 transform translate-x-full transition-transform duration-300";
	notification.textContent = message;

	document.body.appendChild(notification);

	setTimeout(() => {
		notification.classList.remove("translate-x-full");
	}, 100);

	setTimeout(() => {
		notification.classList.add("translate-x-full");
		setTimeout(() => {
			document.body.removeChild(notification);
		}, 300);
	}, 3000);
}

function initializeLanguageSystem() {
	// Detect browser language
	const browserLang = navigator.language.substring(0, 2);
	const defaultLang = browserLang === 'de' ? 'de' : 'en';
	
	// Set initial language
	let currentLang = localStorage.getItem('cv-language') || defaultLang;
	
	// Language toggle buttons
	const langEnBtn = document.getElementById('lang-en');
	const langDeBtn = document.getElementById('lang-de');
	const mobileLangEnBtn = document.getElementById('mobile-lang-en');
	const mobileLangDeBtn = document.getElementById('mobile-lang-de');
	
	// Update active language button
	function updateActiveLanguage(lang) {
		// Desktop buttons
		if (langEnBtn && langDeBtn) {
			langEnBtn.classList.remove('bg-blue-500', 'text-white');
			langDeBtn.classList.remove('bg-blue-500', 'text-white');
			langEnBtn.classList.add('text-gray-600');
			langDeBtn.classList.add('text-gray-600');
			
			if (lang === 'en') {
				langEnBtn.classList.add('bg-blue-500', 'text-white');
				langEnBtn.classList.remove('text-gray-600');
			} else {
				langDeBtn.classList.add('bg-blue-500', 'text-white');
				langDeBtn.classList.remove('text-gray-600');
			}
		}
		
		// Mobile buttons
		if (mobileLangEnBtn && mobileLangDeBtn) {
			mobileLangEnBtn.classList.remove('bg-blue-500', 'text-white');
			mobileLangDeBtn.classList.remove('bg-blue-500', 'text-white');
			mobileLangEnBtn.classList.add('text-gray-600');
			mobileLangDeBtn.classList.add('text-gray-600');
			
			if (lang === 'en') {
				mobileLangEnBtn.classList.add('bg-blue-500', 'text-white');
				mobileLangEnBtn.classList.remove('text-gray-600');
			} else {
				mobileLangDeBtn.classList.add('bg-blue-500', 'text-white');
				mobileLangDeBtn.classList.remove('text-gray-600');
			}
		}
	}
	
	// Switch language function
	function switchLanguage(lang) {
		currentLang = lang;
		localStorage.setItem('cv-language', lang);
		
		// Update all elements with data-en and data-de attributes
		document.querySelectorAll('[data-en][data-de]').forEach(element => {
			const translation = element.getAttribute(`data-${lang}`);
			if (translation) {
				element.textContent = translation;
			}
		});
		
		updateActiveLanguage(lang);
	}
	
	// Event listeners for language buttons
	if (langEnBtn) langEnBtn.addEventListener('click', () => switchLanguage('en'));
	if (langDeBtn) langDeBtn.addEventListener('click', () => switchLanguage('de'));
	if (mobileLangEnBtn) mobileLangEnBtn.addEventListener('click', () => switchLanguage('en'));
	if (mobileLangDeBtn) mobileLangDeBtn.addEventListener('click', () => switchLanguage('de'));
	
	// Initialize with current language
	switchLanguage(currentLang);
}

// Initialize the website when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeWebsite);

// Initialize immediately if DOM is already loaded
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initializeWebsite);
} else {
	initializeWebsite();
}
