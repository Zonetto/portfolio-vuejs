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
            contacts: []
        };
    },
    methods: {
        openLink(link) {
            window.open(link, "_blank");
        },
        async fetchContacts() {
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
                this.contacts = data.contacts.map(item => ({
                    username: item.username || "No Username",
                    link: item.link || "No Link",
                    image: item.image || "https://images4.alphacoders.com/115/thumb-1920-115716.jpg",
                    icon: item.icon || "mdi:github",
                }));

            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        }

    },
    mounted() {
        this.fetchContacts();
    }
}).mount("#ContactComponent");
