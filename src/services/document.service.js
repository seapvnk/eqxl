import {
  createDocumentRepository,
  /*
    deleteDocumentRepository,
    getOneDocumentRepository,
    updateDocumentRepository,
    */
  getDocumentsRepository,
} from "../repositories/document.repository";

export const createDocumentService = (document) =>
  createDocumentRepository(document);

/*
  export const updateDocumentService = (id, document) => updateDocumentRepository(id, document);
  
  export const deleteDocumentService = (id) => deleteDocumentRepository(id);
  
  export const getOneDocumentService = (id) => getOneDocumentRepository(id);
  
  
  */
export const getDocumentsService = () => getDocumentsRepository();

export default {
  createDocumentService,
  /*
    updateDocumentService,
    deleteDocumentService,
    getOneDocumentService,
    */
  getDocumentsService,
};
