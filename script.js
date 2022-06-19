function consultas(anio, brand, model, nro) {
    this.anio = anio
    this.brand = brand
    this.model = model
    this.nro = nro;

    this.greeting = function () {
        console.log(consultas)
    }
}
$(() => {
    let autos = []
    let i = 0;
    const btn = document.querySelector('#buttom');
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        i++;
        $("#consult").textcontent = "Esta es tu consulta Nro " + i;
        let anio = Number($("#anio").val());
        let brand = $("#brand").val();
        let model = ($("#model").val());
        console.log(anio);
        console.log(brand);
        console.log(model);
        if (anio > 1990) {
            document.getElementById("text").textContent = `Su auto no se considera clasico`;
        } else if (anio < 1900) {
            document.getElementById("text").textContent = `Ingrese un numero valido por favor`;
        } else {
            document.getElementById("thanks").textContent = `Felicidades su auto ${model} de la marca ${brand} del año ${anio} se ha registrado corectamente`;
        }
        autos.push(anio, brand, model);
        localStorage.setItem("auto", (JSON.stringify(autos)));     
    });
});

