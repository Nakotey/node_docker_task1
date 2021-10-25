class Calculate {

    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }

    sum() {
        return this.n1 + this.n2;
    }

    multiply() {
        return this.n1 * this.n2;
    }

}

module.exports = Calculate