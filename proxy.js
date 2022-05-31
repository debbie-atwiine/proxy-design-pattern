//2. Create the real object which implements the interface
var RealInternetAccess = /** @class */ (function () {
    function RealInternetAccess() {
    }
    RealInternetAccess.prototype.RealInternetAccess = function (empName) {
        this.employeeName = empName;
    };
    RealInternetAccess.prototype.grantInternetAccess = function () {
        console.log("Internet Access granted for employee: " + this.employeeName);
    };
    return RealInternetAccess;
}());
//3. Create the proxy class which is identical to the real object and also implements the interface
var ProxyInternetAccess = /** @class */ (function () {
    function ProxyInternetAccess() {
    }
    ProxyInternetAccess.prototype.ProxyInternetAccess = function (employeeName) {
        this.employeeName = employeeName;
    };
    ProxyInternetAccess.prototype.grantInternetAccess = function () {
        console.log("Internet Access granted for employee: " + this.employeeName);
    };
    return ProxyInternetAccess;
}());
//4. Create the client
var ProxyPatternClient = /** @class */ (function () {
    function ProxyPatternClient() {
    }
    ProxyPatternClient.prototype.main = function () {
        console.log("This is the client");
    };
    return ProxyPatternClient;
}());
