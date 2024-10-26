import express from "express";
import {initTRPC} from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import zod from "zod";

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});
type Context = Awaited<ReturnType<typeof createContext>>;

const trpc = initTRPC.context<Context>().create();

const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello from server-side");
});

app.listen(port, () => {
  console.log(`server-side listening at http://localhost:${port}`);
});
