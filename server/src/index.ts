import app from "./app";
import config from "./config";

const port = config.PORT || 8000;

//Listening to the server
app.listen(port, () => {
  console.log(`Server started successfully at port: ${port}`);
});
