
Vue.createApp({
  template: `
    <section id="projects" class="projects-section">
        <h1>My <span>Projects</span></h1>
      <div class="projects-cards">
        <div class="projects-card" v-for="(card, index) in cards" :key="index">
          <img :src="card.image" :alt="card.title">
          <div class="projects-info">
            <h1>{{ card.title }}</h1>
            <div class="projects-made">
              <h4>Made with:</h4>
              <iconify-icon 
                v-for="(icon, iconIndex) in card.icons" 
                :key="iconIndex" 
                :icon="icon"
                width="25" 
                height="25">
              </iconify-icon>
            </div>
            <h4>{{ card.description }}</h4>
            <div class="projects-btns">
              <button v-for="(button, btnIndex) in card.buttons" 
                      :key="btnIndex" 
                      @click="openLink(button.link)">
                {{ button.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      cards: [
      ]
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    },
    async fetchProjects() {
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
        this.cards = data.projects.map(item => ({
          title: item.title || "No Title",
          description: item.description || "No Description",
          image: item.image || "https://images4.alphacoders.com/115/thumb-1920-115716.jpg",
          icons: item.icons?.map(icon => icon) || [],
          buttons: item.buttons?.map(button => ({
            text: button?.text || "No Text",
            link: button?.link || "#"
          })) || []
        }));

      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
  },
  mounted() {
    this.fetchProjects();
  }
}).mount('#ProjectsComponent');

