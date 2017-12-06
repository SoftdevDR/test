import { Component, AfterViewInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
	name:string;
  	showHide:boolean;
    upDown: boolean;
  	constructor() {
        this.showHide = true;
        this.upDown = true;
  	}
  
  	changeShowStatus(){
    	this.showHide = !this.showHide;
  	}
    
    ngAfterViewInit() {
        const _this = this;
        $(function () {
            $(".preloader").fadeOut();
        });

        var set = function () {
            
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            var topOffset = 70;
            if (width < 1170) {
                $("body").addClass("mini-sidebar");
                $('.navbar-brand span').hide();
                $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
                $(".navbar-collapse").addClass("navbar-collapse-mobile");
            } else {
                $("body").removeClass("mini-sidebar");
                $('.navbar-brand span').show();
                //$(".sidebartoggler i").removeClass("ti-menu");
            }

            var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
            height = height - topOffset;
            if (height < 1) height = 1;
            if (height > topOffset) {
                $(".page-wrapper").css("min-height", (height) + "px");
            }

        };

        $(".transparent-right-btn").on('click', function () {
            
            if(_this.upDown == true){
                $(".topbar").css("display", "none");
                $(".transparent-right-btn a i").removeClass("icon-arrow-up").addClass("icon-arrow-down");
                $(".transparent-right-btn, .transparent-left-btn").addClass("transparent-btn");
                $(".left-sidebar").css("padding-top", "0");
                _this.upDown = false;
            } else {
                $(".topbar").css("display", "block");
                $(".transparent-right-btn a i").removeClass("transparent-btn").addClass("icon-arrow-up");
                $(".transparent-right-btn, .transparent-left-btn").removeClass("transparent-btn");
                $(".left-sidebar").css("padding-top", "70px");
                _this.upDown = true;
            }
        });

        $(window).ready(set);
        $(window).on("resize", set);

        $(document).on('click', '.mega-dropdown', function (e) {
            e.stopPropagation();
        });
        
        $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
            $(".app-search").toggle(200);
        });

        (<any>$('[data-toggle="tooltip"]')).tooltip();

        (<any>$('.scroll-sidebar')).slimScroll({
            position: 'left',
            size: "5px",
            height: '100%',
            color: '#dcdcdc'
        });

        (<any>$('.right-sidebar')).slimScroll({
            height: '100%',
            position: 'right',
            size: "5px",
            color: '#dcdcdc'
        });

        (<any>$('.message-center')).slimScroll({
            position: 'right',
            size: "5px",
            color: '#dcdcdc'
        });

        $("body").trigger("resize");
    }
}
