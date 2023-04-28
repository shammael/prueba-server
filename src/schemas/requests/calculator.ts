import { z } from "zod";
import { CryptoData } from "../../types/CryptoTypes";

const calculatorRequestSchema = z.object({
  crypto: z.enum([CryptoData.Bitcoin, CryptoData.Ethereum, CryptoData.Cardano]),
  amount: z.number().gt(0),
});

export default calculatorRequestSchema;
