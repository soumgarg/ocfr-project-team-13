var certificateList = new Vue({
  el: '#certificateList',
  data: {
    certificates: [{
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
      .then( json => { certificateList.certificates.push( json[0] ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     });
     /*.then( response => response.json() )
      .then( json => { certificateList.certificates.push( json[0] ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
     this.certificates.push( this.recordCert );*/
     this.handleReset();
   },
   /*addCertificate() {
      fetch('api/new_records/addCertificate.php', {
        method:'POST',
        body: JSON.stringify(this),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      //.then(response => response.json())
      //.then(json => { waitingApp.patients = json })

      this.handleReset();
    }*/
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
