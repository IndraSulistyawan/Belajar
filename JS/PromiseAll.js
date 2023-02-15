//di file ChainingPromise.js
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}
 
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};
 
const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};
 
const boilWater = () => {
    return new Promise((resolve, reject) => {
      console.log('Memanaskan air...');
      setTimeout(() => {
        resolve('Air panas sudah siap!');
      }, 2000);
    });
  };
   
  const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
      console.log('Menggiling biji kopi...');
      setTimeout(() => {
        resolve('Bubuk kopi sudah siap!');
      }, 1000);
    });
  };


function makeEspresso() {
    checkAvailability()
      .then((value) => {
        console.log(value);
        return checkStock();
      })
      .then((value) => {
        console.log(value);
        const promises = [boilWater(), grindCoffeeBeans()];
        console.log("kode yang dicari -----------------------------")
        console.log(promises)
        console.log("kode yang dicari -----------------------------")
        return Promise.all(promises);
    })
    .then((value) => {
        console.log(value) //[ 'Air panas sudah siap!', 'Bubuk kopi sudah siap!' ]
        console.log("kode value -----------------------------")
        
        return brewCoffee();
      })
      .then((value) => {
        console.log(value);
        state.isCoffeeMachineBusy = false;
      })
      .catch((rejectedReason) => {
        console.log(rejectedReason);
        state.isCoffeeMachineBusy = false;
      });
  }
   
  makeEspresso();
   
  /* output
  Mesin kopi siap digunakan.
  Stok cukup. Bisa membuat kopi.
  Memanaskan air...
  Menggiling biji kopi...
  [ 'Air panas sudah siap!', 'Bubuk kopi sudah siap!' ]
  Membuatkan kopi Anda...
  Kopi sudah siap!
  */