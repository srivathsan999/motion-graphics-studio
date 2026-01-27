// Theme Toggle Functionality
(function () {
  'use strict';

  // Get theme from localStorage or default to dark
  const getTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  };

  // Set theme
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  };

  // Update theme icon
  const updateThemeIcon = (theme) => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      const icon = themeToggle.querySelector('svg');
      if (icon) {
        if (theme === 'light') {
          icon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          `;
        } else {
          icon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          `;
        }
      }
    }
  };

  // Initialize theme on page load
  const initTheme = () => {
    const theme = getTheme();
    setTheme(theme);
  };

  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Attach toggle function to window for button clicks
  window.toggleTheme = toggleTheme;
})();

// Mobile Menu Toggle Functionality
(function () {
  'use strict';

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenu && menuIcon && closeIcon) {
      const isHidden = mobileMenu.classList.contains('hidden');

      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    }
  };

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');

    if (mobileMenu && mobileMenuButton && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
      }
    }
  });

  // Close mobile menu when clicking on a link (but not on dropdown buttons)
  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      const links = mobileMenu.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (!mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
          }
        });
      });
    }
  });

  // Attach toggle function to window
  window.toggleMobileMenu = toggleMobileMenu;
})();

// Mobile Home Dropdown Toggle Functionality
(function () {
  'use strict';

  const toggleMobileHomeDropdown = () => {
    const dropdown = document.getElementById('mobile-home-dropdown');
    const arrow = document.getElementById('mobile-home-arrow');

    if (dropdown && arrow) {
      const isHidden = dropdown.classList.contains('hidden');

      if (isHidden) {
        dropdown.classList.remove('hidden');
        arrow.classList.add('rotate-180');
      } else {
        dropdown.classList.add('hidden');
        arrow.classList.remove('rotate-180');
      }
    }
  };

  // Attach toggle function to window
  window.toggleMobileHomeDropdown = toggleMobileHomeDropdown;
})();

// Active Menu State Functionality
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // Get current page filename (handle root path as index.html)
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    // Select all links in the navbar (both desktop and mobile)
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
      const href = link.getAttribute('href');
      // Skip empty links or hash links
      if (!href || href === '#' || href.startsWith('javascript:')) return;

      // Get link filename
      const linkPage = href.split('/').pop();

      // Check if it matches current page
      if (linkPage === page) {
        link.classList.add('nav-active');

        // Handle Desktop Dropdown Parent (Parent "Home" link when child is active)
        const desktopParentGroup = link.closest('.group');
        if (desktopParentGroup) {
          // The first anchor in the group is usually the parent trigger
          const parentLink = desktopParentGroup.querySelector('a');
          if (parentLink && parentLink !== link) {
            parentLink.classList.add('nav-active');
          }
        }

        // Handle Mobile Dropdown Parent (Parent "Home" button when child is active)
        const mobileDropdown = link.closest('#mobile-home-dropdown');
        if (mobileDropdown) {
          // The button is the previous element sibling of the dropdown div
          const parentButton = mobileDropdown.previousElementSibling;
          if (parentButton && parentButton.tagName === 'BUTTON') {
            parentButton.classList.add('nav-active');
          }
        }
      }
    });
  });
})();

// FAQ Accordion Functionality
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const trigger = item.querySelector('.faq-trigger');
      const content = item.querySelector('.faq-content');
      const iconWrapper = item.querySelector('.faq-icon-wrapper');

      if (trigger && content && iconWrapper) {
        trigger.addEventListener('click', () => {
          const isClosed = content.style.maxHeight === '0px' || content.style.maxHeight === '';

          // Close all other items
          faqItems.forEach(otherItem => {
            const otherContent = otherItem.querySelector('.faq-content');
            const otherIcon = otherItem.querySelector('.faq-icon-wrapper');
            if (otherContent) otherContent.style.maxHeight = '0px';
            if (otherIcon) otherIcon.classList.remove('rotate-180');
          });

          // Toggle current item
          if (isClosed) {
            content.style.maxHeight = content.scrollHeight + 'px';
            iconWrapper.classList.add('rotate-180');
          } else {
            content.style.maxHeight = '0px';
            iconWrapper.classList.remove('rotate-180');
          }
        });
      }
    });
  });
})();

