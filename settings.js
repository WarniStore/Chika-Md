/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasGanz',
}

//—————「 Setting Owner 」—————//
global.owner = ['6288220523418','6283157987833','6281573070366'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6283157987833','6288220523418','6281573070366'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6283157987833' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'WarniStore' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'BotWarning☢️' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Warni' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UCtM-pDaaGVRe4BJ7w4qE4Bw'
global.ig = 'https://www.instagram.com/jb.wb.store?igsh=Ymh3bXJuMnR6bGpx'
global.mygc = 'https://linktr.ee/groupwbstorejb'
global.myweb = 'https://linktr.ee/groupwbstorejb'
global.email = 'WBStore35@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© BotWarning☢️' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Warni' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 10,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
/*global.veloriy = fs.readFileSync('./image/chika.mp4')*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_Selesai😃._',
admin: '_Fitur Khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Fitur Khusus Owner Bot_',
group: '_Fitur Digunakan Hanya Untuk Di Group!_',
private: '_Fitur Untuk Menggunakan Private Chat!_',
bot: '_Fitur Khusus Pengguna Nomor Bot_',
wait: '_Sabar Lagi Di Proses..._',
error: '_Fitur Lagi Error Nih!_',
endLimit: '_Limit Harian Anda Udah Habis, Limit Direset Setiap Jam 12, Mohon Menunggu Dengan Sabar_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
