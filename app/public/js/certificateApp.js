var certificateApp = new Vue({
  el: '#certificateApp',
  data: {
    cert: {}
  },
  methods: {
    handleSubmit(event) {
      fetch('api/certificate/updateCertificate.php', {
       method:'POST',
       body: JSON.stringify(this.cert),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => { certificateApp.cert.push( json[0] ) })
     .catch( err => {
       console.error('RECORD POST ERROR:');
       console.error(err);
    });
    this.handleReset();
  },
    handleReset() {
      this.cert = {
        certid:"",
        certAgency: "",
        certName: "",
        expirationYears: ""
      }
    }
  },
  created() {
    this.handleReset();
  }
})
