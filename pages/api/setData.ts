// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import path from 'path';
import { promises as fs } from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';

//Find the absolute path of the json directory
const jsonDirectory = path.join(process.cwd(), 'json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            // Read the existing data from the JSON file
            const jsonData = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
            const objectData = JSON.parse(jsonData);

            // Get the data from the request body
            const { name, email } = req.body;

            // Add the new data to the object
            const newData = {
                ...objectData,
                name,
                email,
            };

            // Convert the object back to a JSON string
            const updatedData = JSON.stringify(newData);

            // Write the updated data to the JSON file
            await fs.writeFile(jsonDirectory + '/data.json', updatedData);

            // Send a success response
            res.status(200).json('Data stored successfully');
        } else {
            //Read the json data file data.json
            const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
            //Return the content of the data file in json format
            res.status(200).json(fileContents);
        }
    } catch (error: any) {
        console.error(error);
        // Send an error response
        res.status(500).json('Error storing data: ' + (error?.message ?? error));
    }
}
