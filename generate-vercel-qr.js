import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

const url = 'https://com-9kv7oazqy-miguelpedro10199-1019s-projects.vercel.app'; 
const dest = path.resolve('public/qr_code_vercel.png');

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

QRCode.toFile(dest, url, {
  width: 500,
  margin: 2,
  color: {
    dark: '#0369a1', // Larimar dark blue
    light: '#ffffff'
  }
}, function (err) {
  if (err) throw err;
  console.log('--- QR CODE VERCEL GENERADO CON EXITO ---');
});
