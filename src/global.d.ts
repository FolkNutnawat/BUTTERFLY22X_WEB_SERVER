declare namespace Express {
  interface Request {
    auth: { employee: string; user: string };
  }
  namespace Multer {
    interface File {
      originalname: string;
      uploadError: any;
      publicUrl: string;
      buffer: Buffer;
      ref: string;
    }
  }
}
