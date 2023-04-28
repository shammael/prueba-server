"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BadRequestError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 400;
    }
}
exports.default = BadRequestError;
