import { useState } from "react";
import { DocumentsRowData } from "@/types";

export const useMockDocumentsData = () => {
  const [data] = useState<DocumentsRowData[]>([
    {
      id: 1,
      filename: "Project Plan.pdf",
      fileSize: 1.2,
      dateUploaded: "Jun 12, 2024",
      lastUpdated: "Jun 15, 2024",
      uploadedBy: "Henry Masovid",
      actions: {
        canDownload: true,
        canDelete: true,
      },
    },
    {
      id: 2,
      filename: "Design Mockups.png",
      fileSize: 2.1,
      dateUploaded: "May 28, 2024",
      lastUpdated: "Jun 02, 2024",
      uploadedBy: "Bob Smith",
      actions: {
        canDownload: true,
        canDelete: false,
      },
    },
    {
      id: 3,
      filename: "Budget.xlsx",
      fileSize: 3.5,
      dateUploaded: "May 20, 2024",
      lastUpdated: "Jun 01, 2024",
      uploadedBy: "Charlie Williams",
      actions: {
        canDownload: true,
        canDelete: true,
      },
    },
    {
      id: 4,
      filename: "Meeting Minutes.docx",
      fileSize: 0.9,
      dateUploaded: "Jun 03, 2024",
      lastUpdated: "Jun 03, 2024",
      uploadedBy: "Diana Lee",
      actions: {
        canDownload: true,
        canDelete: true,
      },
    },
    {
      id: 5,
      filename: "Requirements.txt",
      fileSize: 0.6,
      dateUploaded: "May 10, 2024",
      lastUpdated: "Jun 05, 2024",
      uploadedBy: "Eve Brown",
      actions: {
        canDownload: true,
        canDelete: true,
      },
    },
    {
      id: 6,
      filename: "Risk Assessment.pdf",
      fileSize: 1.8,
      dateUploaded: "Apr 22, 2024",
      lastUpdated: "May 05, 2024",
      uploadedBy: "Frank Green",
      actions: {
        canDownload: true,
        canDelete: false,
      },
    },
    {
      id: 7,
      filename: "Final Report.docx",
      fileSize: 1.0,
      dateUploaded: "Jul 01, 2024",
      lastUpdated: "Jul 07, 2024",
      uploadedBy: "Grace Liu",
      actions: {
        canDownload: true,
        canDelete: true,
      },
    },
    {
      id: 8,
      filename: "Invoice.pdf",
      fileSize: 0.7,
      dateUploaded: "Jun 15, 2024",
      lastUpdated: "Jun 20, 2024",
      uploadedBy: "Henry Masovid",
      actions: {
        canDownload: true,
        canDelete: false,
      },
    },
    {
      id: 9,
      filename: "User Guide.pdf",
      fileSize: 4.3,
      dateUploaded: "Mar 10, 2024",
      lastUpdated: "Apr 15, 2024",
      uploadedBy: "Isabel Clark",
      actions: {
        canDownload: true,
        canDelete: true,
      },
    },
    {
      id: 10,
      filename: "Presentation Slides.pptx",
      fileSize: 5.2,
      dateUploaded: "Jul 20, 2024",
      lastUpdated: "Jul 22, 2024",
      uploadedBy: "John Doe",
      actions: {
        canDownload: true,
        canDelete: true,
      },
    },
    {
      id: 11,
      filename: "Proposal.docx",
      fileSize: 1.3,
      dateUploaded: "Aug 05, 2024",
      lastUpdated: "Aug 10, 2024",
      uploadedBy: "Kelly Moore",
      actions: {
        canDownload: true,
        canDelete: false,
      },
    },
    {
      id: 12,
      filename: "Contract.pdf",
      fileSize: 2.6,
      dateUploaded: "Jun 18, 2024",
      lastUpdated: "Jun 22, 2024",
      uploadedBy: "Liam King",
      actions: {
        canDownload: true,
        canDelete: true,
      },
    },
  ]);

  return data;
};
