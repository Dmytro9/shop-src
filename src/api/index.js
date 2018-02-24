import phones from "./mockPhones";
import categories from "./mockCategories";
import R from "ramda";
import data from "./mockPhones";

export const fetchPhones = async () => {
  return data;
  // try {
  //   const response = await fetch(
  //     "http://www.mocky.io/v2/5a4f95ca2f0000c20c790c25"
  //   );
  //   const data = await response.json();
  //   return data.phones;
  // } catch (e) {
  //   console.log("There was an error...");
  //   console.log(e);
  // }
};

export const loadMorePhones = async ({ offset }) => {
  return new Promise(resolve => {
    resolve(phones);
  });
};

export const fetchPhoneById = async id => {
  return new Promise((resolve, reject) => {
    const phone = R.find(R.propEq("id", id), phones);
    resolve(phone);
  });
};

export const fetchCategories = async () => {
  return new Promise(resolve => {
    resolve(categories);
  });
};
