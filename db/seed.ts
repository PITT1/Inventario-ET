import { db, Motors } from 'astro:db';

// https://astro.build/db/seed

await db.insert(Motors).values([{ marca: "Pedrollo" , hp: "3" , rpm: "3600"}])

export default async function seed() {
}
