import { db, Motors } from 'astro:db';

// https://astro.build/db/seed

await db.insert(Motors).values([{ marca:"pedrollo", hp:"3", rpm:"3600", volt:"120", amp:"12", modelo:"yaskawua", pasoMarcha: "tasdfagd", vueltaMarcha: "asasfsdaf", calibreMarcha: "fasafs", pasoArranque: "fasasfa", vueltaArranque: "fasda", calibreArranque: "asdafas", bobinadoMarcha: "dfafgasgahedf", bobinadoArranque: "aagasd" }]);

export default async function seed() {
}
