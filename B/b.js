export const BEngine = {
  handle(tmp) {
    console.log("B verarbeitet TMP:", tmp);

    // RE-Warte-Stellung: B arbeitet sofort
    if (tmp.includes("TMP-ROOM")) {
      console.log("B stabilisiert TMP.room");
    }

    if (tmp.includes("TMP-MATRIX")) {
      console.log("B stabilisiert TMP.matrix");
    }

    if (tmp.includes("TMP")) {
      console.log("B übernimmt generisches TMP");
    }
  }
};
