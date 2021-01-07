import { table, getRecordNotCompleted } from "./utils/Airtable";

export default async (req, res) => {
  const { id } = req.body;
  try {
    const deletedRecords = await table.destroy([id]);
    res.statusCode = 200;
    res.json(getRecordNotCompleted(deletedRecords[0]));
  } catch (err) {
    console.log(err);
    res.statusCode = 500;
    res.json({ msg: "Something went wrong" });
  }
};
