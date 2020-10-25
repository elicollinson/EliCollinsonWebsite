<template>
  <div id="contact-me">
    <h1>Contact Me</h1>
    <p class="container-fluid">Thank you for your interest! Please fill out the form an I will reach out. None of the data used here is shared with anyone else.</p>
    <form class="container-fluid" id="contact-form" name="contact" method="POST" data-netlify=true @submit.prevent="handleSubmit" netlify-honeypot="bot-field">
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <label for="FullName">Please Enter Full Name</label>
        <input class="form-control my-size" type="text" name="fullName" v-model="form.fullName" required/>
        <label for="Email">Email</label>
        <input class="form-control my-size" type="email" name="email" v-model="form.email" required/>
        <label for="Message">Please Enter Your Message</label>
        <input class="form-control my-size" type="text" name="message" v-model="form.message" required/>
        <label for="PhoneNumber">Please Enter Your Phone Number (Optional)</label>
        <input class="form-control my-size" type="tel" name="phoneNumber" v-model="form.phoneNumber" />
        <input type="submit" class="form-control" />
    </form>
  </div>
</template>

<script>
/* import axios from 'axios' */

export default {
  name: 'ContactMe',
  data () {
    return {
      form: {
        fullName: '',
        email: '',
        message: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit (e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        })
      })
        .then(() => {
          this.$router.push('thanks')
        })
        .catch(() => {
          this.$router.push('404')
        })
    }
  }
}
/*
    handleSubmit () {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post(
        '/',
        this.encode({
          'form-name': 'contact',
          ...this.form
        }),
        axiosConfig
      ).then(() => {
        this.$router.push('thanks')
      }).catch(() => {
        this.$router.push('404')
      })
    }
  }
} */
</script>

<style scoped>
#contact-me {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}
label {
  font-family: brandon-grotesque, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14pt;
}
input {
  margin-bottom: .5rem;
}
@media screen and (min-width: 480px) {
  .my-size {
  width: 700px;
}
}
@media screen and (min-width: 770px) {
  .my-size {
  width: 900px;
}
}

</style>
