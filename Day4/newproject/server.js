var net = require('net');
var port = 11312;
var client_data = {};

var server = net.createServer(function(connection) {
    console.log('Connection to %s open', port);

    connection.on('data', function(data) {
        var arr_data = String(data).trim().split(" ");
        var command = arr_data[0].toUpperCase();
        var key = arr_data[1];
        if (command === 'SET'){
            client_data[key] = arr_data.slice(2).join(" ");
            connection.write('STORED\r\n');
        }else if (command === 'GET'){
            connection.write('VALUE ' + client_data[key] + '\r\n');
        }else if (command === 'DELETE'){
            client_data[key] = "";
            connection.write('DELETED!\r\n');
        }else if (command === 'CLOSE'){
            connection.write('Bey!\r\n');
            connection.end('ERROR\r\n');
            console.log('Connection to %s closed', port);
        }else{
            connection.end('ERROR\r\n');
            console.log('Connection to %s closed', port);
        }
    });
});
server.listen(port);
