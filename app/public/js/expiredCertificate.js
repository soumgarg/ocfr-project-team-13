var certificateList = new Vue({
  el: '#certificateList',
  data: {
    certificates: [{
          firstName: "",
          lastName: "",
          certName: "",
          issueStartDate: "",
          issueEndDate: ""
    }]
  },
  methods: {
    fetchCertificates() {
      fetch('api/exptable.php')
      .then(response => response.json())
      .then(json => {certificateList.certificates = json});
    }
 },
  created() {
    this.fetchCertificates();
  }
})
