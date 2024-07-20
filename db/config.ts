import { column, defineDb, defineTable, TRUE } from 'astro:db';

// https://astro.build/db/config

const Motors = defineTable({
  columns:{
    id: column.number({ primaryKey : true }),
    marca: column.text(),
    hp: column.text(),
    rpm: column.text(),
    volt: column.text(),
    amp: column.text(),
    modelo: column.text(),
    pasoMarcha: column.text(),
    vueltaMarcha: column.text(),
    calibreMarcha: column.text(),
    pasoArranque: column.text(),
    vueltaArranque: column.text(),
    calibreArranque: column.text(),
    bobinadoMarcha: column.text(),
    bobinadoArranque: column.text()
  }
});

const Clientes = defineTable({
  columns:{
    motorId: column.number({ references: () => Motors.columns.id }),
    nombre: column.text(),
    fecha: column.text(),
    observaciones: column.text()
  }
})

export default defineDb({
  tables: { Motors, Clientes }
});
