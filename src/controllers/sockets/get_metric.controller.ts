import { Socket } from "socket.io";
import TooManyRequestError from "../../errors/TooManyRequest.error";
import getMetrics from "../../services/getMetrics";

const getMetricController = async (client: Socket) => {
  client.on("symbol", (symbol) => {
    setInterval(async () => {
      try {
        const result = await getMetrics(symbol);
        client.emit("metric", result);
      } catch (error) {
        if (error instanceof TooManyRequestError) {
          client.emit("too-request-error", {
            message: error.message,
            status: error.statusCode,
          });
        }
      }
    }, 5000);
  });
};

export default getMetricController;
