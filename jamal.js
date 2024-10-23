const skibidi = "CC..C..";
const toilets = "C..CC..";

skibidi[3];

function occupied(spaces, string, string2) {
  let occupied = 0;
  for (let i = 0; i < spaces; i++) {
    if (string[i] == string2[i] && string[i] == "C") {
      occupied++;
    }
  }
  console.log(occupied);
}

occupied(7, "CC..C..", "C..CC..");
