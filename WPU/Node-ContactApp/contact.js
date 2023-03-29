const fs = require("fs");
const validator = require("validator");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file contact.js jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

const simpanKontak = (nama, email, no) => {
  const contact = {
    nama,
    email,
    no,
  };

  const contacts = loadContact();

  const duplikat = contacts.find((orang) => orang.nama === nama);
  if (duplikat) {
    console.log("nama sudah terdaftar");
    return false;
  }

  if (email) {
    if (!validator.isEmail(email)) {
      console.log("email tidak valid");
      return false;
    }
  }

  // if(!validator.isMobilePhone(email, 'id-ID')){
  //   console.log("no hp tidak valid")
  //   return false
  // }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  // console.log(contacts);
  console.log(contact);
  console.log("data berhasil ditambahkan");
  return contacts;
};

const listContact = () => {
  const contacts = loadContact();
  console.log("daftar contacts");

  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.no}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (orang) => orang.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(`${nama} tidak ditemukan`);
    return false;
  }
  console.log(contact);
};

const deleteContact = (nama) => {
  const contact = loadContact();

  const newContact = contact.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
    );



  if(contact.length === newContact.length){
    console.log(`${nama} tidak ditemukan`)
    return false
  }else{
    console.log(`${nama} berhasil dihapus`);
    console.log(newContact)
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContact));

};

module.exports = {
  listContact,
  simpanKontak,
  detailContact,
  deleteContact
};
