## PM2 Control Panel for Node.js
![PM2 Control Panel screenshot 1](https://raw.githubusercontent.com/RussellWebSystems/pm2-control-panel/master/images/pm2controlpanel.jpg "PM2 Control Panel overview")
![PM2 Control Panel screenshot 2](https://raw.githubusercontent.com/RussellWebSystems/pm2-control-panel/master/images/addpm2app.jpg "Starting a PM2 process")

This is a dead simple tool that allows you to manage pm2 instances from the browser.  You can view running processes, start a process, restart a process, stop a process, or delete a process.

To run this this project, you must have Node.js installed, along with npm, the Node.js package manager.

Clone the project:

`git clone https://github.com/RussellWebSystems/pm2-control-panel.git`

Install the node module dependencies:

`cd pm2-control-panel && npm install`

Run the app:

`sudo node server.js`

And finally, go to http://localhost:8282/ in your web browser.

I would recommend only running this within a local network, as to prevent the entire internet from having the ability to manage your PM2 instances.