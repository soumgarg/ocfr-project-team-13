var certificateApp = new Vue({
  el: '#certificateApp',
  data: {
    certificate: {}
  },
  methods: {
    handleSubmit(event) {
      fetch('api/updateCertificate.php', {
       method:'POST',
       body: JSON.stringify(this.certificate),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => { certificateApp.certificate.push( json[0] ) })
     .catch( err => {
       console.error('RECORD POST ERROR:');
       console.error(err);
    });
    this.handleReset();
  },
    handleReset() {
      this.certificate = {
        certid:"",
        certName:"",
        certAgency:"",
        expirationYears:""
      }
    }
  },
  created() {
    this.handleReset();
  }
})
