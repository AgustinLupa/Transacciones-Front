import { POST } from "./Httpr";

export const GetWallet = async (data) => {
    let url = 'listarCarteras';
    let rsp = await POST(url, data);

    return rsp;
}