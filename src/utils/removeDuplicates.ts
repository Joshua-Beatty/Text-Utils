const removeDuplicates: Util = (text: string) => {
    const lines = text.split("\n")
    const set = new Set(lines)
    const output = [...set.values()].join("\n")
    return {
        output: output,
        metaData: {
            "Original Lines": lines.length,
            "Remaining": set.size,
            "Removed": lines.length - set.size,
        }
    }
}


export default removeDuplicates