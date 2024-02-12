export const trending = (req, res) => res.send("Home Page Vidios");
export const search = (req, res) => res.send("Search video");
export const upload = (req, res) => res.send("Upload Vidio");
export const see = (req, res) => {
    return res.send(`Watch Vidio #${req.params.id}`);
};
export const edit = (req, res) => {
    return res.send(`Edit Vidio #${req.params.id}`);
};
export const deleteVideo = (req, res) => {
    return res.send(`Delete Vidio #${req.params.id}`);
};
