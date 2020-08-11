class InsufficientBalanceError extends Error {
    constructor(msg) {
        super(msg);
    }
}

export default InsufficientBalanceError;