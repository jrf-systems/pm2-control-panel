var pm2 = require('pm2');

module.exports = function (io) {
  io.on('connection', function (client) {
    console.log("Client connected");

    function getApps() {
      pm2.connect(function (err) {
        if (err) {
          io.emit('error', err);
          console.log(err);
        }

        pm2.list(function (err, applist) {
          if (err) {
            io.emit('error', err);
            console.log(err);
          } else {
            io.emit('list-apps', applist);
          }
          pm2.disconnect();
        });
      });
    }

    client.on('get-apps', function(nothing) {
      getApps()
    });

    client.on('start-app', function (app) {
      pm2.connect(function (err) {
        if (err) {
          io.emit('error', err);
          console.log(err);
        }

        pm2.start(app.path, {
          name: app.name
        }, function (err, apps) {
          if (err) {
            io.emit('error', err);
            console.log(err);
          } else {
            getApps()
          }
          pm2.disconnect();
        });
      });
    });

    client.on('startagain-app', function (app) {
      pm2.connect(function (err) {
        if (err) {
          io.emit('error', err);
            console.log(err);
        }

        pm2.start(app, function (err, apps) {
          if (err) {
            io.emit('error', err);
            console.log(err);
          } else {
            getApps()
          }
          pm2.disconnect();
        });
      });
    });

    client.on('restart-app', function (app) {
      pm2.connect(function (err) {
        if (err) {
          io.emit('error', err);
            console.log(err);
        }

        pm2.restart(app, function (err, apps) {
          if (err) {
            io.emit('error', err);
            console.log(err);
          } else {
            getApps()
          }
          pm2.disconnect();
        });
      });
    });

    client.on('del-app', function (app) {
      pm2.connect(function (err) {
        if (err) {
          io.emit('error', err);
          console.log(err);
        }

        pm2.delete(app, function (err, apps) {
          if (err) {
            io.emit('error', err);
            console.log(err);
          } else {
            getApps()
          }
          pm2.disconnect();
        });
      });
    });

    client.on('stop-app', function (app) {
      pm2.connect(function (err) {
        if (err) {
          io.emit('error', err);
          console.log(err);
        }

        pm2.stop(app, function (err, apps) {
          if (err) {
            io.emit('error', err);
            console.log(err);
          } else {
            getApps()
          }
          pm2.disconnect();
        });
      });
    });
  });
}