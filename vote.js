 $(function() {
    function e(e) {
        return e ? e.replace(/\n$/, "<br>&nbsp;").replace(/\n/g, "<br>") : "write whatever <br>you feel like"
    }

    function n() {
        var e = o.height(),
            n = Math.max(0, .5 * (e - a.height()));
        i.css({
            paddingTop: n,
            height: e - n
        })
    }

    function t(e) {
        if (e.files && e.files[0]) {
            var t = new FileReader;
            t.onload = function(e) {
                $("#bg").attr("src", e.target.result)
            }, t.readAsDataURL(e.files[0]), setTimeout(function() {
                n()
            }, 100)
        }
    }
    var o = $("#profile"),
        i = $("stamp-vote"),
        a = $(".dummy");
    i.on("keyup change", function(t) {
        var o = e(i.val());
        a.html(o), n()
    }).trigger("change"), $(window).on("resize", n), $(".save-img").click(function() {
        window.scrollTo(0, 0), html2canvas(document.querySelector("#profile")).then(function(e) {
            e.toBlob(function(e) {
                saveAs(e, "I-AM-VOTING.png")
            })
        })
    }), $("#file").change(function() {
        t(this)
    })
});