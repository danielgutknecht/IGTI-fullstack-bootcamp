import Account from "../model/Account.js";
import NotFoundException from "../errors/NotFoundException.js";
import InsufficientBalanceError from "../errors/InsufficientBalanceError.js";

const createAccount = (agencia, conta, nome) => {
  try {
    const account = Account.create({
      agency: agencia,
      accountNumber: conta,
      name: nome,
      balance: 0,
    });
    return account;
  } catch (error) {
    throw new error();
  }
};

const getAccount = (agencia, conta) => {
  try {
    const account = Account.findOne({
      agency: agencia,
      accountNumber: conta,
    });
    console.log(account);
    if (!account){
      console.log('conta não encontrada!')
    }

    return account;
  } catch (error) {
    throw new NotFoundException("Conta não encontrada!", error);
  }
};

const credit = async (agencia, conta, valor) => {
  const account = getAccount(agencia, conta);
  account.balance += valor;
  await Account.updateOne({account});
  return account;
}


const debit = (agencia, conta, valor) => {
  const account = getAccount(agencia, conta);
  if (hasInsufficientBalance(conta, valor)) throw new InsufficientBalanceError('Insufficient Balance');
  account.balance -= valor;
  Account.updateOne({account});
  return account;
}

const hasInsufficientBalance = (account, withdrawValue) => {
  return account.balance < withdrawValue;
}


export { createAccount, getAccount, credit };
