var certificateList = new Vue({
  el: '#certificateList',
  data: {
    certificates: [{
          certid:"",
          certAgency: "",
          certName: "",
          expirationYears: ""
    }],
    recordCert: {
      certid:"",
      certAgency: "",
      certName: "",
      expirationYears: ""
    }
  },
  methods: {
    fetchCertificates() {
      fetch('api/certificate/index.php')
      .then(response => response.json())
      .then(json => {certificateList.certificates = json});
    },
    handleSubmit(event) {
     fetch('api/new_records/addCertificate.php', {
        method:'POST',
        body: JSON.stringify(this.recordCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certificateList.certificates.push( json[0] ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     });

     this.handleReset();
   },
    handleReset() {
      this.recordCer = {
        certid:"",
        certAgency: "",
        certName: "",
        expirationYears: ""
      }
    },
    handleRowClick(certificate) {
      certificateApp.certificate = certificate;
    }
 },
  created() {
    this.fetchCertificates();
    this.handleReset();
  }
})
