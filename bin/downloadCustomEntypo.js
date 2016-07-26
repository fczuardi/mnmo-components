var download = require('download-file')
var dir = './assets/fonts/Entypo/';
var url = 'https://file.myfontastic.com/LJwoe4jsYH2RoMHM6ZwrvW/fonts/1449171288'
var filename = 'Custom-Entypo-mnmo';

download(url + '.eot', { directory: dir, filename: filename + '.eot'});
download(url + '.woff', { directory: dir, filename: filename + '.woff'});
download(url + '.ttf', { directory: dir, filename: filename + '.ttf'});
download(url + '.svg', { directory: dir, filename: filename + '.svg'});
