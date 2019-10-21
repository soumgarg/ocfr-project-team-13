var certList = new Vue({
  el: '#certList',
  data: {
    certissuance: [{
        issuanceid:"",
        issueStartDate: "",
        issueEndDate: "",
        memberID: "",
        certID: "",
    }],
    recordMember : {}
  },
  methods: {
    fetchMembers() {
      fetch('api/certiss.php')
      .then(response => response.json())
      .then(json => {certList.certissuance = json});
    },
    handleSubmit(event) {
      fetch('api/addcertissue.php', {
       method:'POST',
       body: JSON.stringify(this.recordcertissuance),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
     })
     .then( response => response.json() )
     .then( json => { certList.certissuance.push( json[0] ) })
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
      this.recordcertissuance = {
        issuanceid:"",
        issueStartDate: "",
        issueEndDate: "",
        memberID: "",
        certID: "",
      }
    },
    handleRowClick(certissuance) {
      certissueApp.certissuance = certissuance;
    }
  },
  created() {
    this.handleReset();
    this.fetchMembers();
  }
})
