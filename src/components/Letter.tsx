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
  return (
    <section className="w-full bg-quinary h-full rounded-lg border-[0.1px] border-secondary/45">
      <div className=" [&>*:nth-child(n+3)]:hidden lg:[&>*:nth-child(n+3)]:flex  text-xl grid grid-cols-2 lg:grid-cols-4 h-[10%]">
        {TABLE_HEAD.map((head: String, index: number) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <p>{head}</p>
            </div>
          );
        })}
      </div>
      <ul className="h-[90%] overflow-y-scroll border-2  border-gray-600/5 ">
        {repositories?.map(({ name, html_url, created_at, pushed_at }, index: number) => {
          const Date = [created_at, pushed_at].map((date) => ParsingDate(date));
          return (
            <li key={index} className="h-[20%] text-md [&>*:nth-child(n+3)]:hidden lg:[&>*:nth-child(n+2)]:block      grid items-center  grid-cols-2 lg:grid-cols-4 border-b-2  border-gray-600/25">
              <p className="break-all  pl-2 text-center w-full">{name}</p>
              <a className=" text-center w-full" href={html_url}>
                Navegar
              </a>
              <p className="pl-2 lg:text-center w-full text-center">{Date[0]}</p>
              <p className="pl-2 lg:text-center w-full text-center">{Date[1]}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
/* return repositories ? (
    <Card placeholder={""} className="h-[70%] w-full overflow-y-scroll bg-quinary my-auto overflow-x-hidden  ">
      <table className="w-full min-w-max table-auto text-left overflow-hidden   ">
        <thead>
          <tr className="text-white   [&>*:nth-child(n+3)]:hidden       ">
            {TABLE_HEAD.map((head, index: number) => (
              <th key={head} onClick={() => index != 1 && HandleSorting(index)} className={`${index != 1 && "lg:active:bg-white/30"}  transition-all p-4`}>
                <p color="blue-gray" className="text-left font-extrabold text-xl leading-none opacity-70  ">
                  {head}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="max-h-[300px] border-2  border-gray-600/5 overflow-y-scroll">
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
  ); */
