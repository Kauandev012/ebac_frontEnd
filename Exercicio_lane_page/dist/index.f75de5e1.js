AOS.init();
const dataEvento = new date("nov 18, 2024 18:00:00");
const timeStampEvento = dataEvento.getTime();
const contaTempo = setInterval(function() {
    const hoje = new dataEvento();
    const timeStampAgora = hoje.getTime();
    const tempoAteOEvento = timeStampEvento - timeStampAgora;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteOEvento = math.floor(tempoAteOEvento / diaEmMs);
    const horasAteOEvento = math.floor(tempoAteOEvento % diaEmMs / horaEmMs);
    const minutosAteOEvento = math.floor(tempoAteOEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = math.floor((tempoAteOEvento & minutoEmMs) / 1000);
    document.getElementById("TimerEvent").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
