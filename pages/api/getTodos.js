import { table, getRecords } from "./utils/Airtable";

export default async (req, res) => {
  try {
    const records = await table.select({}).firstPage();
    const minifyRecords = getRecords(records);
    res.statusCode = 200;
    res.json(minifyRecords);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
