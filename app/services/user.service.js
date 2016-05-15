System.register(['angular2/core', '../models/tito', '../models/user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tito_1, user_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tito_1_1) {
                tito_1 = tito_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                }
                UserService.prototype.getUser = function () {
                    this.tito1 = new tito_1.Tito(1, 'in', '9:00 am');
                    this.tito2 = new tito_1.Tito(2, 'out', '11:40 am');
                    this.tito3 = new tito_1.Tito(3, 'in', '13:00 pm');
                    this.tito4 = new tito_1.Tito(4, 'out', '16:00 pm');
                    return new user_1.User('Prem1 Gupta1', 'prem.gupta@kcc.edu.np', 'ABC SRL', [this.tito1, this.tito2, this.tito3, this.tito4]);
                };
                UserService.prototype.addTime = function () {
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUFBO2dCQWtCQSxDQUFDO2dCQWZBLDZCQUFPLEdBQVA7b0JBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxVQUFVLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUcxQyxNQUFNLENBQUUsSUFBSSxXQUFJLENBQUMsY0FBYyxFQUFDLHVCQUF1QixFQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUVuSCxDQUFDO2dCQUVELDZCQUFPLEdBQVA7Z0JBR0EsQ0FBQztnQkFsQkY7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBbUJiLGtCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCxxQ0FrQkMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUaXRvfSBmcm9tICcuLi9tb2RlbHMvdGl0byc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy91c2VyJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XG5cblxuXHRnZXRVc2VyKCl7XG5cdFx0dGhpcy50aXRvMSA9IG5ldyBUaXRvKDEsJ2luJywnOTowMCBhbScpO1xuXHRcdHRoaXMudGl0bzIgPSBuZXcgVGl0bygyLCdvdXQnLCcxMTo0MCBhbScpO1xuXHRcdHRoaXMudGl0bzMgPSBuZXcgVGl0bygzLCdpbicsJzEzOjAwIHBtJyk7XG5cdFx0dGhpcy50aXRvNCA9IG5ldyBUaXRvKDQsJ291dCcsJzE2OjAwIHBtJyk7XG5cbiAgICAgIFxuXHRcdHJldHVybiAgbmV3IFVzZXIoJ1ByZW0xIEd1cHRhMScsJ3ByZW0uZ3VwdGFAa2NjLmVkdS5ucCcsJ0FCQyBTUkwnLCBbdGhpcy50aXRvMSx0aGlzLnRpdG8yLHRoaXMudGl0bzMsdGhpcy50aXRvNF0pO1xuXG5cdH1cblxuXHRhZGRUaW1lKCl7XG5cblxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
