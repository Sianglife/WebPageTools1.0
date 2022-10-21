function ongo() {
    var low = $('#low').val();
    var high = $('#high').val();
    var out = (Math.floor(Math.random() * high) + low)
    $('#output').html(out);
}