import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

export const ServeStaticForRoot = () => {
    return ServeStaticModule.forRoot({
        rootPath: join(process.cwd(), "./", "build"),
    })
}