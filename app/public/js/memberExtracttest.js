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
    }]
  },
  methods: {
    fetchMembers() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => {memberList.members = json});
    }
  },
  created() {
    this.fetchMembers();
  }
})
