
Vue.createApp({
  template: `
    <section id="skills" class="skills-section">
      <div class="skills-container">
        <h1>My <span>Skills</span></h1>
        <div class="skills-icons">
          <div ref="scrollContainer" class="scrolling-wrapper">
            <div class="skill-item" v-for="(skill, index) in repeatedIcons" :key="index">
              <iconify-icon class="skill-icon"
                :icon="skill.icon"
                width="60"
                height="60">
              </iconify-icon>
              <p class="skill-title">{{ skill.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      skillsIcons: [
        { icon: "devicon:flutter", title: "Flutter" },
        { icon: "logos:dart", title: "Dart" },
        { icon: "devicon:kotlin", title: "Kotlin" },
        { icon: "devicon:jetpackcompose", title: "Compose" },
        { icon: "devicon:firebase", title: "Firebase" },
        { icon: "logos:sqlite", title: "SQLite" },
        { icon: "devicon:azuresqldatabase", title: "SQL Database" },
        { icon: "devicon-plain:microsoftsqlserver-wordmark", title: "SQL Server" },
        { icon: "vscode-icons:file-type-css", title: "CSS" },
        { icon: "devicon:html5", title: "HTML" },
        { icon: "logos:javascript", title: "JavaScript" },
        { icon: "devicon:cplusplus", title: "C++" },
        { icon: "vscode-icons:file-type-matlab", title: "Matlab" },
        { icon: "vscode-icons:folder-type-bloc", title: "Bloc" },
        { icon: "devicon:gradle", title: "Gradle" },
        { icon: "radix-icons:github-logo", title: "GitHub" },
        { icon: "devicon:git", title: "Git" },
        { icon: "devicon:trello", title: "Trello" },
        { icon: "logos:asana-icon", title: "Asana" },
        { icon: "logos:mysql", title: "MySQL" },
        { icon: "simple-icons:uml", title: "UML" },
        { icon: "logos:figma", title: "Figma" },
        { icon: "devicon:androidstudio", title: "Android Studio" },
      ],
    }
  },
  computed: {
    repeatedIcons() {
      // Duplicate the icons to allow continuous scrolling
      return [...this.skillsIcons, ...this.skillsIcons];
    }
  },

}).mount('#SkillsComponent');



