import { Clientes, db, Motors } from 'astro:db';

// https://astro.build/db/seed

await db.insert(Motors).values([{ id: 123, marca:"pedrollo", hp:"3", rpm:"3600", volt:"120/220", amp:"12", modelo:"yaskawua", pasoMarcha: "tasdfagd", vueltaMarcha: "asasfsdaf", calibreMarcha: "fasafs", pasoArranque: "fasasfa", vueltaArranque: "fasda", calibreArranque: "asdafas", bobinadoMarcha: "dfafgasgahedf", bobinadoArranque: "aagasd" }]);
await db.insert(Motors).values([{ id: 896172, marca:"WAG", hp:"1", rpm:"1200", volt:"120/220", amp:"6", modelo:"yaskawua", pasoMarcha: "tasdfagd", vueltaMarcha: "asasfsdaf", calibreMarcha: "fasafs", pasoArranque: "fasasfa", vueltaArranque: "fasda", calibreArranque: "asdafas", bobinadoMarcha: "dfafgasgahedf", bobinadoArranque: "aagasd" }]);
await db.insert(Motors).values([{ id: 2987105, marca:"TATNAHUER", hp:"1/2", rpm:"4800", volt:"480", amp:"5", modelo:"yaskawua", pasoMarcha: "tasdfagd", vueltaMarcha: "asasfsdaf", calibreMarcha: "fasafs", pasoArranque: "fasasfa", vueltaArranque: "fasda", calibreArranque: "asdafas", bobinadoMarcha: "dfafgasgahedf", bobinadoArranque: "aagasd" }]);
await db.insert(Motors).values([{ id: 572030, marca:"ABB", hp:"5", rpm:"3600", volt:"220", amp:"9", modelo:"yaskawua", pasoMarcha: "tasdfagd", vueltaMarcha: "asasfsdaf", calibreMarcha: "fasafs", pasoArranque: "fasasfa", vueltaArranque: "fasda", calibreArranque: "asdafas", bobinadoMarcha: "dfafgasgahedf", bobinadoArranque: "aagasd" }]);
await db.insert(Motors).values([{ id: 1957691, marca:"W.u.a.m", hp:"2", rpm:"2100", volt:"220", amp:"4", modelo:"yaskawua", pasoMarcha: "tasdfagd", vueltaMarcha: "asasfsdaf", calibreMarcha: "fasafs", pasoArranque: "fasasfa", vueltaArranque: "fasda", calibreArranque: "asdafas", bobinadoMarcha: "dfafgasgahedf", bobinadoArranque: "aagasd" }]);


await db.insert(Clientes).values([{ motorId: 123, nombre:"Gocho escalona", fecha:"03/04/2024", observaciones:"el motor estaba trancado" }])
await db.insert(Clientes).values([{ motorId: 896172, nombre:"Armando", fecha:"23/02/2023", observaciones:"tenia explotado el capacitor" }])
await db.insert(Clientes).values([{ motorId: 896172, nombre:"Juan", fecha:"30/03/2023", observaciones:"bobinado quemado, reparacion completa" }])
await db.insert(Clientes).values([{ motorId: 2987105, nombre:"pedro", fecha:"02/01/2024", observaciones:"bobinado quemado, reparacion completa" }])
await db.insert(Clientes).values([{ motorId: 572030, nombre:"Maria jimenes", fecha:"09/11/2023", observaciones:"mantenimiento, cambio de rolineras" }])
await db.insert(Clientes).values([{ motorId: 1957691, nombre:"Hernan", fecha:"22/07/2022", observaciones:"alto consumo de corriente" }])


export default async function seed() {
}
