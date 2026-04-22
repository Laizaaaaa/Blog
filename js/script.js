// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

const themeStorageKey = 'blog-theme';
const themeToggleLabel = {
    dark: 'Dark mode',
    light: 'Light mode'
};

function getPreferredTheme() {
    const savedTheme = localStorage.getItem(themeStorageKey);
    if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
    document.body.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(themeStorageKey, theme);

    const themeButtons = document.querySelectorAll('.theme-toggle');
    themeButtons.forEach((button) => {
        const isLight = theme === 'light';
        button.setAttribute('aria-pressed', String(isLight));
        button.setAttribute('aria-label', isLight ? themeToggleLabel.dark : themeToggleLabel.light);
        button.innerHTML = `<span class="theme-toggle-icon">${isLight ? '☀' : '☾'}</span>`;
    });
}

function setupThemeToggle() {
    if (document.querySelector('.theme-toggle')) {
        return;
    }

    const themeToggle = document.createElement('button');
    themeToggle.type = 'button';
    themeToggle.className = 'theme-toggle';
    themeToggle.addEventListener('click', () => {
        const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
        applyTheme(nextTheme);
    });

    document.body.appendChild(themeToggle);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Main cursor
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    // Follower with delay
    setTimeout(() => {
        cursorFollower.style.left = mouseX + 'px';
        cursorFollower.style.top = mouseY + 'px';
    }, 100);
});

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

setupThemeToggle();
applyTheme(getPreferredTheme());

// Smooth scroll for any internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe blog posts
document.querySelectorAll('.blog-post').forEach(post => {
    post.style.opacity = '0';
    post.style.transform = 'translateY(20px)';
    post.style.transition = 'all 0.6s ease';
    observer.observe(post);
    
    // Make entire card clickable
    post.style.cursor = 'pointer';
    post.addEventListener('click', function(e) {
        // Don't navigate if clicking directly on the link
        if (e.target.tagName === 'A') {
            return;
        }
        // Find the read more link and navigate to it
        const link = this.querySelector('.read-more');
        if (link) {
            window.location.href = link.href;
        }
    });
    
    // Add hover effect for better UX
    post.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    post.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
