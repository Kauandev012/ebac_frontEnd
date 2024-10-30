AOS.init();
const dataEvento = new Date("nov 18, 2024 18:00:00");
const timeStampEvento = dataEvento.getTime();
const contaTempo = setInterval(function() {
    const hoje = new Date();
    const timeStampAgora = hoje.getTime();
    const tempoAteOEvento = timeStampEvento - timeStampAgora;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor(tempoAteOEvento % diaEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(tempoAteOEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = Math.floor((tempoAteOEvento & minutoEmMs) / 1000);
    document.getElementById("TimerEvent").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (tempoAteOEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById("TimerEvent").innerHTML = "Opss a festa ja rolou!";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
