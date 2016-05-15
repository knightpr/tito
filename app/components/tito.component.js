System.register(['angular2/core', '../components/titoItem.component', '../services/tito.service'], function(exports_1, context_1) {
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
    var core_1, titoItem_component_1, tito_service_1;
    var TitoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (titoItem_component_1_1) {
                titoItem_component_1 = titoItem_component_1_1;
            },
            function (tito_service_1_1) {
                tito_service_1 = tito_service_1_1;
            }],
        execute: function() {
            TitoComponent = (function () {
                function TitoComponent(titoService) {
                    this.titoService = titoService;
                    this.titos = titoService.gettitos();
                }
                TitoComponent = __decorate([
                    core_1.Component({
                        selector: 'tito-list',
                        template: "\n\t\t  <a (click)=\"titoService.add('in')\">[IN]</a>\n\t\t \n\t\t  <a (click)=\"titoService.add('out')\">[OUT]</a>\n\t\t  <ul>\n      \t\t<tito-item *ngFor=\"#tito of titos\" [tito]=\"tito\"></tito-item>\n    \t  </ul>\n\t",
                        directives: [titoItem_component_1.TitoItem],
                        providers: [tito_service_1.TitoService]
                    }), 
                    __metadata('design:paramtypes', [tito_service_1.TitoService])
                ], TitoComponent);
                return TitoComponent;
            }());
            exports_1("TitoComponent", TitoComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGl0by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0MsdUJBQW9CLFdBQXdCO29CQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3JDLENBQUM7Z0JBcEJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFDLFdBQVc7d0JBQ3BCLFFBQVEsRUFBQyxpT0FPUjt3QkFDRCxVQUFVLEVBQUUsQ0FBQyw2QkFBUSxDQUFDO3dCQUN0QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUd4QixDQUFDOztpQ0FBQTtnQkFRRixvQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQseUNBT0MsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3RpdG8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUaXRvSXRlbX0gZnJvbSAnLi4vY29tcG9uZW50cy90aXRvSXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtUaXRvU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdGl0by5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J3RpdG8tbGlzdCcsXG5cdHRlbXBsYXRlOmBcblx0XHQgIDxhIChjbGljayk9XCJ0aXRvU2VydmljZS5hZGQoJ2luJylcIj5bSU5dPC9hPlxuXHRcdCBcblx0XHQgIDxhIChjbGljayk9XCJ0aXRvU2VydmljZS5hZGQoJ291dCcpXCI+W09VVF08L2E+XG5cdFx0ICA8dWw+XG4gICAgICBcdFx0PHRpdG8taXRlbSAqbmdGb3I9XCIjdGl0byBvZiB0aXRvc1wiIFt0aXRvXT1cInRpdG9cIj48L3RpdG8taXRlbT5cbiAgICBcdCAgPC91bD5cblx0YCxcblx0ZGlyZWN0aXZlczogW1RpdG9JdGVtXSxcblx0cHJvdmlkZXJzOiBbVGl0b1NlcnZpY2VdXG5cblxufSlcbmV4cG9ydCBjbGFzcyBUaXRvQ29tcG9uZW50e1xuXHRwdWJsaWMgdGl0b3M6IEFycmF5PGFueT47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSB0aXRvU2VydmljZTogVGl0b1NlcnZpY2Upe1xuXHRcdHRoaXMudGl0b3MgPSB0aXRvU2VydmljZS5nZXR0aXRvcygpO1xuXHR9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
