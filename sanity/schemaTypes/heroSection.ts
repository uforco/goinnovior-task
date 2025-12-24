import { defineField } from "sanity";

export const heroCover = {
  name: "videoUpload",
  title: "Video Upload",
  type: "document", // This is a document type, so it's an actual content type.
  fields: [
    defineField({
      name: "video",
      title: "Video File",
      type: "file", // Sanity will treat this as a file upload field.
      description: "Upload a video file (e.g., MP4, MOV, AVI)",
      options: {
        accept: ".mp4, .mov, .avi, ", // Restrict file types if needed
      },
      validation: (Rule) => Rule.required(), // Makes the video upload required
    }),
    defineField({
      name: "title",
      title: "Video Title",
      type: "string",
      description: "A title for the video",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
     defineField({
      name: "head_line",
      title: "Head line",
      type: "string",
      description: "A title for the video",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of the video content",
    }),
    defineField({
      name: "active",
      title: "active video",
      type: "boolean",
      description: "A brief description of the video content",
    }),
  ],
};
