import {
  createDocumentService,
  /*
    deleteDocumentService,
    getOneDocumentService,
    updateDocumentService,
    */
  getDocumentsService,
} from "../services/document.service";

const createDocumentController = async (ctx) => {
  ctx.response.status = 201;
  ctx.body = {
    document: await createDocumentService(ctx.request.body),
  };
};

/*
  const updateDocumentController = async (ctx) => {
    ctx.response.status = 200;
    ctx.body = {
      document: await updateDocumentService(ctx.params.id, ctx.request.body),
    };
  };
  
  const deleteDocumentController = async (ctx) => {
    ctx.response.status = 200;
    ctx.body = {
      documents: await deleteDocumentService(ctx.params.id),
    };
  };
  
  const getOneDocumentController = async (ctx) => {
    ctx.response.status = 200;
    ctx.body = {
      documents: await getOneDocumentService(ctx.params.id),
    };
  };

  */

const getDocumentsController = async (ctx) => {
  ctx.response.status = 200;
  ctx.body = {
    documents: await getDocumentsService(),
  };
};

export default {
  createDocumentController,
  /*
    updateDocumentController,
    deleteDocumentController,
    getOneDocumentController,
    */
  getDocumentsController,
};
