import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config

const Motor = defineTable({
  columns:{
    marca: column.text(),
    hp: column.number(),
    rpm: column.number(),
    volt: column.number(),
    amp: column.number(),
    modelo: column.text()
  }
});

const Clientes = defineTable({
  columns:{
    fecha: column.date(),
    nombre: column.text()
  }
});

export default defineDb({
  tables: { Motor, Clientes }
});
