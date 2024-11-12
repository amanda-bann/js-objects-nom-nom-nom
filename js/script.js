const bird = {
  name: "Eliza",
  type: "Budgie",
  hungerScale: 5, // Scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  }
};