"use strict";
// const express = require("express");
// const app = express();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use("/public", express.static("public"));
// const routers = require("./routes");
// app.use(routers);
// app.use((req, res, next) => {
//   res.redirect(302, '/non-existent-page');
// });
// module.exports = app;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use('/public', express_1.default.static('public'));
const routes_1 = __importDefault(require("./routes"));
app.use(routes_1.default);
app.use((req, res, next) => {
    res.redirect(302, '/non-existent-page');
});
exports.default = app;
//# sourceMappingURL=app.js.map