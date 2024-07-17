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
    nombre: column.text({unique: true}),
    fecha: column.text(),
  }
})

export default defineDb({
  tables: { Motors }
});
