export const Houses = ["alterok", "erevald", "gaudmire", "spectreseek"] as const;
export type House = (typeof Houses)[number];
