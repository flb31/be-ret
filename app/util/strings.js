'use strict'

function isEmail(email) {
    if(!email) return false;
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g);
}

function isStatusValid(status) {
    var states = [
        'READY_FOR_REVIEW',
        'AWAITING_DECISION',
        'UNDER_REVIEW',
        'DENIED',
        'AWAITING_CREDENTIALS', // Add status if exist more
    ]

    return states.filter( st => st === status ).length > 0
}

module.exports = {
    isEmail,
    isStatusValid,
}
