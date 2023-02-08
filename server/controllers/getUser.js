const getUser = (req, res) => {
    res.status(200).send(req.user)
}

export default getUser