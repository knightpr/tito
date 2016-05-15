System.register(['angular2/core', './components/user.component'], function(exports_1, context_1) {
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
    var core_1, user_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            }],
        execute: function() {
            // import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'tito-app',
                        template: "\n        <h1>TiTo</h1>\n        <p>Time in and Time out</p>\n        <user-section></user-section>\n\n    ",
                        directives: [user_component_1.UserComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSw0RUFBNEU7WUFZNUU7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFaRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsNkdBS1Q7d0JBQ0QsVUFBVSxFQUFDLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VXNlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXIuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7TUFURVJJQUxfRElSRUNUSVZFUywgTUFURVJJQUxfUFJPVklERVJTfSBmcm9tIFwibmcyLW1hdGVyaWFsL2FsbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RpdG8tYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDE+VGlUbzwvaDE+XG4gICAgICAgIDxwPlRpbWUgaW4gYW5kIFRpbWUgb3V0PC9wPlxuICAgICAgICA8dXNlci1zZWN0aW9uPjwvdXNlci1zZWN0aW9uPlxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOltVc2VyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
