var memberList = new Vue({
  el: '#memberList',
  data: {
    members: [{
          memberid: "" ,
          firstName: "",
          lastName: "",
          radioNumber: "",
          stationNumber: "",
          phoneNumber:"",
          address:"",
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
      fetch('api/new_records/addmember.php', {
       method:'POST',
       body: JSON.stringify(this.recordMember),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => { memberList.members.push( json[0] ) })
     .catch( err => {
       console.error('RECORD POST ERROR:');
       console.error(err);
    });
    this.handleReset();
  },
  /*csvExport(event){
    let csvContent = "data:text/csv;charset=utf-8,";
    const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "export.csv");
      link.click();
  };*/
    handleReset() {
      this.recordMember = {
        memberid:"",
        firstName: "",
        lastName: "",
        radioNumber: "",
        stationNumber: "",
        address:"",
        isActive: "",
        phoneNumber:"",
        gender: "",
        position: ""
      }
    },
    handleRowClick(member) {
      memberApp.member = member;
    }
  },
  created() {
    this.handleReset();
    this.fetchMembers();
  }
})
