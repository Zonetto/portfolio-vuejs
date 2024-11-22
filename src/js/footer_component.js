Vue.createApp({
  template: `
    <div class="footer-section">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Ahmed Saad. All rights reserved.</p>
        <div class="social-links">
          <a @click="openLink('https://www.linkedin.com/in/1ahmedsaad')" aria-label="LinkedIn">
            <iconify-icon icon="mdi:linkedin" width="40" height="40"></iconify-icon>
          </a>
          <a @click="openLink('https://github.com/Zonetto')" aria-label="GitHub">
            <iconify-icon icon="mdi:github" width="40" height="40"></iconify-icon>
          </a>
          <a @click="openLink('mailto:ahmed.saad.shuker@gmail.com')">
            <iconify-icon icon="mdi:email" width="40" height="40"></iconify-icon>
          </a>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
  },
}).mount("#FooterComponent");
