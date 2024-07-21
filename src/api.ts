const url = "https://random-word-api.herokuapp.com/word?lang=es"

type Callback = (word: string | null, err: string | null) => void;

export function getRandomWord(cb: Callback){
    fetch(url)
    .catch((err: Error )=> {
        console.log("Api error:", err)
        return cb(null, err.message);
    })
    .then((res: any) => {
        if (!res.ok) return cb(null, res.status.toString());
        
        res.json().then((data: any) => {
            if (!Array.isArray(data)) return cb(null, "Not data encountered");
            if (data.length < 1) return cb(null, "Not data ecountered");
            
            return cb(data.at(0), null);
        })
    })
}
