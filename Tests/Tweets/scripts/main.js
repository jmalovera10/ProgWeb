"use strict";

function Student(name) {
    var me = {},
    program = "CS",
    pic = "general.png";

    me.program = function (_program) {
        if(arguments.length>0){
            program = _program;
            return me;
        }else{
            return program;
        }
    };
    me.screen_name = name;
    me.profile_pic = function (_profile_pic) {
        return (arguments.length>0)? (pic = _profile_pic,me) :pic;
    };
    me.appendToElement = function (base) {
         base.append("<div>")
             .text("Student "+name+" Program "+ program+" pic "+pic);
         return me;
    };
    return me;
}

$.getJSON("files/web_dev_data.json", function(data){
    var students = [], i = 0;
    data.forEach(function (d) {
        var tweet1 = data[0];
        var student1 = Student(tweet1.user.screen_name)
            .program("CS")
            .profile_pic(tweet1.user.profile_image_url);
        student1.appendToElement($("#students"));
    });

});