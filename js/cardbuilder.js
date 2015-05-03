<script>
$("#recipe").keyup(function() {
document.getElementById('test').innerHTML=''; $("#test").text($("#recipe").val());
});
$("#name").keyup(function() {
document.getElementById('yourname').innerHTML=''; $("#yourname").text($("#name").val());
});
</script>