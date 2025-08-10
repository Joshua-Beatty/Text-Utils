import { Brackets, CopyMinus, FileJson2 } from "lucide-react";
import removeDuplicates from "./functions/removeDuplicates";
import jsonlToCsv from "./functions/jsonlToCSV";
import arrayToCSV from "./functions/jsonArrayToCSV";


const utils: Record<string, [Util, React.ReactNode]> = {
    "Remove Duplicate Lines": [removeDuplicates, <CopyMinus/>],
    "JSON Array to CSV": [arrayToCSV, <Brackets/>],
    "JSON Lines to CSV": [jsonlToCsv, <FileJson2/>]
}

export default utils