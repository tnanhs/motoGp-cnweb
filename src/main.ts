declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbConfig } from './database/index';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
DbConfig.initialize()
  .then(()=>{
    console.log("Connected successful")
  })
  .catch((error) => console.log(error))
