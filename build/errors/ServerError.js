"use strict";
class ServerError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 500;
    }
}
