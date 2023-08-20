var http = require('http');
http.createServer(function (req, res) {

  Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize('yguQfJ2INRKe3OhFH3f16gQROPCgx3EpiygFhJjC', 'RXe8iIzqrRJpZFkM3xkiiQryz7tBorkr0h5guQh0', 'lJuZQ2VdxtdJSMvN9QlYeFVVUAOGrUPnvWqpIrAy');

(async () => {
  const TeamData = Parse.Object.extend('TeamData');
  const query = new Parse.Query(TeamData);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const floorNumber = object.get('floorNumber')
      const unitData = object.get('unitData')
      const testxd = object.get('testxd')
      console.log(floorNumber);
      console.log(unitData);
      console.log(testxd);
    }
  } catch (error) {
    console.error('Error while fetching TeamData', error);
  }
})();
;
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);


