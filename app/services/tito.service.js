System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TitoService, titos;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TitoService = (function () {
                function TitoService() {
                    this._titos = titos;
                }
                TitoService.prototype.gettitos = function () {
                    return this._titos;
                };
                TitoService.prototype.completed = function (tito) {
                    // tito.isCompleted = tito.isCompleted ? false : true;
                };
                TitoService.prototype.delete = function (tito) {
                    var index = this._titos.indexOf(tito);
                    this._titos.splice(index, 1);
                };
                TitoService.prototype.add = function (value) {
                    var tito = {
                        time: new Date(),
                        createdAt: new Date(),
                        value: value
                    };
                    this._titos.push(tito);
                };
                TitoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TitoService);
                return TitoService;
            }());
            exports_1("TitoService", TitoService);
            titos = [];
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RpdG8uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3FCQTZCSSxLQUFLOzs7Ozs7O1lBekJUO2dCQUdFO29CQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUNELDhCQUFRLEdBQVI7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsK0JBQVMsR0FBVCxVQUFVLElBQUk7b0JBQ1osc0RBQXNEO2dCQUN4RCxDQUFDO2dCQUNELDRCQUFNLEdBQU4sVUFBTyxJQUFJO29CQUNULElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QseUJBQUcsR0FBSCxVQUFJLEtBQWE7b0JBQ2YsSUFBSSxJQUFJLEdBQUc7d0JBQ1QsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO3dCQUNoQixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7d0JBQ3JCLEtBQUssRUFBRSxLQUFLO3FCQUNiLENBQUE7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBeEJIO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQXlCYixrQkFBQztZQUFELENBeEJBLEFBd0JDLElBQUE7WUF4QkQscUNBd0JDLENBQUE7WUFDRyxLQUFLLEdBQUcsRUFFWCxDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3RpdG8uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaXRvU2VydmljZSB7XG4gIHByaXZhdGUgX3RpdG9zO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3RpdG9zID0gdGl0b3M7XG4gIH1cbiAgZ2V0dGl0b3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdG9zO1xuICB9XG4gIGNvbXBsZXRlZCh0aXRvKSB7XG4gICAgLy8gdGl0by5pc0NvbXBsZXRlZCA9IHRpdG8uaXNDb21wbGV0ZWQgPyBmYWxzZSA6IHRydWU7XG4gIH1cbiAgZGVsZXRlKHRpdG8pIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl90aXRvcy5pbmRleE9mKHRpdG8pO1xuICAgIHRoaXMuX3RpdG9zLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgYWRkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB2YXIgdGl0byA9IHtcbiAgICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9XG4gICAgdGhpcy5fdGl0b3MucHVzaCh0aXRvKTtcbiAgfVxufVxudmFyIHRpdG9zID0gW1xuIFxuXSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
