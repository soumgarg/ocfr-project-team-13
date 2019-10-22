var memberApp = new Vue({
  el: '#memberApp',
  data: {
    certificates: [{
          certid:"",
          certAgency: "",
          certName: "",
          expirationYears: ""
    }],
    certissuance: {

    },
    member: {
    memberid:"",
    firstName: "",
    lastName: "",
    radioNumber: "",
    stationNumber: "",
    address:"",
    phoneNumber:"",
    isActive: "",
    gender: "",
    position: "",
    certid:"",
    memberid:"",
    issuanceid:"",
    issueStartDate:"",
    issueEndDate:""
  }
  },
  methods: {
    fetchCertificates() {
      fetch('api/certificate/index.php')
      .then(response => response.json())
      .then(json => {memberApp.certificates = json});
    },
    handleSubmit(event) {
      fetch('api/updateCertissuance.php', {
       method:'POST',
       body: JSON.stringify(this.certissuance),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => { memberApp.certissuance.push( json[0] ) })
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
    this.fetchCertificates();
    this.handleReset();
  }
})
