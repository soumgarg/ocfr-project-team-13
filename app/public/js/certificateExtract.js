var certificateList = new Vue({
  el: '#certificateList',
  data: {
    certificates: [{
          certid: "",
          certAgency: "",
          certName: "",
          expirationYears: ""
    }]
  },
  methods: {
    fetchCertiticates() {
      fetch('api/certification.php')
      .then(response => response.json())
      .then(json => {certificateList.certificates = json});
    }
  },
  created() {
    this.fetchCertiticates();
  }
})