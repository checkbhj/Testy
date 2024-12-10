const fs = require("fs");
const login = require("ryuu-fca-api");

var credentials = {email: "rahadhossain518@gmail.com", password: "#SakibinMei8907"}; // credential information

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // login
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); //create appstate
});
