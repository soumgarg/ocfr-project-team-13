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
    allCertificates: [{
          certName: "",
          issueStartDate: "",
          issueEndDate: ""
    }],
    filter: {
      certNum: ''
    }
  },
  methods: {
    fetchAllCertificates() {
      fetch('api/certificate/index.php')
      .then(response => response.json())
      .then(json => {certificateList.allCertificates = json});
    },
    fetchCertificates() {
      fetch('api/exptable.php')
      .then(response => response.json())
      .then(json => {certificateList.certificates = json});
    }
 },
  created() {
    this.fetchCertificates();
    this.fetchAllCertificates();
  }
})
