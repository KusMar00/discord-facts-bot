import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("fact")
  .setDescription("Spits out a random fact");

export async function execute(interaction) {
  const message = fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.API_KEY,
    },
  })
    .then((response) => response.json())
    .then((json) => json[0].fact);

  await interaction.reply(await message);
}
