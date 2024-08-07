// Object Declaration  Sender's Data
let myCardInfo = {
    name: "Amadi Chile",
    accountNumber: "0000112244",
    balance: 100000,
    pin: 7777,
    bank: "Access Bank"
};

// Object Declaration Receiver's data
let recipientInfo = {
    name: "Amadi Gift",
    accountNumber: "0000112244",
    balance: 10000,
    bank: "Access"
};

function atms() {
    //Step 1: Insert Card
    let insertCard = prompt("Welcome to Access Bank\nPlease insert your card by typing 'YES'");
    if (insertCard.toUpperCase() !== "YES") {
        alert("Transaction cancelled.");
        return;
    }

    // Step 2: Verify PIN
    let enteredPin = prompt("Please enter your PIN:");
    if (parseInt(enteredPin) !== myCardInfo.pin) {
        alert("Invalid PIN. Transaction cancelled.");
        return;
    }

    // Step 3: Select Transaction Type
    let transactionType = prompt("Type\n1 to withdraw\n2 to transfer");
    if (transactionType !== "1" && transactionType !== "2") {
        alert("Invalid selection. Transaction cancelled.");
        return;
    }

    if (transactionType === "1") {
        alert("Service Not Avaliable.");
        return;
    }

    // Step 4: Enter Recipient's Account Number
    let recipientAccountNumber = prompt("Enter recipient's account number:");
    if (recipientAccountNumber !== recipientInfo.accountNumber) {
        alert("Invalid account number. Transaction cancelled.");
        return;
    }

    // Step 5: Select Recipient's Bank
    let recipientBank = prompt("Please select recipient's bank\n1. UBA\n2. Access\n3. GTB");
    let bankName;
    switch (recipientBank) {
        case "1":
            bankName = "UBA";
            break;
        case "2":
            bankName = "Access";
            break;
        case "3":
            bankName = "GTB";
            break;
        default:
            alert("Invalid selection. Transaction cancelled.");
            return;
    }

    if (bankName !== recipientInfo.bank) {
        alert("Invalid bank selection. Transaction cancelled.");
        return;
    }

    // Step 6: Confirm Recipient's Details
    let confirmRecipient = confirm(`Please confirm recipient's details\nName: ${recipientInfo.name}\nAccount Number: ${recipientInfo.accountNumber}\nBank: ${recipientInfo.bank}`);
    if (!confirmRecipient) {
        alert("Transaction cancelled.");
        return;
    }

    // Step 7: Enter Transfer Amount
    let transferAmount = parseFloat(prompt("Please enter transfer amount:"));
    if (isNaN(transferAmount) || transferAmount <= 0) {
        alert("Invalid amount. Transaction cancelled.");
        return;
    }

    if (transferAmount > myCardInfo.balance) {
        alert("Insufficient balance. Transaction cancelled.");
        return;
    }

    // Step 8: Confirm Transaction
    let confirmTransaction = confirm(`Are you sure you want to transfer money to?\nName: ${recipientInfo.name}\nAccount Number: ${recipientInfo.accountNumber}\nBank: ${recipientInfo.bank}\nTransfer Amount: ${transferAmount}`);
    if (!confirmTransaction) {
        alert("Transaction cancelled.");
        return;
    }

    // Step 9: Update Balances
    myCardInfo.balance -= transferAmount;
    recipientInfo.balance += transferAmount;

    // Step 10: Show Success Message
    alert(`Transfer successful.`);
    confirm(`Sender's previous balance: 100000\nNew balance: ${myCardInfo.balance}\nRecipient's previous balance: 10000\nNew balance: ${recipientInfo.balance}`);
}

// Run the ATM function
atms();