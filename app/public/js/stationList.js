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
    filter: {
      statNum: ''
    }
  },
  methods: {
    fetchStations() {
      fetch('api/station.php')
      .then(response => response.json())
      .then(json => {stationList.stations = json});
    }
 },
  created() {
    this.fetchStations();
  }
});
