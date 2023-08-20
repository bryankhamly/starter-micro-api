var http = require('http');
const Parse = require('parse/node');

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    poop();
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);

async function poop() {
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
}
