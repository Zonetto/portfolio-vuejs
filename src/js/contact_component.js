// js/ContactComponent.js

Vue.createApp({
    template: `
    <section id="contact" class="contact-section">
        <div class="contact-container">
            <h1>Contact <span>Me</span></h1>
            <div class="contact-form">
                <h1>Send <span>Email</span></h1>
                <form @submit.prevent="sendEmail">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" v-model="form.name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="form.email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" class="fixed-textarea" v-model="form.message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </section>
  `,
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            },
            successMessage: '',
            errorMessage: ''
        };
    },
    methods: {
        sendEmail() {
            // EmailJS configuration
            const serviceID = 'service_3p7usjt';
            const templateID = 'template_uoe66i7';
            const userID = 'It91k0r15PgN_HA8u';

            // Prepare the template parameters
            const templateParams = {
                from_name: this.form.name,
                from_email: this.form.email,
                message: this.form.message
            };

            // Use EmailJS to send the email
            emailjs.send(serviceID, templateID, templateParams, userID)
                .then(response => {
                    this.successMessage = 'Your message has been sent successfully!';
                    this.errorMessage = '';
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                })
                .catch(error => {
                    console.error('EmailJS error:', error);
                    this.errorMessage = 'Failed to send the message. Please try again later.';
                    this.successMessage = '';
                });
        }
    }
}).mount("#ContactComponent");
