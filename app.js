System.register("CasinoNav", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CasinoNav;
    return {
        setters: [],
        execute: function () {
            CasinoNav = /** @class */ (function () {
                function CasinoNav(userInput) {
                    this.userInput = userInput;
                }
                CasinoNav.prototype.inputNav = function () {
                    alert(this.userInput);
                };
                return CasinoNav;
            }());
            exports_1("CasinoNav", CasinoNav);
        }
    };
});
System.register("greeter", ["CasinoNav"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function addToDisplayText(text) {
        el.innerText += '\n';
        el.innerText += text;
    }
    var CasinoNav_1, el, casinoNav, btn, inputField;
    return {
        setters: [
            function (CasinoNav_1_1) {
                CasinoNav_1 = CasinoNav_1_1;
            }
        ],
        execute: function () {
            el = document.getElementById('display');
            casinoNav = new CasinoNav_1.CasinoNav('eyyyy');
            casinoNav.inputNav;
            btn = document.getElementById('submit');
            inputField = document.getElementById("user_input");
            // var entry = document.getElementById('user_input').innerText;
            btn.addEventListener("click", function (e) { return addToDisplayText(inputField.value); });
        }
    };
});
//# sourceMappingURL=app.js.map