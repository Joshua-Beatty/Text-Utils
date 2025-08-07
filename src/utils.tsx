import { Brackets, CopyMinus, FileJson2 } from "lucide-react";
import removeDuplicates from "./utils/removeDuplicates";
import jsonlToCsv from "./utils/jsonlToCSV";
import arrayToCSV from "./utils/jsonArrayToCSV";


const utils: Record<string, [Util, React.ReactNode]> = {
    "Remove Duplicate Lines": [removeDuplicates, <CopyMinus/>],
    "JSON Array to CSV": [arrayToCSV, <Brackets/>],
    "JSON Lines to CSV": [jsonlToCsv, <FileJson2/>]
}

export default utils