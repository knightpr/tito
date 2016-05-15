System.register(['angular2/core', './components/tito.component'], function(exports_1, context_1) {
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
    var core_1, tito_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tito_component_1_1) {
                tito_component_1 = tito_component_1_1;
            }],
        execute: function() {
            // import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'tito-app',
                        template: "\n        <h1>TiTo</h1>\n        <p>Time in and Time out</p>\n        <user-section></user-section>\n        <tito-list></tito-list>\n\n    ",
                        //  directives:[UserComponent,TitoComponent]
                        directives: [tito_component_1.TitoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSw0RUFBNEU7WUFjNUU7Z0JBQ0M7Z0JBQWMsQ0FBQztnQkFiaEI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLDhJQU1UO3dCQUNILDRDQUE0Qzt3QkFDMUMsVUFBVSxFQUFDLENBQUMsOEJBQWEsQ0FBQztxQkFDN0IsQ0FBQzs7Z0NBQUE7Z0JBR0YsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VXNlckNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXIuY29tcG9uZW50JztcbmltcG9ydCB7VGl0b0NvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL3RpdG8uY29tcG9uZW50JztcblxuLy8gaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTLCBNQVRFUklBTF9QUk9WSURFUlN9IGZyb20gXCJuZzItbWF0ZXJpYWwvYWxsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndGl0by1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMT5UaVRvPC9oMT5cbiAgICAgICAgPHA+VGltZSBpbiBhbmQgVGltZSBvdXQ8L3A+XG4gICAgICAgIDx1c2VyLXNlY3Rpb24+PC91c2VyLXNlY3Rpb24+XG4gICAgICAgIDx0aXRvLWxpc3Q+PC90aXRvLWxpc3Q+XG5cbiAgICBgLFxuICAvLyAgZGlyZWN0aXZlczpbVXNlckNvbXBvbmVudCxUaXRvQ29tcG9uZW50XVxuICAgIGRpcmVjdGl2ZXM6W1RpdG9Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCl7fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
