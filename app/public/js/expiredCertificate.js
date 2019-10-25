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
      certNum: ''
    },
    computed: {
    certificate_name: function() {
      return [...new Set(this.certificates.map(i => i.certName))]
    }
  }
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
