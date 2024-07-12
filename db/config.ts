import { column, defineDb, defineTable, TRUE } from 'astro:db';

// https://astro.build/db/config

const Clientes = defineTable({
  columns:{
    clientID: column.number({primaryKey: true}),
    fecha: column.date(),
    nombre: column.text()
  }
});

const Motors = defineTable({
  columns:{
    motorID: column.number({references: () => Clientes.columns.clientID }),
    marca: column.text(),
    hp: column.number(),
    rpm: column.number(),
    volt: column.text(),
    amp: column.number(),
    modelo: column.text(),
    pasoArranque: column.text(),
    vueltasArranque: column.text(),
    calibreArranque: column.text(),
    pasoMarcha: column.text(),
    vueltaMarcha: column.text(),
    calibreMarcha: column.text(),
    observaciones: column.text()
  }
});

export default defineDb({
  tables: { Motors, Clientes }
});
