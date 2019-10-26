var stationList = new Vue({
  el: '#stationList',
  data: {
    stations: [{
          stationNumber: "",
          radioNumber: "",
          firstName: "",
          lastName: "",
          email: ""
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
      statNum: ''
    }
  },
  methods: {
      fetchMembers() {
        fetch('api/member/index.php')
        .then(response => response.json())
        .then(json => {stationList.members = json});
      },
    fetchStations() {
      fetch('api/station.php')
      .then(response => response.json())
      .then(json => {stationList.stations = json});
    }
 },
  created() {
    this.fetchStations();
    this.fetchMembers();
  }
});
