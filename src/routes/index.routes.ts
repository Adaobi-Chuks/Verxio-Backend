import userRouter from "./user.routes";
import contractRouter from "./contract.routes";
import postRouter from "./post.routes";
import docRouter from "./doc.routes";
import { basePath } from "../configs/constants.configs";

export default (app: { use: (arg0: string, arg1: any) => void; }) => {
    app.use(`${basePath}/profiles`, userRouter);
    app.use(`${basePath}/contracts`, contractRouter);
    app.use(`${basePath}/posts`, postRouter);
    app.use(`${basePath}/docs`, docRouter);
};