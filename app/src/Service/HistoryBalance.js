import { POST, GET } from "./Httpr";

export const GetHistoryBalanceByWallet = async (id, wallet) => {
  let url = "listarXcartera/" + id;
  let rsp = await POST(url, wallet);

  return rsp;
};

export const GetPages = async (id) => {
  let url = "NumeroPaginas/" + id;
  let rsp = await GET(url);

  return rsp;
};

export const GetPercentage = async (id, date) => {
  let url = "ListarXfecha/" + id;
  let rsp = await POST(url, date);

  return rsp;
};

export const loadPercentage = async (id) => {
  const today = new Date();
  const lastMonth = new Date(today);
  lastMonth.setMonth(today.getMonth() - 1);

  // Formatear la fecha en el formato deseado (por ejemplo, 'YYYY-MM-DD')
  const rsp = await GetPercentage(id, {
    fecha_inicio: lastMonth.toISOString().split("T")[0],
    fecha_fin: today.toISOString().split("T")[0],
  });
  return rsp;
};
