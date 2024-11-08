
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
                :icon="icon.icon"
                width="1.5rem" 
                height="1.5rem">
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
                {
                    title: "CryptoCrowd Sentiment Analysis",
                    description: "Cryptocurrency sentiment analysis on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on tweets. Users can also view keywords and an average sentiment score. React frontend and Node.js backend. Stateless application that uses Elasticache and S3 on AWS for persistence.",
                    image: "/assets/images/img1.jpg",
                    icons: [
                        { icon: "simple-icons:html5" },
                        { icon: "simple-icons:javascript" },
                        { icon: "devicon:firebase" }
                    ],
                    buttons: [
                        { text: "View Project", link: "https://github.com/Zonetto" },
                        { text: "GitHub", link: "https://github.com/Zonetto" }
                    ]
                },
                {
                  title: "Project 2 Sentiment Analysis Sentiment Analysis",
                    description: "This is the description for project 2. It showcases various features and technologies used.",
                    image: "/assets/images/img1.jpg",
                    icons: [
                        { icon: "simple-icons:html5" },
                        { icon: "simple-icons:javascript" },
                        { icon: "logos:dart" },
                    ],
                    buttons: [
                        { text: "Learn More", link: "https://example.com/project2" },
                        { text: "Source Code", link: "https://github.com/example/project2" }
                    ]
                },
                {
                    title: "Project 3",
                    description: "Description of project 3. This project is a demo of Vue and dynamic content rendering.",
                    image: "/assets/images/img1.jpg",
                    icons: [
                        { icon: "simple-icons:html5" },
                        { icon: "simple-icons:javascript" },
                        { icon: "devicon:firebase" },
                        { icon: "vscode-icons:file-type-flutter" }
                    ],
                    buttons: [
                        { text: "Visit Site", link: "https://example.com/project3" },
                        { text: "GitHub", link: "https://github.com/example/project3" }
                    ]
                }
            ]
        }
    },
    methods: {
        openLink(url) {
            window.open(url, '_blank');
        }
    }
}).mount('#ProjectsComponent');


