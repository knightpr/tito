System.register(['angular2/core', '../services/user.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                // //console.log("here");
                // //console.log(UserService.getUser());
                //users: Tito[];
                function UserComponent(userService) {
                    this.userService = userService;
                }
                UserComponent.prototype.getUsers = function () {
                    this.user = this.userService.getUser();
                };
                UserComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user-section',
                        template: "\n\t\t\t<h1>welcome Mr. {{user.name}} @ {{user.company}}</h1>\n\t\t\t<h2>Timesheet for june</h2>\n\t\t\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"#tito of user.titos\">\n\t\t\t\t\t{{tito.id}} - {{tito.status}} @ {{tito.at}}\n\t\t\t\t</li>\n\n\t\t\t\n\t\t\t</ul>\n\t",
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBR0MseUJBQXlCO2dCQUN6Qix3Q0FBd0M7Z0JBQ3hDLGdCQUFnQjtnQkFFZix1QkFBb0IsV0FBd0I7b0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO2dCQUFJLENBQUM7Z0JBQ2pELGdDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN2QyxDQUFDO2dCQUNELGdDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixDQUFDO2dCQWhDSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBQyxjQUFjO3dCQUN2QixRQUFRLEVBQUMsa1FBV1I7d0JBQ0EsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFHekIsQ0FBQzs7aUNBQUE7Z0JBcUJGLG9CQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCx5Q0FtQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3VzZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1RpdG99IGZyb20gJy4uL21vZGVscy90aXRvJztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6J3VzZXItc2VjdGlvbicsXG5cdHRlbXBsYXRlOmBcblx0XHRcdDxoMT53ZWxjb21lIE1yLiB7e3VzZXIubmFtZX19IEAge3t1c2VyLmNvbXBhbnl9fTwvaDE+XG5cdFx0XHQ8aDI+VGltZXNoZWV0IGZvciBqdW5lPC9oMj5cblx0XHRcblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpICpuZ0Zvcj1cIiN0aXRvIG9mIHVzZXIudGl0b3NcIj5cblx0XHRcdFx0XHR7e3RpdG8uaWR9fSAtIHt7dGl0by5zdGF0dXN9fSBAIHt7dGl0by5hdH19XG5cdFx0XHRcdDwvbGk+XG5cblx0XHRcdFxuXHRcdFx0PC91bD5cblx0YCxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdXG5cblxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJDb21wb25lbnR7XG5cblxuXHQvLyAvL2NvbnNvbGUubG9nKFwiaGVyZVwiKTtcblx0Ly8gLy9jb25zb2xlLmxvZyhVc2VyU2VydmljZS5nZXRVc2VyKCkpO1xuXHQvL3VzZXJzOiBUaXRvW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgfVxuICBnZXRVc2VycygpIHtcbiAgIHRoaXMudXNlcj0gdGhpcy51c2VyU2VydmljZS5nZXRVc2VyKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRVc2VycygpO1xuICB9XG5cdC8vdXNlciA9IG5ldyBVc2VyKCk7XG5cdC8vIHVzZXIgPSBuZXcgVXNlcignUHJlbSBHdXB0YTEnLCdwcmVtLmd1cHRhQGtjYy5lZHUubnAnLCdBQkMgU1JMJywgW3RoaXMudGl0bzEsdGhpcy50aXRvMix0aGlzLnRpdG8zLHRoaXMudGl0bzRdKTtcblxuXHQvLyBcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
