"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const http_status_codes_1 = require("http-status-codes");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.send('Testando de novo.');
});
router.post('/', (req, res) => {
    console.log(req.query.teste);
    res.status(http_status_codes_1.StatusCodes.CREATED).json(req.body);
});
