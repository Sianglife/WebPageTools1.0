function ongo() {
    var low = $('#low').val();
    var high = $('#high').val();
    var out = (Math.floor(Math.random() * high) + low)
    console.log(low,high,out)
    $('#output').html(out);
}