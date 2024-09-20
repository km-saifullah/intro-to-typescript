// types of variable in ts -> number, string, boolean, arr[]
var transaction1 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 456,
};
var transaction2 = {
    payerAccountNumber: 123,
    payeeAccountNumber: 567,
};
var bankAccount = {
    accountNumber: 123,
    accountHolder: "Jane Doe",
    ballance: 4000,
    isActive: true,
    transactions: [transaction1, transaction2],
};
