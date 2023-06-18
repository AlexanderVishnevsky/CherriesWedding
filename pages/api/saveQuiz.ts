import { NextApiRequest, NextApiResponse } from 'next';

import { google } from 'googleapis';

/**
 * Save form data to Google Sheets
 * @param req
 * @param res
 */
export async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
        if (req.method === 'POST') {
            const { name, transfer, drinks, allergies } = req.body;
            const auth = new google.auth.GoogleAuth({
                credentials: {
                    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                    client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
                    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                },
                scopes: [
                    'https://www.googleapis.com/auth/drive',
                    'https://www.googleapis.com/auth/drive.file',
                    'https://www.googleapis.com/auth/spreadsheets',
                ],
            });

            const sheets = google.sheets({
                auth,
                version: 'v4',
            });

            const response = await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.SPREADSHEET_ID,
                range: `${process.env.SPREADSHEET_NAME}!A2:D`,
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[name ?? '', transfer ?? '', drinks ?? '', allergies ?? '']],
                },
            });
            res.status(201).json({ message: 'Done', response });
        }
    } catch (e) {
        console.error('[saveQuiz error]: ', e);
        res.status(400);
    }
}
