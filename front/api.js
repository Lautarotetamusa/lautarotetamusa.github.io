const url = "https://random-word-api.herokuapp.com/word?lang=es";
export function getRandomWord(cb) {
    fetch(url)
        .catch((err) => {
        console.log("Api error:", err);
        return cb(null, err.message);
    })
        .then((res) => {
        if (!res.ok)
            return cb(null, res.status.toString());
        res.json().then((data) => {
            if (!Array.isArray(data))
                return cb(null, "Not data encountered");
            if (data.length < 1)
                return cb(null, "Not data ecountered");
            return cb(data.at(0), null);
        });
    });
}
