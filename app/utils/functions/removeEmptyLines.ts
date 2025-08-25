const removeEmptyLines: Util = (text: string) => {
    const lines = text.split("\n")
    const nonEmptyLines = lines.filter(line => line.trim() !== "")
    const output = nonEmptyLines.join("\n")
    
    return {
        output: output,
        metaData: {
            "Original Lines": lines.length,
            "Remaining Lines": nonEmptyLines.length,
            "Removed": lines.length - nonEmptyLines.length
        }
    }
}

export default removeEmptyLines 