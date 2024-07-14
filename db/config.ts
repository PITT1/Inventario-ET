import { column, defineDb, defineTable, TRUE } from 'astro:db';

// https://astro.build/db/config

const Motors = defineTable({
  columns:{
    marca: column.text(),
    hp: column.text(),
    rpm: column.text(),
    volt: column.text(),
    amp: column.text(),
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
  tables: { Motors }
});
