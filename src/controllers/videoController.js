export const trending = (req, res) =>
    res.render("home", { pageTitle: "Home", potato: "tomato" });
export const search = (req, res) => res.send("Search video");
export const upload = (req, res) => res.send("Upload Vidio");
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const deleteVideo = (req, res) => {
    return res.send(`Delete Vidio #${req.params.id}`);
};
