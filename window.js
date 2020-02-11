$(() => {
    const neon = require('capra-neon');

    // $('#text-input').bind('input propertychange', function() {
    //     const text = this.value
    //
    //     const md5 = crypto.createHash('md5').update(text, 'utf8').digest('hex')
    //     $('#md5-output').text(md5)
    //
    //     const sha1 = crypto.createHash('sha1').update(text, 'utf8').digest('hex')
    //     $('#sha1-output').text(sha1)
    //
    //     const sha256 = crypto.createHash('sha256').update(text, 'utf8').digest('hex')
    //     $('#sha256-output').text(sha256)
    //
    //     const sha512 = crypto.createHash('sha512').update(text, 'utf8').digest('hex')
    //     $('#sha512-output').text(sha512)
    // });

    $('#submit').bind('click', function () {
        const depth = parseInt($("#depth-input").val());
        const time = parseInt($("#length-input").val());
        console.log(depth);
        console.log(time);

        const ndl = neon.ndlDemo(depth, time);

        $('#ndl-output').text(ndl)
    })

    $('#text-input').focus() // focus input box
});