var certissuanceApp = new Vue({
  el: '#certissuanceApp',
  data: {
    certissuance: {}
  },
  methods: {
    handleSubmit(event) {
      fetch('api/updateCertissuance.php', {
       method:'POST',
       body: JSON.stringify(this.certissuance),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => { certissuanceApp.certissuance.push( json[0] ) })
     .catch( err => {
       console.error('RECORD POST ERROR:');
       console.error(err);
    });
    this.handleReset();
  }/*,
  delete(event) {
      fetch('api/member/deleteMember.php', {
       method:'POST',
       body: JSON.stringify(this.member),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => { memberApp.member.push( json[0] ) })
     .catch( err => {
       console.error('RECORD POST ERROR:');
       console.error(err);
    });
    this.handleReset();
  }*/,
    handleReset() {
      this.certissuance = {
        issuanceid:"",
        issueStartDate: "",
        issueEndDate: "",
        memberID: "",
        certID: "",
      }
    }
  },
  created() {
    this.handleReset();
  }
})
