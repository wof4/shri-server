const postResult = require("../api/post.js/postResult");

const runBuild = require("./runBuild");



module.exports = async (req, res) => {
    res.json({
        params: {
            "buildId": req.body.id,
            "dateTime": new Date().toISOString(),
        },
    });
    try {
        const result = await runBuild(req.body);
        postResult(result)
    } catch (error) {
        console.log(error)
        res.send('BUILD AGENT --- repository copy error');
    }
};

