import { I_coinInfo } from "../../type";

const getCoin = async (value: string): Promise<I_coinInfo | unknown> => {
    return new Promise((res, rej) => {
        fetch(`${process.env.API_BASE_URL}?fsym=${value}&tsyms=USD&api_key=${process.env.API_KEY}`)
            .then((resp) => resp.json())
            .then((resp: I_coinInfo) => res(resp))
            .catch((err: Error) => rej(err));
    })
        .catch((err: Error) => console.log(err));
};

export default getCoin;