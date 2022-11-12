import path from "path";
const __dirname = path.resolve(); //otherwise ref error as using module type

export const getRoot = async (req, res) => {
  try {
    await res.sendFile(path.join(__dirname, "views", "index.html"));
  } catch (err) {
    res.status(500).json(err);
  }
};

export const notFound = async (req, res) => {
  try {
    res.status(404);
    if (req.accepts("html")) {
      await res.sendFile(path.join(__dirname, "views", "notFound.html"));
    } else if (req.accepts("json")) {
      await res.json({ message: "404 Not Found" });
    } else {
      await res.type("txt").send("404 Not Found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
