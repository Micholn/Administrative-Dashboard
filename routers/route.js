var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var validator = require('express-validator');

module.exports = function (app) {

      function isUserAllowed(req, res, next) {
            sess = req.session;
            if (sess.user) {
                  return next();
            }
            else { res.redirect('/login'); }
      }

      app.get('/', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard' };
            res.render('Dashboard/index');
      });

      // Layouts 
      app.get('/layouts-light-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Light Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsLightSidebar' });
      });
      app.get('/layouts-compact-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Compact Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsCompactSidebar' });
      });
      app.get('/layouts-icon-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Icon Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsIconSidebar' });
      });
      app.get('/layouts-boxed', isUserAllowed, function (req, res) {
            res.locals = { title: 'Boxed Width' };
            res.render('Dashboard/index', { layout: 'layoutsBoxed' });
      });
      app.get('/layouts-preloader', isUserAllowed, function (req, res) {
            res.locals = { title: 'Preloader' };
            res.render('Dashboard/index', { layout: 'layoutsPreloader' });
      });
      app.get('/layouts-colored-sidebar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Colored Sidebar' };
            res.render('Dashboard/index', { layout: 'layoutsColoredSidebar' });
      });


      app.get('/layouts-horizontal', isUserAllowed, function (req, res) {
            res.locals = { title: 'Horizontal' };
            res.render('Dashboard/index', { layout: 'layoutsHorizontal' });
      });
      app.get('/layouts-hori-topbar-dark', isUserAllowed, function (req, res) {
            res.locals = { title: 'Topbar Dark' };
            res.render('Dashboard/index', { layout: 'layoutsHTopbarDark' });
      });
      app.get('/layouts-hori-boxed-width', isUserAllowed, function (req, res) {
            res.locals = { title: 'Boxed Width' };
            res.render('Dashboard/index', { layout: 'layoutsHBoxed' });
      });
      app.get('/layouts-hori-preloader', isUserAllowed, function (req, res) {
            res.locals = { title: 'Preloader' };
            res.render('Dashboard/index', { layout: 'layoutsHPreloader' });
      });

      // Dark and RTL Mode Vertical
      app.get("/vertical-dark", isUserAllowed, function (req, res) {
            res.locals = { title: 'Vertical Dark' };
            res.render("Dashboard/index", { layout: "vertical-dark-layout" });
      });

      app.get("/vertical-rtl", isUserAllowed, function (req, res) {
            res.locals = { title: 'Vertical Rtl' };
            res.render("Dashboard/index", { layout: "vertical-rtl-layout" });
      });

      // Dark and RTL Mode Horizontal
      app.get("/horizontal-dark", isUserAllowed, function (req, res) {
            res.locals = { title: 'Horizontal Dark' };
            res.render("Dashboard/index", { layout: "horizontal-dark-layout" });
      });

      app.get("/horizontal-rtl", isUserAllowed, function (req, res) {
            res.locals = { title: 'Horizontal Rtl' };
            res.render("Dashboard/index", { layout: "horizontal-rtl-layout" });
      });

      // Calendar
      app.get('/calendar', isUserAllowed, function (req, res) {
            res.locals = { title: 'Calendar' };
            res.render('Calendar/calendar');
      });

      // Email
      app.get('/email-inbox', isUserAllowed, function (req, res) {
            res.locals = { title: 'Inbox' };
            res.render('Email/email-inbox');
      });
      app.get('/email-read', isUserAllowed, function (req, res) {
            res.locals = { title: 'Email Read' };
            res.render('Email/email-read');
      });
      app.get('/email-compose', isUserAllowed, function (req, res) {
            res.locals = { title: 'Email Compose' };
            res.render('Email/email-compose');
      });

      // UI Elements
      app.get('/ui-alerts', isUserAllowed, function (req, res) {
            res.locals = { title: 'Alerts' };
            res.render('Ui/ui-alerts');
      });
      app.get('/ui-buttons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Buttons' };
            res.render('Ui/ui-buttons');
      });
      app.get('/ui-badge', isUserAllowed, function (req, res) {
            res.locals = { title: 'Budge' };
            res.render('Ui/ui-badge');
      });
      app.get('/ui-cards', isUserAllowed, function (req, res) {
            res.locals = { title: 'Cards' };
            res.render('Ui/ui-cards');
      });
      app.get('/ui-carousel', isUserAllowed, function (req, res) {
            res.locals = { title: 'Carousel' };
            res.render('Ui/ui-carousel');
      });
      app.get('/ui-dropdowns', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dropdowns' };
            res.render('Ui/ui-dropdowns');
      });
      app.get('/ui-grid', isUserAllowed, function (req, res) {
            res.locals = { title: 'Grid' };
            res.render('Ui/ui-grid');
      });
      app.get('/ui-images', isUserAllowed, function (req, res) {
            res.locals = { title: 'Images' };
            res.render('Ui/ui-images');
      });
      app.get('/ui-lightbox', isUserAllowed, function (req, res) {
            res.locals = { title: 'Lightbox' };
            res.render('Ui/ui-lightbox');
      });
      app.get('/ui-modals', isUserAllowed, function (req, res) {
            res.locals = { title: 'Modals' };
            res.render('Ui/ui-modals');
      });
      app.get('/ui-pagination', isUserAllowed, function (req, res) {
            res.locals = { title: 'Pagination' };
            res.render('Ui/ui-pagination');
      });
      app.get('/ui-popover-tooltips', isUserAllowed, function (req, res) {
            res.locals = { title: 'Popover & Tooltips' };
            res.render('Ui/ui-popover-tooltips');
      });
      app.get('/ui-rangeslider', isUserAllowed, function (req, res) {
            res.locals = { title: 'Range Slider' };
            res.render('Ui/ui-rangeslider');
      });
      app.get('/ui-session-timeout', isUserAllowed, function (req, res) {
            res.locals = { title: 'Session Timeout' };
            res.render('Ui/ui-session-timeout');
      });
      app.get('/ui-progressbars', isUserAllowed, function (req, res) {
            res.locals = { title: 'Progress Bars' };
            res.render('Ui/ui-progressbars');
      });
      app.get('/ui-sweet-alert', isUserAllowed, function (req, res) {
            res.locals = { title: 'SweetAlert 2' };
            res.render('Ui/ui-sweet-alert');
      });
      app.get('/ui-tabs-accordions', isUserAllowed, function (req, res) {
            res.locals = { title: 'Tabs & Accordions' };
            res.render('Ui/ui-tabs-accordions');
      });
      app.get('/ui-typography', isUserAllowed, function (req, res) {
            res.locals = { title: 'Typography' };
            res.render('Ui/ui-typography');
      });
      app.get('/ui-video', isUserAllowed, function (req, res) {
            res.locals = { title: 'Video' };
            res.render('Ui/ui-video');
      });

      // Forms
      app.get('/form-elements', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Elements' };
            res.render('Form/form-elements');
      });
      app.get('/form-validation', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Validation' };
            res.render('Form/form-validation');
      });
      app.get('/form-advanced', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Advanced' };
            res.render('Form/form-advanced');
      });
      app.get('/form-editors', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Editors' };
            res.render('Form/form-editors');
      });
      app.get('/form-uploads', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form File Uploads' };
            res.render('Form/form-uploads');
      });
      app.get('/form-xeditable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Form Xeditable' };
            res.render('Form/form-xeditable');
      });

      // Charts
      app.get('/charts-morris', isUserAllowed, function (req, res) {
            res.locals = { title: 'Morris Chart' };
            res.render('Charts/charts-morris');
      });
      app.get('/charts-chartist', isUserAllowed, function (req, res) {
            res.locals = { title: 'Chartist Chart' };
            res.render('Charts/charts-chartist');
      });
      app.get('/charts-chartjs', isUserAllowed, function (req, res) {
            res.locals = { title: 'Chartjs Chart' };
            res.render('Charts/charts-chartjs');
      });
      app.get('/charts-flot', isUserAllowed, function (req, res) {
            res.locals = { title: 'Flot Chart' };
            res.render('Charts/charts-flot');
      });
      app.get('/charts-c3', isUserAllowed, function (req, res) {
            res.locals = { title: 'C3 Chart' };
            res.render('Charts/charts-c3');
      });
      app.get('/charts-other', isUserAllowed, function (req, res) {
            res.locals = { title: 'Jquery Knob Chart' };
            res.render('Charts/charts-other');
      });

      // Tables
      app.get('/tables-basic', isUserAllowed, function (req, res) {
            res.locals = { title: 'Basic Tables' };
            res.render('Tables/tables-basic');
      });
      app.get('/tables-datatable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Data Table' };
            res.render('Tables/tables-datatable');
      });
      app.get('/tables-responsive', isUserAllowed, function (req, res) {
            res.locals = { title: 'Responsive Table' };
            res.render('Tables/tables-responsive');
      });
      app.get('/tables-editable', isUserAllowed, function (req, res) {
            res.locals = { title: 'Editable Table' };
            res.render('Tables/tables-editable');
      });

      // Icons
      app.get('/icons-material', isUserAllowed, function (req, res) {
            res.locals = { title: 'Material Design' };
            res.render('Icons/icons-material');
      });
      app.get('/icons-ion', isUserAllowed, function (req, res) {
            res.locals = { title: 'Ion Icons' };
            res.render('Icons/icons-ion');
      });
      app.get('/icons-fontawesome', isUserAllowed, function (req, res) {
            res.locals = { title: 'Font Awesome' };
            res.render('Icons/icons-fontawesome');
      });
      app.get('/icons-themify', isUserAllowed, function (req, res) {
            res.locals = { title: 'Themify Icons' };
            res.render('Icons/icons-themify');
      });
      app.get('/icons-dripicons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Dripicons' };
            res.render('Icons/icons-dripicons');
      });
      app.get('/icons-typicons', isUserAllowed, function (req, res) {
            res.locals = { title: 'Typicons Icons' };
            res.render('Icons/icons-typicons');
      });

      // Maps
      app.get('/maps-google', isUserAllowed, function (req, res) {
            res.locals = { title: 'Google Map' };
            res.render('Maps/maps-google');
      });
      app.get('/maps-vector', isUserAllowed, function (req, res) {
            res.locals = { title: 'Vector Map' };
            res.render('Maps/maps-vector');
      });

      // Pages
      app.get('/pages-timeline', isUserAllowed, function (req, res) {
            res.locals = { title: 'Timeline' };
            res.render('Pages/pages-timeline');
      });
      app.get('/pages-invoice', isUserAllowed, function (req, res) {
            res.locals = { title: 'Invoice' };
            res.render('Pages/pages-invoice');
      });
      app.get('/pages-directory', isUserAllowed, function (req, res) {
            res.locals = { title: 'Directory' };
            res.render('Pages/pages-directory');
      });
      app.get('/pages-blank', isUserAllowed, function (req, res) {
            res.locals = { title: 'Blank Page' };
            res.render('Pages/pages-blank');
      });
      
}