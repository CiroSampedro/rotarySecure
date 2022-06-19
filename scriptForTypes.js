$(() => {
    $(".type-item").on("click", function()  {
        $(this).toggleClass("selected")
        $(".type-item").hide("slow")
        $("#thanks").show("slow").textContent = "Felicidades su plan ha sido registrado"
    })
})