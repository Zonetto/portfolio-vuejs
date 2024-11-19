// js/FooterComponent.js

Vue.createApp({
    template: `
    <footer class="footer-section">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Ahmed Saad. All rights reserved.</p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/1ahmedsaad" target="_blank" aria-label="LinkedIn">
            <iconify-icon icon="mdi:linkedin" width="40" height="40"></iconify-icon>
          </a>
          <a href="https://github.com/your-github-username" target="_blank" aria-label="GitHub">
            <iconify-icon icon="mdi:github" width="40" height="40"></iconify-icon>
          </a>
          <a href="mailto:ahmed.saad.shuker@gmail.com">
            <iconify-icon icon="mdi:email" width="40" height="40"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  `,
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
}).mount("#FooterComponent");
