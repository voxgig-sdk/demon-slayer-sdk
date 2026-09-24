"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemonSlayerError = void 0;
class DemonSlayerError extends Error {
    isDemonSlayerError = true;
    sdk = 'DemonSlayer';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.DemonSlayerError = DemonSlayerError;
//# sourceMappingURL=DemonSlayerError.js.map