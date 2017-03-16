
    // (function($) {
    //     $(document).ready(function() {
    //         AJS.$("#customfield_10000 option[value='-1']").remove(); //Removes the default value "None"
    //         function convertMulti(id) {
    //             var myVar = 234;
    //             console.log(myVar);
    //             if (AJS.$('#' + id + "-textarea").length == 0) {
    //                 new AJS.MultiSelect({
    //                     element: $("#" + id),
    //                     itemAttrDisplayed: "label",
    //                     errorMessage: AJS.params.multiselectComponentsError
    //                 });
    //             }
    //         }
    //
    //         AJS.toInit(function () {
    //             convertMulti("customfield_10000");
    //         })
    //
    //         JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (e, context) {
    //             AJS.$("#customfield_<10000> option[value='-1']").remove();
    //             convertMulti("customfield_<10000>");
    //         });
    //     });
    // })(AJS.$ || jQuery);

    (function($) {
        $(document).ready(function() {
           var test = "The file has been loaded!!!";
           console.log(test);
        });
    })(AJS.$ || jQuery);

    // var myVar = 234;
    // console.log(myVar);