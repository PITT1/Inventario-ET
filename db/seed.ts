import { Clientes, db, Motors } from 'astro:db';

// https://astro.build/db/seed

await db.insert(Motors).values([{ id: 123, marca:"pedrollo", hp:"3", rpm:"3600", volt:"120", amp:"12", modelo:"yaskawua", pasoMarcha: "tasdfagd", vueltaMarcha: "asasfsdaf", calibreMarcha: "fasafs", pasoArranque: "fasasfa", vueltaArranque: "fasda", calibreArranque: "asdafas", bobinadoMarcha: "dfafgasgahedf", bobinadoArranque: "aagasd" }]);

await db.insert(Clientes).values([{ clientId: 123, nombre:"Gocho escalona", fecha:"03/04/2024", observaciones:"el motor estaba trancado" }])
await db.insert(Clientes).values([{ clientId: 123, nombre:"Armando", fecha:"23/02/2023", observaciones:"tenia explotado el capacitor" }])
await db.insert(Clientes).values([{ clientId: 123, nombre:"Juan", fecha:"30/03/2023", observaciones:"bobinado quemado, reparacion completa" }])
await db.insert(Clientes).values([{ clientId: 123, nombre:"pedro", fecha:"02/01/2024", observaciones:"bobinado quemado, reparacion completa" }])
await db.insert(Clientes).values([{ clientId: 123, nombre:"Maria jimenes", fecha:"09/11/2023", observaciones:"mantenimiento, cambio de rolineras" }])
await db.insert(Clientes).values([{ clientId: 123, nombre:"Hernan", fecha:"22/07/2022", observaciones:"alto consumo de corriente" }])


export default async function seed() {
}
