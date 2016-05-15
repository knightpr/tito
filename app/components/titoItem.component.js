System.register(['angular2/core', '../services/tito.service'], function(exports_1, context_1) {
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
    var core_1, tito_service_1;
    var TitoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tito_service_1_1) {
                tito_service_1 = tito_service_1_1;
            }],
        execute: function() {
            TitoItem = (function () {
                function TitoItem(titoService) {
                    this.titoService = titoService;
                }
                TitoItem = __decorate([
                    core_1.Component({
                        selector: 'tito-item',
                        properties: ['tito'],
                        template: "\n\t\t\t<li class=\"tito-item\">\n\t\t\t  {{tito.value}} - \t{{tito.time}} \n\t\t\t  <a >Edit</a>\n\t\t\t  <a (click)=\"titoService.delete(tito)\">Delete</a>\n\t\t\t</li>\n\t"
                    }), 
                    __metadata('design:paramtypes', [tito_service_1.TitoService])
                ], TitoItem);
                return TitoItem;
            }());
            exports_1("TitoItem", TitoItem);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGl0b0l0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUNDLGtCQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Z0JBQzVDLENBQUM7Z0JBZkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUMsV0FBVzt3QkFDcEIsVUFBVSxFQUFDLENBQUMsTUFBTSxDQUFDO3dCQUNuQixRQUFRLEVBQUMsZ0xBTVI7cUJBR0QsQ0FBQzs7NEJBQUE7Z0JBS0YsZUFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsK0JBSUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RpdG9JdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGl0b1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL3RpdG8uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjondGl0by1pdGVtJyxcblx0cHJvcGVydGllczpbJ3RpdG8nXSxcblx0dGVtcGxhdGU6YFxuXHRcdFx0PGxpIGNsYXNzPVwidGl0by1pdGVtXCI+XG5cdFx0XHQgIHt7dGl0by52YWx1ZX19IC0gXHR7e3RpdG8udGltZX19IFxuXHRcdFx0ICA8YSA+RWRpdDwvYT5cblx0XHRcdCAgPGEgKGNsaWNrKT1cInRpdG9TZXJ2aWNlLmRlbGV0ZSh0aXRvKVwiPkRlbGV0ZTwvYT5cblx0XHRcdDwvbGk+XG5cdGBcblxuXG59KVxuZXhwb3J0IGNsYXNzIFRpdG9JdGVte1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdG9TZXJ2aWNlOiBUaXRvU2VydmljZSl7XG5cdH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
