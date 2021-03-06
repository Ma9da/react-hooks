import { useCallback, useState } from 'react';
import Hello from './Hello';
import useFetch from './useFetch';
import { useMemo } from 'react';
const Second = () => {
    const [count, setCount] = useState(0);
    const { data, loading } = useFetch(`https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json`)
    const computeLongestWord = useCallback((quote) => {
        if (!quote) {
            return []
        }
        console.log("computing longest word");
        let longestWord = ""
        JSON.parse(quote).forEach(sentence =>
            sentence.split(' ').forEach(word => {
                if (word.length > longestWord.length) {
                    longestWord = word
                }
            })
        );
        return longestWord
    },[])
    // eslint-disable-next-line no-unused-vars
    const longestWord = useMemo(() => computeLongestWord(data), [data, computeLongestWord])
    return (
        <>
            <p>{count}</p>
            <Hello increment={() => setCount(count + 1)} />
            <p> longes word: " {data ? computeLongestWord(data) : loading} "</p>
        </>
    );
}
export default Second;
