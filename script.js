/**
 * ==============================================================================
 * SHAURYA VISION - OFFICIAL CLIENT JAVASCRIPT
 * Tagline: "Learn Today. Lead Tomorrow."
 * Description: Vanilla JS logic for animations, filtering, slider, modals,
 *              scrollspy, form validation, and interactive canvas particles.
 * ==============================================================================
 */

'use strict';

/* ==============================================================================
   EDIT THESE DETAILS (EASY CONTENT CUSTOMIZATION)
   Modify the values below to update institute contact info, courses, and stats
   ============================================================================== */
const INSTITUTE_CONFIG = {
  name: "Shaurya Vision",
  tagline: "Learn Today. Lead Tomorrow.",
  phone: "+91 9580672702",
  phoneRaw: "919580672702",
  email: "shauryavision20@gmail.com",
  address: "Amroha, Uttar Pradesh, India",
  openingHours: "Mon - Sat: 8:00 AM - 7:00 PM (Sunday Closed / Special Batches)",
  whatsappNumber: "919580672702",
  
  // Social Media Links
  social: {
    facebook: "https://facebook.com/shauryavision",
    instagram: "https://instagram.com/shauryavision",
    youtube: "https://youtube.com/@shauryavision",
    linkedin: "https://linkedin.com/company/shauryavision",
    whatsapp: "https://wa.me/919580672702"
  },

  // Key Statistics Targets (Triggered on Scroll)
  stats: {
    students: 500,
    courses: 25,
    products: 15,
    practicalRatio: 100
  },

  // Course Details Database for the Interactive Modal
  courseDatabase: {
    'java': {
      title: "Java Full-Stack Development",
      category: "Programming & Apps / Professional",
      duration: "4 - 6 Months",
      level: "Intermediate to Advanced",
      desc: "Complete enterprise Java curriculum from object-oriented programming to Spring Boot microservices, Hibernate ORM, and database integration.",
      syllabus: [
        "Core Java (OOPs, Polymorphism, Inheritance, Interfaces)",
        "Collections Framework, Generics & Java 8 Streams API",
        "Multithreading, Exception Handling & File I/O",
        "Relational Databases, SQL & JDBC Connectivity",
        "Spring Boot, Dependency Injection & RESTful APIs",
        "Hibernate / JPA ORM & Microservices Architecture"
      ],
      career: "Prepares students for roles such as Java Developer, Backend Engineer, Full-Stack Software Developer, and Enterprise Systems Associate."
    },
    'flutter': {
      title: "Flutter App Development",
      category: "Programming & Apps / Mobile",
      duration: "4 Months",
      level: "Intermediate",
      desc: "Master Google's Flutter framework and Dart programming to craft stunning, natively compiled mobile applications for iOS and Android with a single codebase.",
      syllabus: [
        "Dart Language Fundamentals, OOPs & Asynchronous Programming",
        "Flutter Widgets, Material & Cupertino Design Systems",
        "State Management with Provider and Bloc Pattern",
        "REST API Integration, JSON Parsing & HTTP Clients",
        "Firebase Authentication, Cloud Firestore & Push Notifications",
        "Play Store & App Store Build Preparation and Release"
      ],
      career: "Opens careers as Flutter Mobile App Developer, Cross-Platform Engineer, and Mobile UI Developer."
    },
    'android': {
      title: "Android App Development (Kotlin)",
      category: "Programming & Apps / Mobile",
      duration: "4 Months",
      level: "Intermediate",
      desc: "Learn modern native Android application development with Kotlin and Android Jetpack, following Google's official architectural guidelines.",
      syllabus: [
        "Kotlin Syntax, Null Safety, Coroutines & Flow",
        "Android Studio, Activities, Fragments & Navigation Component",
        "Jetpack Compose UI & Material 3 Design",
        "MVVM Architecture Pattern & ViewModel/LiveData",
        "Room Local SQLite Database & Retrofit Network Calling",
        "App Testing, Performance Profiling & Play Store Deployment"
      ],
      career: "Career pathways include Native Android Developer, Mobile Software Engineer, and Android App Architect."
    },
    'digital-marketing': {
      title: "Digital Marketing & SEO Growth",
      category: "Professional & Marketing",
      duration: "3 Months",
      level: "Beginner to Career Focused",
      desc: "Comprehensive practical training covering organic search rankings, paid ads, social media branding, content funnels, and web analytics.",
      syllabus: [
        "Search Engine Optimization (On-Page, Off-Page, Technical SEO)",
        "Google Ads (Search, Display, Video & Performance Max Campaigns)",
        "Social Media Marketing on Meta (Facebook & Instagram Ad Manager)",
        "Content Marketing, Copywriting & Email Automation",
        "Google Analytics 4 (GA4), Search Console & Conversion Tracking",
        "Freelancing, Client Pitching & Performance ROI Reporting"
      ],
      career: "Positions include SEO Specialist, Digital Marketing Manager, Performance Marketer, Social Media Strategist, and Growth Consultant."
    },
    'bcc': {
      title: "Basic Computer Course (BCC)",
      category: "IT & Computer",
      duration: "3 Months (Daily 1 Hr)",
      level: "Beginner",
      desc: "An essential foundational curriculum designed for learners stepping into digital computing. Covers hardware basics, typing mastery, Windows operating system, file management, internet operations, and email communication.",
      syllabus: [
        "Computer Fundamentals, Architecture & Peripheral Devices",
        "Operating Systems (Windows 10/11) & File Management",
        "Touch Typing in English & Hindi Speed Practice",
        "Internet Navigation, Cyber Safety & Cloud Storage Basics",
        "Digital Banking, Online Portals & Government E-services"
      ],
      career: "Prepares you for entry-level computer operator roles, front-office assistance, and general digital literacy for further specialized IT courses."
    },
    'web-design': {
      title: "Web Designing & UI Development",
      category: "IT & Computer / Professional",
      duration: "4 - 6 Months",
      level: "Beginner to Intermediate",
      desc: "Learn to design and develop stunning, responsive, and modern websites from scratch. Dive into semantic HTML5, modern CSS3 layout engines, Flexbox, Grid, JavaScript programming, DOM manipulation, and deploying real live sites.",
      syllabus: [
        "HTML5 Semantics, Audio/Video, Forms & Validation",
        "CSS3 Flexbox, CSS Grid, Transitions & Keyframe Animations",
        "Responsive Web Design for Mobile, Tablet & Desktop Displays",
        "JavaScript ES6+, DOM Manipulation, Events & Dynamic UI",
        "Git & GitHub Version Control & Live Website Hosting"
      ],
      career: "Equips students for roles such as Front-End Web Designer, UI Developer, Website Maintenance Executive, and freelance web creator."
    },
    'python': {
      title: "Python Programming & Logic",
      category: "IT & Computer / Programming",
      duration: "3 - 4 Months",
      level: "Intermediate",
      desc: "Master one of the world's most versatile and popular programming languages. Focuses on procedural programming, algorithmic problem solving, Object-Oriented Programming (OOP), file manipulation, and building practical software utilities.",
      syllabus: [
        "Python Syntax, Variables, Data Types & Operators",
        "Conditional Logic, While & For Loops, Pattern Programming",
        "Data Structures: Lists, Tuples, Dictionaries & Sets",
        "Modular Functions, Scope, Recursion & Built-in Modules",
        "Object-Oriented Programming (Classes, Objects, Inheritance)",
        "File I/O, Exception Handling & Real Mini Applications"
      ],
      career: "Ideal foundation for Software Developers, Python Programmers, Automation Script Engineers, and data analytics pathways."
    },
    'adv-excel': {
      title: "Advanced Excel & Analytics",
      category: "IT & Computer / Professional",
      duration: "2 Months",
      level: "Career Focused",
      desc: "A hands-on professional course for students and working professionals aiming to master data organization, complex business calculations, dynamic dashboards, and automated management reporting.",
      syllabus: [
        "Advanced Lookup Formulas (VLOOKUP, HLOOKUP, XLOOKUP, INDEX-MATCH)",
        "Logical & Conditional Calculations (IF, IFS, SUMIFS, COUNTIFS)",
        "Dynamic Pivot Tables, Slicers & Timelines",
        "Conditional Formatting, Data Validation & Duplicate Management",
        "Executive Dashboard Creation & Visual Reporting"
      ],
      career: "High demand in MIS Reporting, Data Entry Operations, Business Administration, Accounting Support, and Back-Office Operations."
    },
    'tally': {
      title: "Tally Prime with GST & Accounting",
      category: "IT & Computer / Financial",
      duration: "3 Months",
      level: "Industry Standard",
      desc: "Comprehensive practical training in computerized business accounting using the latest Tally Prime. Covers double-entry bookkeeping, inventory valuation, payroll generation, and statutory GST compliances.",
      syllabus: [
        "Accounting Concepts, Company Creation & Ledger Hierarchy",
        "Voucher Entry: Payment, Receipt, Sales, Purchase & Journal",
        "Inventory Management, Stock Items, Units of Measure & Godowns",
        "GST Implementation (CGST, SGST, IGST) & Tax Invoicing",
        "Bank Reconciliation (BRS), Profit & Loss, Balance Sheets"
      ],
      career: "Opens pathways for Junior Accountant, Tally Operator, Billing Executive, and Tax Filing Assistant across businesses."
    },
    'summer-bootcamp': {
      title: "Summer IT & Coding Bootcamp",
      category: "Seasonal / Summer",
      duration: "4 - 6 Weeks (Intensive)",
      level: "All Students",
      desc: "A fast-paced summer break accelerator that combines web design, digital creativity, and programming fundamentals with fun project-based challenges.",
      syllabus: [
        "Web Page Crafting with HTML & CSS",
        "Introductory Python Coding & Mini Games",
        "Digital Poster Design & Graphic Tools",
        "Speed Typing & Productivity Shortcuts",
        "End-of-Camp Capstone Project Presentation"
      ],
      career: "Enables school and college students to utilize holidays productively, creating a solid technical base and building confidence."
    },
    'winter-training': {
      title: "Winter Skill Enhancement Training",
      category: "Seasonal / Winter",
      duration: "4 Weeks (Fast-Track)",
      level: "Career Focused",
      desc: "Specialized winter training focused on corporate productivity, data handling, and career-oriented skill sharpening.",
      syllabus: [
        "Advanced Excel Masterclass & Spreadsheets",
        "Professional Email Writing & Digital Communication",
        "Python Data Scripting Fundamentals",
        "Resume Writing, Portfolio Presentation & Mock Interviews",
        "Certificate of Skill Completion"
      ],
      career: "Accelerates job-readiness, internship eligibility, and professional polish."
    },
    'school-cs': {
      title: "School Computer Science Foundation",
      category: "Academic Support",
      duration: "Term / Annual Coaching",
      level: "School Students",
      desc: "Targeted academic coaching aligned with school curricula (CBSE/ICSE/State Boards) combining exam preparation with practical lab practice.",
      syllabus: [
        "School Textbook Syllabus Chapter-by-Chapter",
        "Logic Building, Flowcharts & Pseudocode",
        "Hands-on Lab Assignments & Project Work",
        "Regular Weekly Tests & Doubt Clearing Sessions",
        "Board Exam Strategy & High-Scoring Tips"
      ],
      career: "Ensures top marks in school computer examinations and establishes early technical confidence."
    }
  }
};

/* ==============================================================================
   INITIALIZATION & DOM READY
   ============================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initSmoothScroll();
  initTechCanvas();
  initScrollReveal();
  initAnimatedCounters();
  initCourseFiltering();
  initCourseModals();
  initTestimonialSlider();
  initFaqAccordion();
  initBackToTop();
  initEnquiryFormValidation();
  initFastEnrollForm();
});

/* ==============================================================================
   1. STICKY HEADER & SCROLLSPY
   ============================================================================== */
function initStickyHeader() {
  const header = document.getElementById('mainHeader');
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links .mobile-link');

  window.addEventListener('scroll', () => {
    // Add shadow & frosted blur on scroll
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scrollspy to highlight active link
    let currentSectionId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });

      mobileLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });
}

/* ==============================================================================
   2. MOBILE DRAWER MENU
   ============================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileCloseBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  function openMenu() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* ==============================================================================
   3. SMOOTH SCROLLING FOR ALL INTERNAL LINKS
   ============================================================================== */
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==============================================================================
   4. TECH CANVAS PARTICLES BACKGROUND (HERO SECTION)
   ============================================================================== */
function initTechCanvas() {
  const canvas = document.getElementById('techCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width, height;
  let particles = [];
  const particleCount = 42;
  const maxDistance = 110;

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  function resizeCanvas() {
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        color: i % 2 === 0 ? 'rgba(0, 210, 255, 0.75)' : 'rgba(29, 78, 216, 0.65)'
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Draw faint connecting lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const opacity = (1 - dist / maxDistance) * 0.25;
          ctx.strokeStyle = `rgba(0, 210, 255, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  resizeCanvas();
  createParticles();
  animate();

  window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
  }, { passive: true });

  // Pause canvas when out of viewport to optimize CPU/battery performance
  const heroSection = document.getElementById('home');
  if ('IntersectionObserver' in window && heroSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          cancelAnimationFrame(animationFrameId);
        } else {
          cancelAnimationFrame(animationFrameId);
          animate();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(heroSection);
  }
}

/* ==============================================================================
   5. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ============================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-on-scroll-left, .reveal-on-scroll-right');

  if (!('IntersectionObserver' in window)) {
    // Fallback: immediately show elements
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ==============================================================================
   6. ANIMATED STATISTICS COUNTERS & SKILL PROGRESS BARS
   ============================================================================== */
function initAnimatedCounters() {
  // 1. Stats Numbers Counter
  const statsSection = document.getElementById('statsSection');
  const counters = document.querySelectorAll('.counter');
  let statsTriggered = false;

  function runCounters() {
    if (statsTriggered) return;
    statsTriggered = true;

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const duration = 1800; // ms
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current);
        }
      }, stepTime);
    });
  }

  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounters();
        statsObserver.unobserve(statsSection);
      }
    }, { threshold: 0.2 });
    statsObserver.observe(statsSection);
  } else {
    runCounters();
  }

  // 2. Career Skills Progress Bars
  const skillsWrap = document.getElementById('skillsProgressWrap');
  let skillsTriggered = false;

  function runSkillsBars() {
    if (skillsTriggered) return;
    skillsTriggered = true;

    const skillItems = document.querySelectorAll('.skill-bar-item');
    skillItems.forEach(item => {
      const fill = item.querySelector('.progress-fill');
      const percentEl = item.querySelector('.skill-percent');
      const targetWidth = fill ? fill.getAttribute('data-progress') : '0%';
      const targetVal = percentEl ? parseInt(percentEl.getAttribute('data-val'), 10) : 0;

      if (fill) fill.style.width = targetWidth;

      if (percentEl) {
        let curVal = 0;
        const duration = 1400;
        const steps = 40;
        const stepTime = duration / steps;
        const stepVal = targetVal / steps;

        const pTimer = setInterval(() => {
          curVal += stepVal;
          if (curVal >= targetVal) {
            percentEl.textContent = targetVal + '%';
            clearInterval(pTimer);
          } else {
            percentEl.textContent = Math.floor(curVal) + '%';
          }
        }, stepTime);
      }
    });
  }

  if (skillsWrap && 'IntersectionObserver' in window) {
    const skillsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runSkillsBars();
        skillsObserver.unobserve(skillsWrap);
      }
    }, { threshold: 0.25 });
    skillsObserver.observe(skillsWrap);
  } else {
    runSkillsBars();
  }
}

/* ==============================================================================
   7. COURSE CATEGORY FILTERING (VANILLA JS)
   ============================================================================== */
function initCourseFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('#coursesGrid .course-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        const match = filterValue === 'all' || categories.split(' ').includes(filterValue);

        if (match) {
          card.classList.remove('hide');
          card.classList.add('fade-in');
          setTimeout(() => card.classList.remove('fade-in'), 400);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ==============================================================================
   8. COURSE MODALS (DETAILS & FAST ENROLLMENT)
   ============================================================================== */
function initCourseModals() {
  const detailsModal = document.getElementById('courseDetailsModal');
  const enrollModal = document.getElementById('enrollModal');
  const closeBtns = document.querySelectorAll('[data-modal-close]');
  const modalBackdrops = document.querySelectorAll('.modal-backdrop');

  // Open Details Modal
  const viewDetailBtns = document.querySelectorAll('.view-details-btn');
  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseId = btn.getAttribute('data-course-id');
      const courseData = INSTITUTE_CONFIG.courseDatabase[courseId];

      if (courseData) {
        document.getElementById('modalCourseTitle').textContent = courseData.title;
        document.getElementById('modalCourseCategory').textContent = courseData.category;
        document.getElementById('modalCourseDesc').textContent = courseData.desc;
        document.getElementById('modalCourseDuration').textContent = courseData.duration;
        document.getElementById('modalCourseLevel').textContent = courseData.level;
        document.getElementById('modalCareerOutcomes').textContent = courseData.career;

        const syllabusList = document.getElementById('modalSyllabusList');
        syllabusList.innerHTML = '';
        courseData.syllabus.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<i class="fa-solid fa-check"></i> <span>${item}</span>`;
          syllabusList.appendChild(li);
        });

        // Set enroll button target
        const modalEnrollBtn = document.getElementById('modalEnrollBtn');
        modalEnrollBtn.onclick = () => {
          closeAllModals();
          openFastEnroll(courseData.title);
        };

        openModal(detailsModal);
      }
    });
  });

  // Open Enroll Modal from Any Button
  const enrollTriggers = document.querySelectorAll('.enroll-trigger-btn, .nav-enroll-btn');
  enrollTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseTitle = btn.getAttribute('data-course-title') || '';
      openFastEnroll(courseTitle);
    });
  });

  function openFastEnroll(courseTitle = '') {
    const courseSelect = document.getElementById('enrollCourseSelect');
    if (courseSelect && courseTitle) {
      // Find matching option
      let found = false;
      for (let i = 0; i < courseSelect.options.length; i++) {
        if (courseSelect.options[i].text.toLowerCase().includes(courseTitle.toLowerCase()) ||
            courseTitle.toLowerCase().includes(courseSelect.options[i].value.toLowerCase())) {
          courseSelect.selectedIndex = i;
          found = true;
          break;
        }
      }
      if (!found && courseSelect.options.length > 1) {
        courseSelect.selectedIndex = 1;
      }
    }
    openModal(enrollModal);
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    modalBackdrops.forEach(m => {
      m.classList.remove('open');
      m.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  modalBackdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

/* ==============================================================================
   9. STUDENT TESTIMONIALS SLIDER (VANILLA JS)
   ============================================================================== */
function initTestimonialSlider() {
  const slides = document.querySelectorAll('#testimonialTrack .testimonial-slide');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  const dotsContainer = document.getElementById('sliderDots');
  const sliderWrap = document.getElementById('testimonialSliderWrap');

  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoSlideTimer = null;
  const slideInterval = 5500; // 5.5 seconds

  // Generate Navigation Dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
    dot.addEventListener('click', () => {
      goToSlide(idx);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.slider-dot');

  function updateSlider() {
    slides.forEach((slide, idx) => {
      slide.classList.remove('active');
      if (idx === currentIndex) {
        slide.classList.add('active');
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function goToSlide(idx) {
    currentIndex = idx;
    updateSlider();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  function startAutoSlide() {
    if (!autoSlideTimer) {
      autoSlideTimer = setInterval(nextSlide, slideInterval);
    }
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Pause on hover
  if (sliderWrap) {
    sliderWrap.addEventListener('mouseenter', stopAutoSlide);
    sliderWrap.addEventListener('mouseleave', startAutoSlide);
  }

  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (sliderWrap) {
    sliderWrap.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderWrap.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 45;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
      resetAutoSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
      resetAutoSlide();
    }
  }

  startAutoSlide();
}

/* ==============================================================================
   10. FAQ ACCORDION
   ============================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion .faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    // Initialize first active item if present
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      questionBtn.setAttribute('aria-expanded', 'true');
    }

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items (accordion behavior: only one open at a time)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAns = otherItem.querySelector('.faq-answer');
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAns.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ==============================================================================
   11. BACK TO TOP BUTTON
   ============================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==============================================================================
   12. CONTACT / ENQUIRY FORM CLIENT-SIDE VALIDATION
   ============================================================================== */
function initEnquiryFormValidation() {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  const nameInput = document.getElementById('fullName');
  const phoneInput = document.getElementById('phoneNumber');
  const emailInput = document.getElementById('emailAddress');
  const courseInput = document.getElementById('selectCourse');
  const successBox = document.getElementById('formSuccessAlert');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // 1. Name Validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'nameError');
      isValid = false;
    } else {
      clearError(nameInput, 'nameError');
    }

    // 2. Phone Validation (Must be at least 10 digits)
    const phoneDigits = phoneInput.value.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      showError(phoneInput, 'phoneError');
      isValid = false;
    } else {
      clearError(phoneInput, 'phoneError');
    }

    // 3. Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, 'emailError');
      isValid = false;
    } else {
      clearError(emailInput, 'emailError');
    }

    // 4. Course Select Validation
    if (!courseInput.value) {
      showError(courseInput, 'courseError');
      isValid = false;
    } else {
      clearError(courseInput, 'courseError');
    }

    if (isValid) {
      // FRONTEND DEMONSTRATION SUCCESS
      // In production, integrate this with Formspree, EmailJS, PHP or an institute API:
      /*
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        }).then(response => { ... });
      */
      
      const submitBtn = document.getElementById('submitFormBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        successBox.style.display = 'flex';
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        setTimeout(() => {
          successBox.style.display = 'none';
        }, 8000);
      }, 700);
    }
  });

  function showError(inputEl, errorId) {
    inputEl.classList.add('is-invalid');
    const err = document.getElementById(errorId);
    if (err) err.style.display = 'block';
  }

  function clearError(inputEl, errorId) {
    inputEl.classList.remove('is-invalid');
    const err = document.getElementById(errorId);
    if (err) err.style.display = 'none';
  }

  // Real-time error clearing on input
  [nameInput, phoneInput, emailInput, courseInput].forEach(el => {
    if (el) {
      el.addEventListener('input', () => {
        el.classList.remove('is-invalid');
        const err = el.parentElement.parentElement.querySelector('.error-msg');
        if (err) err.style.display = 'none';
      });
    }
  });
}

/* ==============================================================================
   13. FAST ENROLLMENT MODAL FORM
   ============================================================================== */
function initFastEnrollForm() {
  const form = document.getElementById('fastEnrollForm');
  const successBox = document.getElementById('fastEnrollSuccess');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('enrollFullName');
    const phone = document.getElementById('enrollPhone');
    const course = document.getElementById('enrollCourseSelect');

    let valid = true;
    if (!name.value.trim()) {
      name.classList.add('is-invalid');
      valid = false;
    } else {
      name.classList.remove('is-invalid');
    }

    const phoneDigits = phone.value.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      phone.classList.add('is-invalid');
      valid = false;
    } else {
      phone.classList.remove('is-invalid');
    }

    if (!course.value) {
      course.classList.add('is-invalid');
      valid = false;
    } else {
      course.classList.remove('is-invalid');
    }

    if (valid) {
      form.style.display = 'none';
      successBox.style.display = 'flex';

      setTimeout(() => {
        form.reset();
        form.style.display = 'flex';
        successBox.style.display = 'none';
        const modal = document.getElementById('enrollModal');
        if (modal) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      }, 4000);
    }
  });
}
