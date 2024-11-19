// js/EducationComponent.js
Vue.createApp({
    template: `
    <section id="education" class="education-section">
      <div class="education-container">
        <h1>My <span>Education</span></h1>
        <div class="education-cards">
          <div class="education-card" v-for="(edu, index) in education" :key="index">
            <h2 class="degree">{{ edu.degree }}</h2>
            <h3 class="institution">{{ edu.institution }}</h3>
            <p class="duration">{{ edu.duration }}</p>
            <p class="description">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
    data() {
        return {
            education: [
                {
                    degree: "Bachelor of Science in Computer Science",
                    institution: "University of Kufa",
                    duration: "2019 - 2024",
                    description: "Studied core computer science concepts, including data structures, algorithms, and software engineering."
                },
            ]
        };
    }
}).mount("#EducationComponent");
