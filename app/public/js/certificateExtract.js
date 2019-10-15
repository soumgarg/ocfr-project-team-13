var certificateList = new Vue({
  el: '#certificateList',
  data: {
    certificates: [{
          certid: "",
          certAgency: "",
          certName: "",
          expirationYears: ""
    }],
    recordCert: {
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
    handleSubmit() {
     /*fetch('api/new_records/addCertificate.php', {
        method: 'post',
        data: this.recordCert
      })
     .then( response => response.json() )
      .then( json => { certificateList.certificates.push( json[0] ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);*/
     this.certificates.push( this.recordCert );
     this.handleReset();
   },
    handleReset() {
      this.recordCer = {
        certAgency: "",
        certName: "",
        expirationYears: ""
      }
    }/*,
    handleRowClick(certificate) {
      certTriageApp.certificate = certificate;
    }*/
 },
  created() {
    this.fetchCertificates();
  }
})
