import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";
import {
  ClientTransaction,
  handleXMigration,
} from "@lami/x-client-transaction-id";

const document = await handleXMigration();
const transaction = await ClientTransaction.create(document);

const app = new Elysia();
app.use(swagger());

app.get(
  "x-client-transaction-id",
  async (context) => {
    const {
      query: { method, pathname },
    } = context;
    const xClientTransactionId = await transaction.generateTransactionId(
      method,
      pathname
    );
    return {
      "x-client-transaction-id": xClientTransactionId,
    };
  },
  {
    query: t.Object({
      method: t.String({
        examples: ["GET", "POST"],
      }),
      pathname: t.String({
        examples: [
          "/graphql/HeWHY26ItCfUmm1e6ITjeA/UserTweets",
          "/graphql/1VOOyvKkiI3FMmkeDNxM9A/UserByScreenName",
        ],
      }),
    }),
  }
);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
