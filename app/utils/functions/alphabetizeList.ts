const alphabetizeList: Util = (text: string) => {
    const lines = text.split("\n").filter(line => line.trim() !== "")
    const sortedLines = [...lines].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    const output = sortedLines.join("\n")
    
    return {
        output: output,
        metaData: {
        }
    }
}

export default alphabetizeList 