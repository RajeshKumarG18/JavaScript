const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function (orderId) {
        console.log("Order ID:", orderId);
        return orderId;
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
        return updateOrderStatus("12345", "Paid");
    })
    .then(function(statusUpdateInfo) {
        console.log(statusUpdateInfo);
        return sendEmailConfirmation("fab249719@example.com");
    })
    .then(function(emailInfo) {
        console.log(emailInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    });

/// Producer

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        // createOrder
        // validateCart
        // orderId
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if(orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 3000);
        }

    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        resolve("Payment successful");
    });
}

function updateOrderStatus(orderId, status) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(`Order ${orderId} status updated to ${status}`);
        }, 2000);
    });
}

function sendEmailConfirmation(email) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(`Email sent to ${email}`);
        }, 1000);
    });
}

function validateCart(cart) {
    return true;
}