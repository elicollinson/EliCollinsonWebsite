<template>
  <div id="contact-me">
    <h1>Contact Me</h1>
    <form class="container-fluid" v-on:submit.prevent id="contact-form" name="contact" method="POST" data-netlify="true">
        <label for="FullName">Please Enter Full Name</label>
        <input class="form-control my-size" type="text" name="FullName" v-model="submissionInfo.submissionName" required/>
        <label for="Email">Email</label>
        <input class="form-control my-size" type="email" name="Email" v-model="submissionInfo.submissionEmail" required/>
        <label for="Message">Please Enter Your Message</label>
        <input class="form-control my-size" type="text" name="Message" v-model="submissionInfo.submissionMessage" required/>
        <label for="PhoneNumber">Please Enter Your Phone Number (Optional)</label>
        <input class="form-control my-size" type="tel" name="PhoneNumber" v-model="submissionInfo.submissionPhoneNumber" />
        <input type="submit" class="form-control" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  data () {
    return {
      submissionInfo: {
        submissionName: '',
        submissionEmail: '',
        submissionMessage: '',
        submissionPhoneNumber: ''
      }
    }
  }

}
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
