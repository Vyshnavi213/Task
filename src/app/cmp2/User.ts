export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public confirmPassword: string,
        public phone: string
    ) { }
}

//phone ?: number
//Question mark in the declaration makes the variable to be optional
