import {
  generateUploadButton,
  generateUploadDropzone,
  generateReactHelpers,
  UseUploadthingProps
} from "@uploadthing/react";


import type { OurFileRouter } from "@/app/api/uploadthing/core";

// components
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// hooks
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();