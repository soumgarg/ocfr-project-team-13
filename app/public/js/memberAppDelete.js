var memberApp = new Vue({
  el: '#memberApp',
  data: {
    member: {}
  },
  methods: {
    handleSubmit(event) {
      fetch('api/member/deletemember.php', {
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
      this.member = {
        memberid:"",
        firstName: "",
        lastName: "",
        radioNumber: "",
        stationNumber: "",
        address:"",
        phoneNumber:"",
        isActive: "",
        gender: "",
        position: ""
      }
    }
  },
  created() {
    this.handleReset();
  }
})
