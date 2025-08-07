import { CopyMinus } from "lucide-react";
import removeDuplicates from "./utils/removeDuplicates";


const utils: Record<string, [Util, React.ReactNode]> = {
    "Remove Duplicates": [removeDuplicates, <CopyMinus/>]
}

export default utils