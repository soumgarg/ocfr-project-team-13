var certificateList = new Vue({
  el: '#certificateList',
  data: {
    certificates: [{
          firstName: "",
          lastName: "",
          certName: "",
          issueStartDate: "",
          issueEndDate: ""
    }],
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
    filter: {
      certNum: ""
    }
  },
  methods: {
    fetchMembers() {
      fetch('api/member/index.php')
      .then(response => response.json())
      .then(json => {certificateList.members = json});
    },
    fetchCertificates() {
      fetch('api/allcerts.php')
      .then(response => response.json())
      .then(json => {certificateList.certificates = json});
    }
 },
  created() {
    this.fetchCertificates();
    this.fetchMembers();
  }
})
