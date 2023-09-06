'use client'
import React, { useEffect, useState } from "react";
import axios from "axios"; // Importa axios

export default function mostrarPokedex() {
  let [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API de Pokémon para obtener los datos de los primeros 151 Pokémon
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        const pokemonDataArray = response.data.results;

        // Mapea los datos de los Pokémon para realizar una solicitud a la API de cada uno y obtener más detalles
        const requests = pokemonDataArray.map((pokemon) =>
          axios.get(pokemon.url)
        );

        // Usa Promise.all para esperar a que se completen todas las solicitudes
        Promise.all(requests)
          .then((responses) => {
            const pokemonDetails = responses.map((response) => response.data);

            // Actualiza el estado con los detalles de los Pokémon
            setPokemonList(pokemonDetails);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-slate-100 grid grid-cols-3 gap-4 p-8 shadow-inner" id="root">
        {/* Mostrar la lista de Pokémon */}
        {pokemonList.map((pokemon, index) => (
          <div
            className="bg-white rounded-xl shadow-sm shadow-slate-400 p-2"
            key={pokemon.id}
          >
            <div className="flex justify-center">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </div>
            <div className="flex flex-row gap-x-3 justify-center py-2">
              <p className="text-black bg-slate-300 rounded-full text-lg font-semibold px-3">
                {pokemon.id}
              </p>
              <h3 className="text-black text-xl font-extrabold">{pokemon.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
