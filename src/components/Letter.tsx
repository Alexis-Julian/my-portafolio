"use client";
import { Repository } from "@/shared/types";
import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { json } from "stream/consumers";

const TABLE_HEAD = ["Nombre", "URL Repo", "Creacion", "Ultima acutlizacion"];

export default function DefaultTimeline({ repositories }: { repositories: Repository[] | null }) {
  function HandleSorting(index: number) {}

  function ParsingDate(date: Date) {
    const fecha = new Date(date);
    let dia = String(fecha.getDate());
    dia.length < 2 && (dia = "0" + dia);
    let mes = String(fecha.getMonth() + 1);
    mes.length < 2 && (mes = "0" + mes);
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  }

  return repositories ? (
    <Card placeholder={""} className="h-auto w-full overflow-y-scroll bg-quinary my-auto ">
      <table className="w-full min-w-max table-auto text-left   ">
        <thead>
          <tr className="text-white  [&>*:nth-child(n+3)]:hidden  bg-black/   ">
            {TABLE_HEAD.map((head, index: number) => (
              <th key={head} onClick={() => index != 1 && HandleSorting(index)} className={`${index != 1 && "lg:active:bg-white/30"} transition-all p-4`}>
                <p color="blue-gray" className="font-extrabold text-xl leading-none opacity-70  ">
                  {head}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>*:nth-child(n+5)]:hidden border-2 border-gray-600/5">
          {repositories.map(({ name, html_url, created_at, pushed_at, commits_url }, index) => {
            const fechas = [created_at, pushed_at].map((e) => ParsingDate(e));
            return (
              <tr
                key={name}
                className="[&>*:nth-child(n+3)]:hidden border-b-2  border-gray-600/25 h-[100px] max-h-10 text-white lg:hover:bg-tertiary/5 lg:hover:text-quaternary lg:animate-fade-in-right	  transition-all"
              >
                <td className="p-4">
                  <p color="blue-gray" className="font-normal">
                    {name}
                  </p>
                </td>
                <td className="p-4">
                  <a color="blue-gray" className="font-normal" href={html_url}>
                    Navegar
                  </a>
                </td>
                <td className="p-4">
                  <p color="blue-gray" className="font-normal">
                    {fechas[0]}
                  </p>
                </td>
                <td className="p-4">
                  <p color="blue-gray" className="font-medium">
                    {fechas[1]}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  ) : (
    <div>Loading...</div>
  );
}
