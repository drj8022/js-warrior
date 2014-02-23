'use strict';

var Menu = {

    activePosition: 0,
    columns: 2,
    $wrap: undefined,
    $menu: undefined,
    $activeMenu: undefined,

    init: function init() {
console.log('INIT: Menu');
        Menu.$wrap = $('#menu');
        Menu.$menu = $('ul', Menu.$wrap);
        Menu.$activeMenu = $('#default', Menu.$wrap);
    },



    /**
    * Move the cursor around on the menu
    */
    moveLeft: function moveLeft() {
        if (Menu.activePosition > 0) { 
            Menu.activePosition--;
            Menu.updateActive();
        }
    },

    moveUp: function moveUp() {
        if (Menu.activePosition >= Menu.columns) { 
            Menu.activePosition -= Menu.columns;
            Menu.updateActive();
        }
    },

    moveRight: function moveRight() {
        if (Menu.activePosition < Menu.$activeMenu.children('li').length - 1) { 
            Menu.activePosition++;
            Menu.updateActive();
        }
    },

    moveDown: function moveDown() {
        if (Menu.activePosition < Menu.$activeMenu.children('li').length - Menu.columns) { 
            Menu.activePosition += Menu.columns;
            Menu.updateActive();
        }
    },

    updateActive: function updateActive() {
        console.log(Menu.$activeMenu);
        Menu.$activeMenu.show();
        Menu.$activeMenu.children('li').removeClass('active').eq(Menu.activePosition).addClass('active');
        //console.log(Menu.$wrap.children('#' + Menu.$activeMenu));
        //Menu.$wrap.children('#' + Menu.active).show().children('li').removeClass('active').eq(Menu.activePosition).addClass('active');    // LOL
        //Menu.$menu.removeClass('active').eq(Menu.activePosition).addClass('active');
    },



    /**
    * Show and hide menu wrap
    */
    show: function init() {
        Menu.updateActive();
        Menu.$wrap.fadeIn(400);
    },

    hide: function init() {
        Menu.$wrap.fadeOut(50, function(){
            Menu.activePosition = 0;
            Menu.$activeMenu = $('#default', Menu.$wrap);
        });
    },



    /**
    * Handle confirm / cancel actions for menus.
    */
    trigger: function trigger() {
        // If this item has an action, try to fire it.
        //console.log(Menu.$activeMenu.children('li.active').data('action'));

        var action = Menu.$activeMenu.children('li.active').data('action');
        var nextMenu = Menu.$activeMenu.children('li.active').data('menu');
        //var action = Menu.$menu.eq(Menu.activePosition).data('action');
            //nextMenuDown = Menu.$wrap.children('#' + );
//            nextMenuDown = Menu.$menu.eq(Menu.activePosition).children('ul');
        
        if (action) {
            if (Menu.hasOwnProperty(action)) {
                Menu[action]();
            } else {
    			throw new Error("no such method: " + action ); // Die if invalid action.
            }
        }

        // If this item has another menu below it, show that instead
        if (nextMenu) {
            console.log(nextMenu);
            Menu.$activeMenu.hide();
            Menu.$activeMenu = $('#' + nextMenu, Menu.$wrap);
            //Menu.$activeMenu.show();
            Menu.activePosition = 0,
            Menu.updateActive();
            //console.log(nextMenuDown.attr('class'));
            //Menu.$span.hide();
            //nextMenuDown.show();
        }
    },

    revert: function revert() {
        //console.log(Menu.$menu.eq(Menu.activePosition));
    },



    /**
    * Custom menu actions
    */
    doSearch: function doSearch() {
        console.log('doSearch');
        Rpg.updateMode();
        Menu.hide();
    },


};




