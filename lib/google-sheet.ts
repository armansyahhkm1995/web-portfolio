import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
      /^"(.*)"$/,
      "$1",
    ).replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

const spreadsheetId = process.env.GOOGLE_SHEETS_ID!;
const sheetName = "Leads";

export async function appendContactRow(data: {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  interest: string;
  detail: string;
}) {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:G`,
    valueInputOption: "USER_ENTERED",

    requestBody: {
      values: [
        [
          new Date().toLocaleString("id-ID"),

          data.fullName,

          data.organization,

          data.email,

          data.phone,

          data.interest,

          data.detail,
        ],
      ],
    },
  });
}
