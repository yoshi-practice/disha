import axios from 'axios';

axios.get('https://api.zipaddress.net?zipcode=900-0012').then(function (data) {
      console.log(data);
});
