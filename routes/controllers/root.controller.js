import path from "path";
const __dirname = path.resolve(); //otherwise ref error as using module type

export const getRoot = async (req, res) => {
  try {
    await res.sendFile(path.join(__dirname, "views", "index.html"));
  } catch (err) {
    res.status(500).json(err);
  }
};
