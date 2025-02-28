const nodemailer = require('nodemailer');

const cart = ["shoes", "pants", "kurta"];
const email = "fab249719@gmail.com";

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
        return sendEmailConfirmation(email, statusUpdateInfo);
    })
    .then(function(emailInfo) {
        console.log(emailInfo);
    })
    .catch(function (err) {
        console.log(err.message);
        sendEmailNotification(email, err.message);
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

function sendEmailConfirmation(email, statusUpdateInfo) {
    return new Promise(function(resolve, reject) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'fab249719@gmail.com', // Replace with your email
                pass: '@Acers12345'   // Replace with your email password
            }
        });

        const mailOptions = {
            from: 'fab249719@gmail.com', // Replace with your email
            to: email,
            subject: 'Order Status Update',
            text: statusUpdateInfo
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                reject(error);
            } else {
                resolve('Email sent: ' + info.response);
            }
        });
    });
}

function sendEmailNotification(email, message) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fab249719@gmail.com', // Replace with your email
            pass: '@Acers12345'   // Replace with your email password
        }
    });

    const mailOptions = {
        from: 'fab249719@gmail.com', // Replace with your email
        to: email,
        subject: 'Error Notification',
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Error notification email sent: ' + info.response);
        }
    });
}

function validateCart(cart) {
    return true;
}