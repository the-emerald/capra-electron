$(() => {
    const neon = require('capra-neon');

    $('#submit').bind('click', function () {
        const depth = parseInt($("#depth-input").val());
        const time = parseInt($("#length-input").val());
        console.log(depth);
        console.log(time);
        if (isNaN(depth) || isNaN(time)) {
            $('#ndl-output').text("Invalid input");
            return
        }
        try {
            const ndl = neon.ndlDemo(depth, time);
            if (ndl === 0) {
                $('#ndl-output').text("Decompression");
            }
            else {
                $('#ndl-output').text(ndl);
            }
        }
        catch (e) {
            $('#ndl-output').text("Invalid input");
        }

    })
});