define("CasinoNav", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CasinoNav = /** @class */ (function () {
        function CasinoNav(userInput) {
            this.userInput = userInput;
        }
        CasinoNav.prototype.inputNav = function () {
            alert(this.userInput);
        };
        return CasinoNav;
    }());
    exports.CasinoNav = CasinoNav;
});
define("greeter", ["require", "exports", "CasinoNav"], function (require, exports, CasinoNav_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var el = document.getElementById('display');
    function addToDisplayText(text) {
        el.innerText += '\n';
        el.innerText += text;
    }
    var casinoNav = new CasinoNav_1.CasinoNav('eyyyy');
    casinoNav.inputNav;
    var btn = document.getElementById('submit');
    var inputField = document.getElementById("user_input");
    // var entry = document.getElementById('user_input').innerText;
    btn.addEventListener("click", function (e) { return addToDisplayText(inputField.value); });
});
//# sourceMappingURL=app.js.map