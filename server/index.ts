import { app } from './app';

const port = app.get('port');

app.listen(port, () => {
  console.log(`App is running and listening to port: ${port}`);
});
