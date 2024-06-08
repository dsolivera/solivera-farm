var greetingLine1 = "a Software developer who loves solving problems and learning continuously;";
var greetingLine2 = "an Alumnus of University of California, San Diego.";
var greetingLine3 = "I am a tech guy who loves cars and just tinkering in general.";


$(document).ready(function() {
    $(document).foundation();
    new FastClick(document.body);

    $(".scroll-prompter").hide();

    $(".scroll-prompter a").click(function() {
        $(this).fadeOut(200);
        $.scrollTo(".skill-logos", {duration: 400});
        $(window).scroll(function() {
            if ($(this).scrollTop() == 0)
                $(".scroll-prompter a").fadeIn(400);
        });
    });

    $(".intro-greeting").hide().slideDown('slow', function() {
        $(".intro-text-1").typed({
            strings: ["^1500" + greetingLine1 + "^1800"],
            typeSpeed: 0,
            cursorChar: " |",
            callback: function() {
                $(".typed-cursor").fadeOut("fast");
                $(".intro-text-2").typed({
                    strings: [greetingLine2 + "^1800<br>"],
                    typeSpeed: 0,
                    cursorChar: " |",
                    callback: function() {
                        $(".typed-cursor").fadeOut("fast");
                        $(".intro-text-3").typed({
                            strings: [greetingLine3],
                            typeSpeed: 0,
                            cursorChar: " |",
                            callback: function() {
                                $(".scroll-prompter").fadeIn("slow");
                            }
                        });
                    }
                });
            }
        });
    });

    $(".site-intro").click(function(e) {
        // Hides all three lines and breaks in one go
        $(".intro-text-1").parent().hide();

        $(".intro-text-1-skipped").html(greetingLine1);
        $(".intro-text-2-skipped").html(greetingLine2);
        $(".intro-text-3-skipped").html(greetingLine3);

        $(".scroll-prompter").fadeIn("slow");
        $(".typed-cursor").hide();
    });
});
