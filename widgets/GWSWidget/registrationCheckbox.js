// JavaScript source code
// function to perfrom arcgis layer query
define([
        "dojo/_base/declare",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/dom-class",
        "dojo/on",
        "dojo/_base/lang",
        "dijit/form/CheckBox",
        "dojo/text!./registrationCheckbox.html"
    ],
    function(
        declare,
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin,
        domClass,
        on,
        lang,
        CheckBox,
        registrationCheckbox
    ) {
        return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

            widgetsInTemplate: true,
            templateString: registrationCheckbox,
            layerOn: false,
            registrationComplete: null,
            activeCallbackEvt: true,

            postCreate: function() {
                console.log(this.value);

                var ischecked = (this.value === 2) ? false : true;
                this.registrationComplete = new CheckBox({
                    name: "regId",
                    id: "regId",
                    value: "agreed",
                    checked: ischecked
                });

                this.registrationComplete.placeAt(this.containerCB, "first");

                this.registrationComplete.startup();

                this.own(on(this.registrationComplete, "Change", lang.hitch(this, this.changeEvt)));

            },
            changeEvt: function (e) {
                if (this.activeCallbackEvt) {
                    this.onClickCheckbox(e);
                }
                this.activeCallbackEvt = true;
            },

            onClickCheckbox: function() {
                // This can be left empty, it will be used as the extension point
            }
        })
    })