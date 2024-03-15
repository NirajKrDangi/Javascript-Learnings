//=> Complex Number Addition

class ComplexNumber {
    #real;
    #imag;
    constructor(r, i) {
        this.#real = r;
        this.#imag = i;
    }

    display() {
        console.log(this.#real, " +  i", this.#imag);
    }

    get real() {
        return this.#real;
    }

    get imag() {
        return this.#imag;
    }

    addComplexNumber(c) {
        this.#real += c.real;
        this.#imag += c.imag;
    }
}

const c1 = new ComplexNumber(2, 3);
c1.display();

const c2 = new ComplexNumber(4, 5);
c1.addComplexNumber(c2);
c1.display();

const c3 = new ComplexNumber(6, 7);
c1.addComplexNumber(c3);
c1.display();



// Complex Number Subtraction
class ComplexNumber{
    #real;
    #imag;
    constructor(r, i){
        this.#real = r;
        this.#imag = i;
    }

    display(){
        console.log(this.#real, " +  i",this.#imag);
    }

    get getReal(){
        return this.#real;
    }

    get getImag(){
        return this.#imag;
    }

    subComplexNumber(n){
        this.#real -= n.getReal; 
        this.#imag -= n.getImag; 
    }
}

const c1 = new ComplexNumber(8, 10);
c1.display();

const c2 = new ComplexNumber(2, 4);
c1.subComplexNumber(c2);
c1.display();

const c3 = new ComplexNumber(2, 4);
c1.subComplexNumber(c3);
c1.display();