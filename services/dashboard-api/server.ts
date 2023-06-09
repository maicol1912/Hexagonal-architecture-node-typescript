import express from "express"
import cors from "cors"
import * as trpcExpress from "@trpc/server/adapters/express"
import { localTRPCCompose } from "./app/composition-root";
//Created for each request
const createContext = ()=>({});

const app = express()
app.use(cors())

app.use(
    "http://localhost:4000/trpc",
    trpcExpress.createExpressMiddleware({
        router:localTRPCCompose().appRouter,createContext
    })
)

app.listen(4000,()=>{
    console.log("server started on http://localhost:4000/trpc")
})