var memberApp = new Vue({
  el: '#memberApp',
  data: {
    certificates: [{
          certid:"",
          certAgency: "",
          certName: "",
          expirationYears: ""
    }],
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
      console.log('IT COMES HERE');
      fetch('api/updateCertissuance.php', {
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
  },
    handleReset() {
      this.member = {memberid:"",
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
    }
  },
  created() {
    this.fetchCertificates();
    this.handleReset();
  }
})
