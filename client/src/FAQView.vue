<template>
  <div>
    <NavbarComponent />
    <div class="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div class="faq-question">
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada velit at libero efficitur, ut commodo urna ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec finibus commodo risus, vel varius nulla.</p>
      </div>
      <div class="faq-question">
        <h2>How do I create an account?</h2>
        <p>To create an account, click on the "Register" button at the top of the page and fill out the registration form.</p>
      </div>
      <div class="faq-question">
        <h2>What payment methods do you accept?</h2>
        <p>We currently accept Visa, Mastercard, and PayPal.</p>
      </div>
      <!-- Add more questions and answers here -->
    </div>
    <ToolBar />
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import ToolBar from '../components/ToolBar.vue'

export default {
  name: 'FAQView',
  components: {
    NavbarComponent,
    ToolBar,
  },
  created() {
    // User is not authorised
    if (localStorage.getItem('token') === null) {
      router.push('LoginView');
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
.faq-question {
  margin-bottom: 1rem;
}
.faq-question h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.faq-question p {
  font-size: 1rem;
}
</style>
