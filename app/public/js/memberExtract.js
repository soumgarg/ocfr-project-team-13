var memberList = new Vue({
  el: '#memberList',
  data: {
    members: [{
          memberid: "" ,
          firstName: "",
          lastName: "",
          radioNumber: "",
          stationNumber: "",
          isActive: "",
          gender: "",
          position: ""
    }],
    recordMember : {}
  },
  methods: {
    fetchMembers() {
      fetch('api/member/index.php')
      .then(response => response.json())
      .then(json => {memberList.members = json});
    },
    handleSubmit(event) {
      // fetch(url, {
      //   method: 'post',
      //   data: this.recordPatient
      // })
      // .then( ... )
      this.members.push( this.recordMember );
      this.handleReset();
    },
    handleReset() {
      this.recordMember = {
        firstName: "",
        lastName: "",
        radioNumber: "",
        stationNumber: "",
        isActive: "",
        gender: "",
        position: ""
      }
    },
    handleRowClick(member) {
      memberTriageApp.member = member;
    }
  },
  created() {
    this.handleReset();
    this.fetchMembers();
  }
})
