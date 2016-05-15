System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TitoService, titos;
    return {
        setters:[],
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
                TitoService.prototype.add = function (time, value) {
                    var tito = {
                        time: time,
                        createdAt: new Date(),
                        value: value
                    };
                    this._titos.push(tito);
                };
                return TitoService;
            }());
            exports_1("TitoService", TitoService);
            titos = [
                {
                    time: '1/1/2016 10:00',
                    createdAt: new Date(),
                    value: 'in'
                },
                {
                    time: '1/1/2016 12:00',
                    createdAt: new Date(),
                    value: 'out'
                },
                {
                    time: '1/1/2016 13:00',
                    createdAt: new Date(),
                    value: 'in'
                },
                {
                    time: '1/1/2016 16:00',
                    createdAt: new Date(),
                    value: 'out'
                }
            ];
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3RpdG9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztxQkF3QkksS0FBSzs7OztZQXhCVDtnQkFFRTtvQkFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCw4QkFBUSxHQUFSO29CQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNyQixDQUFDO2dCQUNELCtCQUFTLEdBQVQsVUFBVSxJQUFJO29CQUNaLHNEQUFzRDtnQkFDeEQsQ0FBQztnQkFDRCw0QkFBTSxHQUFOLFVBQU8sSUFBSTtvQkFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELHlCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUMsS0FBYTtvQkFDNUIsSUFBSSxJQUFJLEdBQUc7d0JBQ1QsSUFBSSxFQUFFLElBQUk7d0JBQ1YsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO3dCQUNyQixLQUFLLEVBQUUsS0FBSztxQkFDYixDQUFBO29CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQUNILGtCQUFDO1lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtZQXZCRCxxQ0F1QkMsQ0FBQTtZQUNHLEtBQUssR0FBRztnQkFDUjtvQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7b0JBQ3JCLEtBQUssRUFBQyxJQUFJO2lCQUNYO2dCQUNEO29CQUNFLElBQUksRUFBRSxnQkFBZ0I7b0JBQ3RCLFNBQVMsRUFBRSxJQUFJLElBQUksRUFBRTtvQkFDckIsS0FBSyxFQUFDLEtBQUs7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFO29CQUNyQixLQUFLLEVBQUMsSUFBSTtpQkFDWDtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7b0JBQ3JCLEtBQUssRUFBQyxLQUFLO2lCQUNaO2FBQ0osQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy90aXRvU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUaXRvU2VydmljZSB7XG4gIHByaXZhdGUgX3RpdG9zO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl90aXRvcyA9IHRpdG9zO1xuICB9XG4gIGdldHRpdG9zKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRvcztcbiAgfVxuICBjb21wbGV0ZWQodGl0bykge1xuICAgIC8vIHRpdG8uaXNDb21wbGV0ZWQgPSB0aXRvLmlzQ29tcGxldGVkID8gZmFsc2UgOiB0cnVlO1xuICB9XG4gIGRlbGV0ZSh0aXRvKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5fdGl0b3MuaW5kZXhPZih0aXRvKTtcbiAgICB0aGlzLl90aXRvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIGFkZCh0aW1lOiBzdHJpbmcsdmFsdWU6IHN0cmluZykge1xuICAgIHZhciB0aXRvID0ge1xuICAgICAgdGltZTogdGltZSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH1cbiAgICB0aGlzLl90aXRvcy5wdXNoKHRpdG8pO1xuICB9XG59XG52YXIgdGl0b3MgPSBbXG4gICAgeyBcbiAgICAgIHRpbWU6ICcxLzEvMjAxNiAxMDowMCcsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB2YWx1ZTonaW4nXG4gICAgfSxcbiAgICB7IFxuICAgICAgdGltZTogJzEvMS8yMDE2IDEyOjAwJyxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHZhbHVlOidvdXQnXG4gICAgfSxcbiAgICB7IFxuICAgICAgdGltZTogJzEvMS8yMDE2IDEzOjAwJyxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHZhbHVlOidpbidcbiAgICB9LFxuICAgIHsgXG4gICAgICB0aW1lOiAnMS8xLzIwMTYgMTY6MDAnLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgdmFsdWU6J291dCdcbiAgICB9IFxuXSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
