import { column, defineDb, defineTable, TRUE } from 'astro:db';

// https://astro.build/db/config

const Motor = defineTable({
  columns:{
    motorID: column.number({references: () => Clientes.columns.clientID }),
    marca: column.text(),
    hp: column.number(),
    rpm: column.number(),
    volt: column.number(),
    amp: column.number(),
    modelo: column.text(),
    pasoArranque: column.number(),
    vueltasArranque: column.number(),
    calibreArranque: column.number(),
    pasoMarcha: column.number(),
    vueltaMarcha: column.number(),
    calibreMarcha: column.number()
  }
});

const Clientes = defineTable({
  columns:{
    clientID: column.number({primaryKey: true}),
    fecha: column.date(),
    nombre: column.text()
  }
});

export default defineDb({
  tables: { Motor, Clientes }
});
