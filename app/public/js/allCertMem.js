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
    filter: {
      certNum: ""
    }
  },
  methods: {
    fetchCertificates() {
      fetch('api/allcerts.php')
      .then(response => response.json())
      .then(json => {certificateList.certificates = json});
    }
 },
  created() {
    this.fetchCertificates();
  }
})
