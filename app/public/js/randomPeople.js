var randomPeople = new Vue({
  el: '#randomPeopleApp',
  data: {
    people: [{
        name: {
        title: "",
        first: "",
        last: ""
      },
        location: {
        state: ""
        },
        email: "",
        dob: {
        date: "",
        age: 0 
      },
        picture:{
            large:"",
            thumbnail:""
        }
    }]
  },
  methods: {
    fetchPeople() {
      fetch('https://randomuser.me/api/')
      .then(function(response) {return response.json()})
      .then(json => {randomPeople.people = json.results});
    }
  },
  created() {
    this.fetchPeople();
  }
})