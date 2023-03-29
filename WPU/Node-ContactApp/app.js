const { describe, demand, demandOption, number } = require('yargs');
const yargs = require('yargs');
const {  simpanKontak, listContact, detailContact, deleteContact } = require('./contact');

  

yargs.command({
  command: 'add',
  describe: 'menambahkan kontak baru',
  builder: {
    nama: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email",
      demandOption: false,
      type: "string",
    },
    no: {
      describe: "number",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    simpanKontak(argv.nama, argv.email, argv.no )
    
  }
})
  .demandCommand();

//menampilkan semua daftar
yargs
  .command({
    command: "list",
      describe: "menampilkan semua daftar kontak",
      handler(){
       listContact()
      }
  })
  
  
  yargs
    .command({
      command: "detail",
        describe: "menampilkan detail contact berdasarkan nama",
        builder: {
          nama: {
            describe: "nama lengkap",
            demandOption: true,
            type: "string",
          },
        },
        handler(argv){
          detailContact(argv.nama);
        }
    })
  yargs
    .command({
      command: "delete",
        describe: "menghapus contact",
        builder: {
          nama: {
            describe: "nama lengkap",
            demandOption: true,
            type: "string",
          },
        },
        handler(argv){
          deleteContact(argv.nama);
        }
    })

  yargs.parse();
