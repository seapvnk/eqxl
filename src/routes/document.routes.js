import Router from "koa-router";
import documentController from "../controllers/document.controller";

const documentRoutes = new Router();

documentRoutes.post("/documents", documentController.createDocumentController);

/*
documentRoutes.patch("/documents/:id", documentController.updateDocumentController);

documentRoutes.get("/documents/:id", documentController.getOneDocumentController);

documentRoutes.delete("/documents/:id", documentController.deleteDocumentController);
*/

documentRoutes.get("/documents", documentController.getDocumentsController);

export default documentRoutes;
