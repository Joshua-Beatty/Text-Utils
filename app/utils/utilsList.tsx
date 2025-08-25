import { Brackets, CopyMinus, FileJson2, SortAsc, Trash2 } from "lucide-react";
import removeDuplicates from "./functions/removeDuplicates";
import jsonlToCsv from "./functions/jsonlToCSV";
import arrayToCSV from "./functions/jsonArrayToCSV";
import alphabetizeList from "./functions/alphabetizeList";
import removeEmptyLines from "./functions/removeEmptyLines";


const utils: Record<string, [Util, React.ReactNode]> = {
    "Remove Duplicate Lines": [removeDuplicates, <CopyMinus/>],
    "Remove Empty Lines": [removeEmptyLines, <Trash2/>],
    "Alphabetize List": [alphabetizeList, <SortAsc/>],
    "JSON Array to CSV": [arrayToCSV, <Brackets/>],
    "JSON Lines to CSV": [jsonlToCsv, <FileJson2/>],
}

export default utils