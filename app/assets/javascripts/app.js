document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      people: []
    },
    mounted: function() {
      $.get('/api/v1/people.json', function(data) {
        console.log(data);
        this.people = data;
      }.bind(this));
    },
    methods: {
      toggleBio: function(inputPerson) {  
        inputPerson.bioVisible = !inputPerson.bioVisible;
      },
      addPerson: function() {
        var params = {
                          name: this.newPersonName,
                          bio: this.newPersonBio,
                          bioVisible: false
        };
        $.post('/api/v1/people.json', params, function(newPerson) { 
          this.people.push(params);
          this.newPersonName = "";
          this.newPersonBio = "";
        }.bind(this));
      },
    },
    computed: {

    }
  });
});