
 var childProcess = require('child_process');
 var options = {maxBuffer:100*1024, encoding:'utf8', timeout:5000};
 
 var comando = "dir /B"// windows
 var comandolinux = "ls" // lista el contenido de la carpeta actual
 
 var child = childProcess.exec(comandolinux, options,
                        function (error, stdout, stderr) {
                        if (error) {
                            console.log(error.stack);
                            console.log('Error Code: '+error.code);
                            console.log('Error Signal: '+error.signal);
                            }
                        console.log('Results: \n' + stdout);
                        if (stderr.length){
                            console.log('Errors: ' + stderr);
                        }
                        });
 child.on('exit', function (code) {
            console.log('Completed with code: '+code);
 });