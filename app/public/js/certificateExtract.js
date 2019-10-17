var certificateList = new Vue({
  el: '#certificateList',
  data: {
    certificates: [{
          certid:"",
          certAgency: "",
          certName: "",
          expirationYears: ""
    }],
    recordCert: {}
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
      .then( json => { certificateList.certificates.push( json[0] ) });

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
      certificateApp.cert = certificate;
    }
 },
  created() {
    this.fetchCertificates();
  }
})
