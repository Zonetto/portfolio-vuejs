Vue.createApp({
  template: `
    <div class="timeline-section">
      <h1>My <span>Experiences</span></h1>
      <div class="timeline">
        <div class="timeline-item" v-for="(experience, index) in experiences" :key="index">
          <div class="timeline-dot">
            <iconify-icon icon="mdi:briefcase-outline" width="30" height="30"></iconify-icon>
          </div>
          <div class="timeline-content">
            <div class="timeline-date">{{ experience.date }}</div>
            <h3 class="timeline-title">{{ experience.title }}</h3>
            <h4 class="timeline-company">{{ experience.company }}</h4>
            <p class="timeline-description">{{ experience.description }}</p>
            <div class="timeline-tech">
              <h5>Technologies used:</h5>
              <div class="tech-icons">
                <iconify-icon 
                  v-for="(icon, iconIndex) in experience.icons" 
                  :key="iconIndex" 
                  :icon="icon" 
                  width="25" 
                  height="25">
                </iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      experiences: []
    };
  },
  methods: {
    async fetchExperiences() {
      const apiUrl = "https://zonetto.github.io/portfolio-api/api.json";
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow"
      };

      try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        // Transform fetched data into the desired card structure
        this.experiences = data.experiences.map(item => ({
          title: item.title || "No Title",
          company: item.company || "No Company",
          date: item.date || "No Date",
          description: item.description || "No Description",
          icons: item.icons?.map(icon => icon) || [],
        }));

      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    }
  },
  mounted() {
    this.fetchExperiences();
  }
}).mount("#ExperiencesComponent");
