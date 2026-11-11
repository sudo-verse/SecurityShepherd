
// ==========================================
// MOCK PII SOURCE AND SINK TEST    FILE 
// ==========================================

// -------- PII SOURCES --------

// Source 1: Email
const email = req.body.email;

// Source 2: Phone number
const phoneNumber = req.body.phone;

// Source 3: Social Security Number
const ssn = req.body.ssn;

// Source 4: Credit Card
const creditCard = req.body.creditCard;

// Source 5: Password
const password = req.body.password;

// Source 6: Home Address
const address = req.body.address;

// Source 7: Date of Birth
const dateOfBirth = req.body.dob;

// Source 8: Bank Account
const bankAccount = req.body.bankAccount;


// -------- PII SINKS --------

// Sink 1: Console logging
console.log("User email:", email);

// Sink 2: HTTP request
fetch("https://example.com/api/user", {
    method: "POST",
    body: JSON.stringify({
        email: email,
        phone: phoneNumber
    })
});

// Sink 3: Database write
db.users.insertOne({
    email: email,
    ssn: ssn,
    phone: phoneNumber
});

// Sink 4: File write
fs.writeFileSync(
    "/tmp/user-data.txt",
    `Email: ${email}, SSN: ${ssn}`
);

// Sink 5: Analytics event
analytics.track("user_registered", {
    email: email,
    creditCard: creditCard
});

// Sink 6: URL query parameter
const url = `https://example.com/profile?email=${email}`;
fetch(url);

// Sink 7: Third-party logging
logger.info({
    password: password,
    address: address
});

// Sink 8: HTTP headers
axios.post("https://example.com/verify", {}, {
    headers: {
        "X-User-Email": email,
        "X-User-Phone": phoneNumber
    }
});


// -------- INDIRECT DATA FLOWS --------

// Source -> Variable -> Sink
const userEmail = email;
const copiedEmail = userEmail;
console.log(copiedEmail);

// Source -> Object -> Sink
const user = {
    contact: {
        email: email,
        phone: phoneNumber
    }
};

console.log(user.contact.email);

// Source -> Function Argument -> Sink
function sendUserData(userPII) {
    console.log(userPII);
}

sendUserData(ssn);

// Source -> String Concatenation -> Sink
const sensitiveInfo = "User SSN: " + ssn;
console.log(sensitiveInfo);

// Source -> Array -> Sink
const piiData = [email, phoneNumber, ssn];
console.log(piiData);


// -------- SANITIZED / CONTROL CASES --------

// Masked email
const maskedEmail = "u***@example.com";
console.log(maskedEmail);

// Static non-PII data
const username = "test-user";
console.log(username);

