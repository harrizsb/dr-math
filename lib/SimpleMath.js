class SimpleMath {
  constructor(input1 = 0, input2 = 0) {
    this.input1 = parseInt(input1);
    this.input2 = parseInt(input2);
  }

  get sum() {
    return this.input1 + this.input2;
  }

  get multiply() {
    return this.input1 * this.input2;
  }

  isPrime(n) {
    const limit = Math.floor(Math.sqrt(n));

    for (let index = 2; index <= limit; index++) {
      if (n % index === 0) {
        return false;
      }
    }

    return n >= 2;
  }

  get primeSequence() {
    const tmp = [];
    let index = 0;

    while (
      tmp.length !== this.input1 ||
      /* emergency exit strategy */
      index > 100
    ) {
      if (this.isPrime(index)) {
        tmp.push(index);
      }

      index++;
    }

    return tmp;
  }

  get fibSequence() {
    return Array(this.input1)
      .fill()
      .reduce((a, _, c) => {
        const tmp = c < 2 ? c : a[c - 1] + a[c - 2];

        return [...a, tmp];
      }, []);
  }
}

export default SimpleMath;
