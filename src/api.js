const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2608-ANDY";

export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    console.log(result);
    return result.data;
  } catch (error) {
    console.error(error);
  }
}
