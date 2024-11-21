Vue.createApp({
    template: `
    <div class="contact-section">
        <div class="contact-col">
            <h1>Contact <span>Me</span></h1>
            <div class="contact-row">
                <div class="contact-container" 
                    v-for="(contact, index) in contacts" 
                    :key="index" 
                    @click="openLink(contact.link)">
                    <iconify-icon :icon="contact.icon" width="50" height="50"></iconify-icon>
                    <h1>{{ contact.username }}</h1>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            contacts: [
                {
                    icon: "mdi:linkedin",
                    link: "https://linkedin.com/in/1ahmedsaad",
                    username: "1ahmedsaad"
                },
                {
                    icon: "logos:telegram",
                    link: "https://t.me/ahmed4saad",
                    username: "@ahmed4saad"
                },
                {
                    icon: "mdi:email",
                    link: "mailto:ahmed.saad.shuker@gmail.com",
                    username: "ahmed.saad.shuker"
                },
                {
                    icon: "radix-icons:github-logo",
                    link: "https://github.com/Zonetto",
                    username: "Zonetto"
                }
            ]
        };
    },
    methods: {
        openLink(link) {
            window.open(link, "_blank");
        }
    }
}).mount("#ContactComponent");
