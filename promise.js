const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
 try {
  let promise1 = await promiseTheaterIXX();
  let promise2 = await promiseTheaterVGC();
  let hasil = 0;
  promise1.forEach(element => {
    if(element.hasil == emosi){
      hasil++;
    }
  });
  promise2.forEach(element => {
    if(element.hasil == emosi){
      hasil++;
    }
  });
  return hasil
 } catch (error) {
  console.log("Ada error dalam proses pembacaan" + error);
 }
}

module.exports = {
  promiseOutput,
};
